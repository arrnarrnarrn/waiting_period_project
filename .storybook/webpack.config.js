const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      //{
      //  loader: 'sass-resources-loader',
      //  options: {
      //    resources: ['./assets/css/variables.scss', './assets/css/style.scss'],
      //    include: path.resolve(__dirname, '../')
      //  }
      //}
    ],
  });
  return config
}