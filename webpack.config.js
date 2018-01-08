var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'react'],
                        
                    }
                    
                }
                
                
            },
            {
                test: /\.css?$/,
                use: [{ loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true
                        }
                    }
                ]
            }
        ]
    }
    
};
