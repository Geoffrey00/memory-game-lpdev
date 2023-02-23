const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: [__dirname + "/src/scss/app.scss"],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(jpg|png)$/i,
          type: "asset",
          generator: {
            filename: 'images/[name]-[ext]'
        }
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.css'],
      modules: [
        'node_modules'
      ]        
    },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              "imagemin-gifsicle",
              "imagemin-mozjpeg",
              "imagemin-pngquant",
              "imagemin-svgo",
            ],
          },
        },
        generator: [
          {
            preset: "webp",
            implementation: ImageMinimizerPlugin.imageminGenerate,
            options: {
              plugins: ["imagemin-webp"],
            },
          },
        ],
      }),
    ],
  },
};