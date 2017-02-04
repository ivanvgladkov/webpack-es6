var webpack = require('webpack');

module.exports = {
    output : {
        path     : __dirname,
        filename : 'app-dist/[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            comments: false
        })
    ]
};