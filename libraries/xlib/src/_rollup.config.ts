//import nodePolyfills from "rollup-plugin-node-polyfills"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"

import * as rollup from "rollup"

const config: rollup.RollupOptions = {

	plugins: [
		//support most mode modules.  https://github.com/ionic-team/rollup-plugin-node-polyfills
		//nodePolyfills() as never,
		//support 3rd party packages
		resolve( {
			//preferBuiltins: false
		} ),
		commonjs( {
			//esmExternals: true
			include: /node_modules/,
		} as never ),
	],
	input: "lib-esm/_main.js",
	output: {
		name: "xlib",
		file: "./dist/xlib-bundle.mjs",
		//dir: "./dist/",
		format: "esm",
		/**
		 * chunk for each module
		 * https://rollupjs.org/guide/en/#outputpreservemodules
		 */
		//preserveModules: true,
		banner: "/* xlib by JasonS@Novaleaf.com : https://github.com/Novaleaf/xlib */",
		footer: "/* xlib by JasonS@Novaleaf.com : https://github.com/Novaleaf/xlib */",

		//optimize
		compact: false,
		minifyInternalExports: false,
		sourcemap: true,
		//huh?
		/**
		 * hoistTransitiveImports
		 * inlineDynamicImports
		 */

	}

}

export default config


/**
 *
 * for module support
 * -
 *
 *
 */