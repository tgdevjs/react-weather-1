var path = require('path');
var webpack = require('webpack');
var envFile = require('node-env-file');

// Set NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load config file for other env variables
try {
  envFile( path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
}catch (e) {

}

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'src/components/Main.jsx',
      Nav: 'src/components/Nav.jsx',
      Weather: 'src/components/Weather.jsx',
      About: 'src/components/About.jsx',
      Examples: 'src/components/Examples.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        OTHER_VALUE: JSON.stringify(process.env.OTHER_VALUE)
      }
    })
  ],
  devtool: process.env.NODE_ENV == 'production' ? undefined : 'cheap-module-eval-source-maps'
};
