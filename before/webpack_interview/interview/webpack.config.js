module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test:/\.css$/  ,exclude: /node_modules/, loader: "app!css"}
        ]
    }
};

// module.exports = {
//   entry: "./app.js",
//   output: {
//     path: __dirname,
//     filename: "bundle.js"
//   },
//   module: {
//     loaders: [
//       { test: /.js$/ ,exclude: /node_modules/, loader: "babel-loader","app!css" }
//     ]
//   }
// }
