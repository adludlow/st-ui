import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (env, argv) => {
  const srcPath = path.resolve('./src')

  return {
    mode: 'development',
    context: srcPath,
    entry: './index.js',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './src/',
      publicPath: '/',
      hot: true,
      inline: true,
      port: 8000
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      })
    ],
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      sourceMapFilename: '[file].map'
    }
  }
}
