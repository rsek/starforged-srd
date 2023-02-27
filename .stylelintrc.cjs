/**
 * @type { import('stylelint').Config }
 */
module.exports = {
	plugins: [
		'stylelint-use-nesting',
		'stylelint-declaration-strict-value'
		// '@mavrin/stylelint-declaration-use-css-custom-properties'
	],
	extends: [
		'stylelint-config-standard',
		'stylelint-config-html/vue',
		'stylelint-config-recommended-vue',
		'stylelint-config-concentric-order'
	],
	rules: {
		'declaration-empty-line-before': null,
		'csstools/use-nesting': 'always',
		'scale-unlimited/declaration-strict-value': 'color',
		'custom-property-pattern': null
	},
	ignorePatterns: ['node_modules']
}
