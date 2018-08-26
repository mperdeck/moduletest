var productionAdminScriptsDir = "./ProductionAdmin/wwwroot/scripts/";

module.exports = {
  mode: "production",
  entry: {
    index: productionAdminScriptsDir + "Views/Home/Index.js",
    clickhandler: productionAdminScriptsDir + "ScriptComponents/click-handler.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/ProductionAdmin/wwwroot/dist"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        utilities: {
          test: /[\\/]scripts[\\/]ScriptModules[\\/]/,
          minSize: 0
        }
      }
    }
  }
};
