//import nodePolyfills from "rollup-plugin-node-polyfills"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

const pkg = require( "../package.json" )

import * as rollup from "rollup"
//! need help?  see this repo: https://github.com/rollup/rollup-starter-lib/blob/master/rollup.config.js
const config: rollup.RollupOptions = {
	input: pkg.libEsmEntry,
	output: {
		name: pkg.name,
		file: pkg.browser,
		format: "umd"
	},
	plugins: [
		resolve(), // so Rollup can find `ms`
		commonjs() // so Rollup can convert `ms` to an ES module
	]
}


// [] = [
// 	// browser-friendly UMD build
// 	{
// 		input: pkg.libEsmEntry,
// 		output: {
// 			name: pkg.name,
// 			file: pkg.browser,
// 			format: "umd"
// 		},
// 		plugins: [
// 			resolve(), // so Rollup can find `ms`
// 			commonjs() // so Rollup can convert `ms` to an ES module
// 		]
// 	},

// 	// // CommonJS (for Node) and ES module (for bundlers) build.
// 	// // (We could have three entries in the configuration array
// 	// // instead of two, but it's quicker to generate multiple
// 	// // builds from a single configuration where possible, using
// 	// // an array for the `output` option, where we can specify
// 	// // `file` and `format` for each target)
// 	// {
// 	// 	input: pkg.libEsmEntry,
// 	// 	//external: [ "ms" ],
// 	// 	output: [
// 	// 		{ file: pkg.main, format: "cjs" },
// 	// 		{ file: pkg.module, format: "es" }
// 	// 	]
// 	// }
// ]
// {

// 	plugins: [
// 		//support most mode modules.  https://github.com/ionic-team/rollup-plugin-node-polyfills
// 		//nodePolyfills() as never,
// 		//support 3rd party packages
// 		resolve( {
// 			//preferBuiltins: false
// 		} ),
// 		commonjs( {
// 			//esmExternals: true
// 			include: /node_modules/,
// 		} as never ),
// 	],
// 	input: "lib-esm/_main.js",
// 	output: {
// 		name: "xlib",
// 		//file: "./dist/xlib-bundle.mjs",
// 		file: pkg.browser
// 		//dir: "./dist/",
// 		format: "esm",
// 		/**
// 		 * chunk for each module
// 		 * https://rollupjs.org/guide/en/#outputpreservemodules
// 		 */
// 		//preserveModules: true,
// 		banner: "/* xlib by JasonS@Novaleaf.com : https://github.com/Novaleaf/xlib */",
// 		footer: "/* xlib by JasonS@Novaleaf.com : https://github.com/Novaleaf/xlib */",

// 		//optimize
// 		compact: false,
// 		minifyInternalExports: false,
// 		sourcemap: true,
// 		//huh?
// 		/**
// 		 * hoistTransitiveImports
// 		 * inlineDynamicImports
// 		 */
// 		intro: "var global = typeof self !== undefined ? self : this;"

// 	}

// }

export default config


/**
 *
 * for module support
 * -
 *
 *
 */