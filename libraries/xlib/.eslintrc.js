// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-config/patch/modern-module-resolution")

module.exports = {
	"$schema": "http://json.schemastore.org/eslintrc",
	//"root": true,  //no impact?
	//"root": true,
	"extends": [
		"@xlib/eslint-config"
	],
	"parserOptions": {
		"tsconfigRootDir": __dirname //required to find the tsconfig.json
		"tsconfigRootDir": __dirname
	}
}