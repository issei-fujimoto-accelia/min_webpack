var debug = process.env.NODE_ENV !== "production";
var path = require('path')
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: "./js/index.js",
    devServer: {
	open: true,
        openPage: "index.html",
        contentBase: path.join(__dirname, 'public'),
	watchContentBase: true,
        port: 8080,
        host: `localhost`,
    },
    output: {
	path: __dirname + "/dist",
	publicPath: '/js/',
	filename: "app.js"
    }  
};
