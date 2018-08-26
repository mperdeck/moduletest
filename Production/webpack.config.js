module.exports = {
  mode: "production",
  entry: {
    index: "./ProductionAdmin/wwwroot/scripts/Views/Home/Index.js",
    clickhandler: "./ProductionAdmin/wwwroot/scripts/ScriptComponents/click-handler.js"
  },
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: __dirname + "/ProductionAdmin/wwwroot/dist"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0
    }
  }
};
