const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/template.html")
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.posix.join(
            path.resolve(__dirname, "src/assets").replace(/\\/g, "/"),
            "favicon_*.png"
          ),
          to: "assets/[name][ext]"
        },
        {
          from: path.posix.join(
            path.resolve(__dirname, "src/assets").replace(/\\/g, "/"),
            "logo-raster-540.jpg"
          ),
          to: "assets/[name][ext]"
        }
      ]
    })
  ],
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    open: true,
    hot: true
  },
};
