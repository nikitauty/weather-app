/* eslint-env node */

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:react-hooks/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: true,
		tsconfigRootDir: __dirname,
	},
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'no-console': 'warn',
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-single'],
		'react-refresh/only-export-components': 'warn',
		'@typescript-eslint/no-unused-vars': ['warn'],
		'react-hooks/rules-of-hooks': 'error',
		'@typescript-eslint/no-use-before-define': ['error'],
		'@typescript-eslint/semi': ['error'],
		'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
	},
};
