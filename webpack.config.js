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
        contentBase: path.join(__dirname, 'docs'),
	watchContentBase: true,
        port: 8080,
        host: `127.0.0.1`,
    },
    output: {
	filename: '[name].js',
	publicPath: '/js/',
	path: __dirname + '/docs/js'
    },
    plugins: [
	new CopyPlugin({
	    patterns: [
		{from: "./public/index.html", to:"../"},
		{from:"./js/sw.js", to:"../"}
	    ],
	}),
    ]
};
