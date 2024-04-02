// Node.js的核心模块，专门用来处理文件路径
const path = require("path")
// nodejs核心模块，直接使用
// const os = require("os")
// html copy插件
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 提取css成单独文件。
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// css压缩插件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
// js压缩
const TerserWebpackPlugin = require("terser-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
// 预加载
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin")

// cpu核数, 多进程打包： thread-loader， 用于打包很慢的情况，此项目打包很快，暂时屏蔽
// const threads = os.cpus().length
// const AnalyzeWebpackPlugin = require('./plugins/analyze-webpack-plugin')
const InlineChunkHtmlPlugin = require('./plugins/inline-chunk-webpack-plugin')

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
  // 入口
  // 相对路径和绝对路径都行
  entry: "./src/main.js",
  // entry: {
  //   main: "./src/main.js",
  //   app: "./src/app.js"
  // },
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    // 生产模式需要输出
    path: path.resolve(__dirname, "../build"),
    // 将 js 文件输出到 static/js 目录中
    // [contenthash:8]使用contenthash，取8位长度
    filename: "static/js/[name].[contenthash:8].js", // 入口文件打包输出资源命名方式
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js", // 动态导入输出资源命名方式
    // [ext]: 使用之前的文件扩展名
    assetModuleFilename: "static/media/[name].[hash][ext]", // 图片、字体等资源命名方式（注意用hash）
    // 开发模式没有输出，不需要清空输出结果
    // 自动将上次打包目录资源清空
    clean: true
  },
  // 加载器
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            // loader: "babel-loader",
            include: path.resolve(__dirname, "../src"), // 也可以用exclude
            // options: {
            //   cacheDirectory: true, // 开启babel编译缓存
            //   cacheCompression: false, // 缓存文件不要压缩
            //   plugins: ["@babel/plugin-transform-runtime"] // 减少代码体积
            // }
            use: [
              // {
              //   loader: "thread-loader", // 开启多进程
              //   options: {
              //     workers: threads // 数量
              //   }
              // },
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true, // 开启babel编译缓存
                  cacheCompression: false, // 缓存文件不要压缩
                  plugins: ["@babel/plugin-transform-runtime"] // 减少代码体积
                }
              }
            ]
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
              // filename跟output中的assetModuleFilename一致，取其中一个就行。
              // filename: "static/imgs/[name]-[hash:8][ext][query]"
            }
          }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    // new AnalyzeWebpackPlugin(),
    new InlineChunkHtmlPlugin(['runtime']),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js、css等资源
      template: path.resolve(__dirname, "../public/index.html")
    }),
    // 提取css成单独文件, 要配合上面loader一起，否则不起作用。
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      filename: "static/css/main.css"
    }),
    // css压缩, 未开启多进程打包
    new CssMinimizerPlugin(),
    // 压缩图片
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminGenerate,
        options: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            [
              "svgo",
              {
                plugins: [
                  "preset-default",
                  "prefixIds",
                  {
                    name: "sortAttrs",
                    params: {
                      xmlnsOrder: "alphabetical"
                    }
                  }
                ]
              }
            ]
          ]
        }
      }
    }),
    new PreloadWebpackPlugin({
      rel: "preload", // preload兼容性更好
      as: "script"
      // rel: 'prefetch' // prefetch兼容性更差
    })
  ],
  optimization: {
    minimizer: [
      // css压缩也可以写到optimization.minimizer里面，效果一样的
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin(),
      // 生产模式会默认开启TerserWebpackPlugin，但是我们需要进行其他配置，就要重新写了
      // new TerserWebpackPlugin({
      //   parallel: threads, // 开启多进程
      // }),
      // 压缩图片
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: [
                    "preset-default",
                    "prefixIds",
                    {
                      name: "sortAttrs",
                      params: {
                        xmlnsOrder: "alphabetical"
                      }
                    }
                  ]
                }
              ]
            ]
          }
        }
      })
    ],
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
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     // css压缩也可以写到optimization.minimizer里面，效果一样的，开启css多进程压缩
  //     // new CssMinimizerPlugin(),
  //     // 当生产模式会默认开启TerserPlugin，但是我们需要进行其他配置，就要重新写了
  //     new TerserWebpackPlugin({
  //       // 开启多进程。 注意：请仅在特别耗时的操作中使用，因为每个进程启动就有大约为 600ms 左右开销。
  //       parallel: threads 
  //     })
  //   ]
  // },
  // 源代码与构建后代码一一映射
  //优点：包含行/列映射, 缺点：打包编译速度更慢
  // devtool: "source-map",
  // 模式
  // 生产模式（production）默认开启了：html 压缩和 js 压缩
  // 开发模式（development）默认所有内容都不进行压缩
  mode: "production"
}