'use strict';

//as per: https://github.com/microsoft/rushstack/blob/master/build-tests/heft-webpack-basic-test/webpack.config.js

const path = require('path');

module.exports = {
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
	}
};