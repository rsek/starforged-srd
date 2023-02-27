/**
 * stylelint 16+ friendly version of @mavrin/stylelint-declaration-use-css-custom-properties
 */

import CssTree, { type CssNode } from 'css-tree'
import stylelint from 'stylelint'

const ruleName = 'mavrin/stylelint-declaration-use-css-custom-properties'

const messages = stylelint.utils.ruleMessages(ruleName, {
	parseError: function (value) {
		return `Can't parse value "${value.toString()}"`
	},
	unexpectedDecl: function (decl, definition) {
		return `Please use css custom property for next css definition \`${definition.toString()}\` in "${decl.toString()}"`
	}
})

function isStringRegex(string: string) {
	return string[0] === '/' && string[string.length - 1] === '/'
}

function toRegex(string: string) {
	return new RegExp(string.slice(1, -1))
}

const ignorePredicate = (value: string, skipNames?: string[]) => {
	if (skipNames == null || skipNames.length === 0) {
		return false
	}
	return Boolean(
		skipNames.find((name) => {
			if (isStringRegex(name)) {
				const regExp = toRegex(name)
				return regExp.test(value)
			}
			return value === name
		})
	)
}

interface PluginOptions {
	cssDefinitions: string[]
	ignoreProperties: string[]
	ignoreValues: string[]
}

module.exports = stylelint.createPlugin(
	ruleName,
	// @ts-expect-error csstree types aren't complete, not sure how to fix this
	({ cssDefinitions = [], ignoreProperties, ignoreValues }: PluginOptions) => {
		return (postcssRoot, postcssResult) => {
			if (cssDefinitions.length === 0) {
				return
			}
			postcssRoot.walkDecls(function (decl) {
				// ignore properties from ignore list
				if (
					ignorePredicate(decl.prop, ignoreProperties) ||
					ignorePredicate(decl.value, ignoreValues)
				) {
					return
				}
				let ast: CssNode

				try {
					ast = CssTree.parse(decl.value, {
						context: 'value'
					})
				} catch (e) {
					stylelint.utils.report({
						message: messages.parseError(decl.value),
						node: decl,
						result: postcssResult,
						ruleName
					})
					return
				}
				cssDefinitions.forEach((cssDefinition: string) => {
					const fragments = CssTree.lexer.findValueFragments(
						decl.prop,
						ast,
						'Type',
						cssDefinition
					)
					if (fragments.length) {
						const message = messages.unexpectedDecl(
							decl.toString(),
							cssDefinition
						)

						stylelint.utils.report({
							message,
							node: decl,
							result: postcssResult,
							ruleName
						})
					}
				})
			})
		}
	}
)

module.exports.ruleName = ruleName
module.exports.messages = messages
