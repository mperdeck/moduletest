var productionAdminScriptsDir = "./ProductionAdmin/wwwroot/scripts/";

module.exports = {
  mode: "production",
  entry: {
    'views/home/index': productionAdminScriptsDir + "Views/Home/Index.js",
    'ScriptComponents/clickhandler': productionAdminScriptsDir + "ScriptComponents/click-handler.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/ProductionAdmin/wwwroot/dist"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        scriptmodules: {
          test: /[\\/]scripts[\\/]ScriptModules[\\/]/,
          name: 'scriptmodules',
          minSize: 0
        }
      }
    }
  }
};
