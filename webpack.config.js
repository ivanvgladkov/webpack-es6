module.exports = function(env)
{
    var path = require('path'),
        folder,
        defaultConfig,
        envConfig,
        config;

    switch (env) {
        case 'dev': folder = 'dev'; break;
        case 'prod': folder = 'dist'; break;
        default: folder = 'dev'; break;
    }

    defaultConfig = {
        entry: {
            'modules/a/pageA': './src/modules/a/pageA.js',
            'modules/b/pageB': './src/modules/b/pageB.js'
        },
        module : {
            loaders: [
                {
                    test    : /\.js$/,
                    exclude : /node_modules/,
                    loader  : 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.html$/,
                    loader: "html-loader"
                },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
            ]
        },
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                vendor: path.resolve(__dirname, 'src/vendor')
            }
        }
    };

    envConfig = require('./webpack.' + folder + '.config.js');
    config = Object.assign(defaultConfig, envConfig);

    return config;
};