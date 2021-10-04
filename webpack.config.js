const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        main: path.resolve(__dirname, 'frontend', 'src', 'app.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'frontend'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
              test: /\.jsx?$/,
              use: ["source-map-loader"],
              enforce: "pre"
            },
            {
              test: /\.css$/i,
              use:[
                  {
                    loader:'style-loader'
                  },
                  {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {
                            mode: "local",
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        },
                    }
                  },
                  {
                      loader: 'postcss-loader',
                      options: {
                          postcssOptions:{                                
                              ident: 'postcss',
                              plugins: () => [
                                  require('postcss-flexbugs-fixes'),
                                  autoprefixer({
                                      browsers: [
                                          '>1%',
                                          'last 4 versions',
                                          'Firefox ESR',
                                          'not ie < 9', // React doesn't support IE8 anyway
                                      ],
                                      flexbox: 'no-2009',
                                  }),
                                  require('postcss-modules-values'),
                              ]
                          }
                      },
                  }
              ]
            }
        ]
    }
};