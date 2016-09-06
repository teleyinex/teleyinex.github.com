const webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output:  {
        path: './dist',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
        },
        ]
    },
    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin({
    //        compress: {
    //            warnings: false,
    //        },
    //        output: {
    //            comments: false,
    //        },
    //    }),
    //]
}
