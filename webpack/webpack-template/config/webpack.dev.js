// Node.js的核心模块，专门用来处理文件路径
const path = require("path")
// html copy插件
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 提取css成单独文件。
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ESLintWebpackPlugin = require("eslint-webpack-plugin")
// 
// const TestPlugin = require('./plugins/test-plugin')
const BannerWebpackPlugin = require('./plugins/banner-webpack-plugin')
const AnalyzeWebpackPlugin = require('./plugins/analyze-webpack-plugin')
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")


// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    // 能解决大多数样式兼容性问题
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env"
          ]
        }
      }
    },
    preProcessor
  ].filter(Boolean)
}

module.exports = {
  // 相对路径和绝对路径都行
  // 单入口
  entry: "./src/main.js",
  // 多入口
  // entry: {
  //   main: "./src/main.js",
  //   app: "./src/app.js"
  // },
  // 输出
  output: {
    // 开发模式没有输出，不需要指定输出目录
    path: undefined,
     // 将 js 文件输出到 static/js 目录中
    // [contenthash:8]使用contenthash，取8位长度
    filename: "static/js/[name].[contenthash:8].js", // 入口文件打包输出资源命名方式
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js", // 动态导入输出资源命名方式
    // [ext]: 使用之前的文件扩展名
    assetModuleFilename: "static/media/[name].[hash][ext]" // 图片、字体等资源命名方式（注意用hash）
  },
  // 加载器
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            // exclude: /node_modules/, // 排除node_modules代码不编译
            loader: "babel-loader",
            include: path.resolve(__dirname, "../src"), // 也可以用exclude
            options: {
              cacheDirectory: true, // 开启babel编译缓存
              cacheCompression: false, // 缓存文件不要压缩
              plugins: ["@babel/plugin-transform-runtime"] // 减少代码体积
            }
            // use: [
            //   // {
            //   //   loader: "thread-loader", // 开启多进程
            //   //   options: {
            //   //     workers: threads // 数量
            //   //   }
            //   // },
            //   {
            //     loader: "babel-loader",
            //     include: path.resolve(__dirname, "../src"), // 也可以用exclude
            //     options: {
            //       cacheDirectory: true, // 开启babel编译缓存
            //       cacheCompression: false, // 缓存文件不要压缩
            //       plugins: ["@babel/plugin-transform-runtime"] // 减少代码体积
            //     }
            //   }
            // ]
          },
          {
            // 用来匹配 .css 结尾的文件
            test: /\.css$/,
            // use 数组里面 Loader 执行顺序是从右到左
            use: getStyleLoaders(),
            include: path.resolve(__dirname, "../src") // 也可以用exclude
          },
          {
            test: /\.(png|jpe?g|gif|webp)$/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
              }
            },
            generator: {
              // 将图片文件输出到 static/imgs 目录中
              // 将图片文件命名 [hash:8][ext][query]
              // [hash:8]: hash值取8位
              // [ext]: 使用之前的文件扩展名
              // [query]: 添加之前的query参数
              // filename: "static/imgs/[name]-[hash:8][ext][query]"
            }
          }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    // new TestPlugin(),
    // new BannerWebpackPlugin(),
    // new AnalyzeWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html")
    }),
    // 提取css成单独文件, 要配合上面loader一起，否则不起作用。
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      // "static/css/[name].[contenthash:8].chunk.js"
      filename: "static/css/[name].[contenthash:8].css"
    }),
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, '../src'),
      // 排除不检查的文件，是context路径的相对路径
      exclude: ['../node_modules', '../build', '../config'],
      // 是否自动修复eslint错误，谨慎使用，会更改源代码。
      fix: true,
      // 开启eslint缓存，适用于开发环境
      // cache: true, 
      // 缓存目录
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/.eslintcache"
      )
      // 开启多进程
      // threads 
    })
  ],
  optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: "all", // 对所有模块都进行分割
      // 以下是默认值
      // minSize: 20000, // 分割代码最小的大小
      // minRemainingSize: 0, // 类似于minSize，最后确保提取的文件大小不能为0
      // minChunks: 1, // 至少被引用的次数，满足条件才会代码分割
      // maxAsyncRequests: 30, // 按需加载时并行加载的文件的最大数量
      // maxInitialRequests: 30, // 入口js文件最大并行请求数量
      // enforceSizeThreshold: 50000, // 超过50kb一定会单独打包（此时会忽略minRemainingSize、maxAsyncRequests、maxInitialRequests）
      // cacheGroups: { // 组，哪些模块要打包到一个组
      //   defaultVendors: { // 组名
      //     test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
      //     priority: -10, // 权重（越大越高）
      //     reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
      //   },
      //   default: { // 其他没有写的配置会使用上面的默认值
      //     minChunks: 2, // 这里的minChunks权重更大
      //     priority: -20,
      //     reuseExistingChunk: true,
      //   },
      // },
      // 修改配置
      cacheGroups: {
        // 组，哪些模块要打包到一个组
        // defaultVendors: { // 组名
        //   test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
        //   priority: -10, // 权重（越大越高）
        //   reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
        // },
        default: {
          // 其他没有写的配置会使用上面的默认值
          minSize: 0, // 我们定义的文件体积太小了，所以要改打包的最小文件体积
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    // 提取runtime文件
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}` // runtime文件命名规则
    }
  },
   // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  devtool: "cheap-module-source-map",
  // 模式
  mode: "development" // 开发模式
}