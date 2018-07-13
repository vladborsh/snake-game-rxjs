const path = require('path'),
  yargs  = require("yargs"),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var argv = yargs
  .boolean("disable-bs")
  .argv;

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        use: "source-map-loader"
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  watch: false,
	plugins: (function(argv) { 
    var plugins = []
    if (!argv.disableBs) {
      plugins.push(
        new BrowserSyncPlugin({
          host: 'localhost',
          port: 4100,
          files: ['./*.html'],
          server: { baseDir: ['.'] }
        })
      )
    }
    return plugins;
  })(argv),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), "node_modules"]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};