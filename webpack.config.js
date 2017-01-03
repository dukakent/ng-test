module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },

            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    }
};