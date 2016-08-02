module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        path: __dirname + '/build',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: __dirname + '/src'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/,
                loader: 'file'
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?.*$)?/,
                loader: 'file'
            }
        ]
    }
}
