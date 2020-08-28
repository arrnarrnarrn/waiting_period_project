const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = ({ config }) => {
  config.resolve.alias['@'] = rootPath
  config.resolve.alias['~'] = rootPath

  config.module.rules.push({
    test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [ 
              './assets/css/variables.scss', './assets/css/style.scss',
            ],
            rootPath
          }
        },
      ],
  });
  //config.module.rules.push({
  //  test: /\.(png|woff|woff2|eot|ttf|svg)$/,
  //  use: [
  //    {
  //      loader: 'file-loader',
  //    },
  //  ],
  //  include: path.resolve(__dirname, '../'),
  //})
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    rootPath
  ];
  return config
}
