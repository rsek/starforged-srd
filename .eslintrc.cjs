/**
 * @type { import ('eslint').ESLint.Options }
 */
module.exports = {
	extends: ['standard-with-typescript', 'eslint-config-prettier'],
	parserOptions: {
		project: './tsconfig.json',
		ignore: ['components.d.ts']
	},
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off'
	}
}
