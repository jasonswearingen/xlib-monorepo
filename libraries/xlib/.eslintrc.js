
// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-config/patch/modern-module-resolution")

module.exports = {
	//parserOptions: { },
	env: {
		browser: true,
		es2020: true,
		node: true,
		"jest/globals": true,  //https://www.npmjs.com/package/eslint-plugin-jest		
	},
	"extends": [
		"@rushstack/eslint-config",
		"@rushstack/eslint-config/react",
		"eslint:recommended",
		"plugin:react/recommended",
		//"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 11,
		"sourceType": "module",
		tsconfigRootDir: __dirname
	},
	"plugins": [
		"react",
		"jest",
		//"@typescript-eslint"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],

		//https://github.com/typescript-eslint/typescript-eslint/blob/v3.4.0/packages/eslint-plugin/docs/rules/typedef.md
		"@typescript-eslint/typedef": "off",//use tsconfig strict errors instead			


	}
}
