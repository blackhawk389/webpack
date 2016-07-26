var webpack = require("webpack");
var htmlwebpack = require('html-webpack-plugin');

module.exports = {
    entry : "./src/main.ts",
    output : {
       // publicPath: './dist',
        path : "./dist",
        filename : "app.bundle.js"
    
},
devServer: {
        contentBase: "./dist",
    },

module : {
    loaders : [
        {test : /\.ts$/, loader : 'ts'}
    ]
},

resolve : {
    extensions : ['', '.ts','.js']
},

plugins : [
     new htmlwebpack()
]
}
