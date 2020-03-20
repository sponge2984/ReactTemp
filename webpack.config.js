//引用path模組
const path = require("path");
module.exports = {
  //這個webpack打包的對象，這裡面加上剛剛建立的index.js
  entry: {
    index: "./src/index.js"
  },
  output: {
    //這裡是打包後的檔案名稱
    filename: "bundle.js",
    //打包後的路徑，這裡使用path模組的resolve()取得絕對位置
    path: path.resolve(__dirname,"dist")
  },
  //將loader的設定寫在module的rules屬性中
  module: {
    //rules的值是一個陣列可以存放多個loader物件
    rules: [
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react", "@babel/preset-env"] }
        }
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react","@babel/preset-env"] }
        }
      }
    ]
  },
  //增加一個給devserver的設定
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open:true,
    historyApiFallback: true,
    //指定開啟port為9000
    port: 9000
  }
};
