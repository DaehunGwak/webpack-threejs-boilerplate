var path = require('path');

var mode = 'none'; // none, development, production

module.exports = {
    mode: mode,
    entry: ['./src/main.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: ['babel-loader'],
        }]
    },
    stats: {
        colors: true
    },
    devtool: mode === 'production' ? false : 'source-map'
};