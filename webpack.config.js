var debug = process.env.NODE_ENV !== "production";
var path = require('path')
var webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    context: __dirname,
    entry: {
	app: "./js/index.js"
    },
    devServer: {
	open: true,
        openPage: "index.html",
        contentBase: path.join(__dirname, 'dist'),
	watchContentBase: true,
        port: 8080,
        host: `0.0.0.0`,
    },
    output: {
	filename: '[name].js',
	publicPath: '/js/',
	path: __dirname + '/dist'
    },
    plugins: [
	new CopyPlugin({
	    patterns: [
		"./js/sw.js",		
	    ],
	}),
    ]
};
