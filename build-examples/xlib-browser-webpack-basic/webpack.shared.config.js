'use strict';

//as per: https://github.com/microsoft/rushstack/blob/master/build-tests/heft-webpack-basic-test/webpack.config.js

//a gppd example of settings:  https://github.com/microsoft/tsdoc/blob/master/playground/webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CONFIG = {
	reactUrl: {
		dev: 'https://cdnjs.cloudflare.com/ajax/libs/react/16.4.2/umd/react.development.js',
		production: 'https://cdnjs.cloudflare.com/ajax/libs/react/16.4.2/umd/react.production.min.js'
	},

	reactDomUrl: {
		dev: 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.4.2/umd/react-dom.development.js',
		production: 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.4.2/umd/react-dom.production.min.js'
	},

	/** ts: : "dev" | "production" */
	// runtimeEnv: "dev",
	// isProduction: false,

}



const path = require('path');



function _generateBaseWebpackConfiguration({ runtimeEnv = "dev", isProduction = false }) {
	const webpackConfig = {
		mode: 'development',
		resolve: {
			extensions: ['.js', '.jsx', '.json']
		},
		entry: {
			'xlib-test': path.join(__dirname, 'lib-esm', '_main.js')
		},
		output: {
			path: path.join(__dirname, "web", "dist"),
			filename: '[name]_[contenthash].js'
		},
		externals: {
			'react': 'React',
			'react-dom': 'ReactDOM',
			'react-dom/server': 'ReactDOMServer'
		},
		devtool: (isProduction) ? undefined : 'source-map',
		plugins: [
			new HtmlWebpackPlugin({
				//inject the output at the bottom of the template <body>
				inject: true,
				template: `handlebars-loader!${path.join(__dirname, 'web', 'index.hbs')}`,
				chunks: {},
				templateParameters: {
					scriptsToInclude: [
						{ url: CONFIG.reactUrl[runtimeEnv] },
						{ url: CONFIG.reactDomUrl[runtimeEnv] },
					]
				}
			}),
		]
	}

	return webpackConfig
}

module.exports.generateBuildWebpackConfiguration = _generateBaseWebpackConfiguration;


