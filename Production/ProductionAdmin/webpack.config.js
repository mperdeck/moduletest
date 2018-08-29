var wwwRootDir = "wwwroot/";
var productionAdminScriptsDir = "./" + wwwRootDir + "scripts/";

module.exports = {
  mode: "production",
  entry: {
    'views/home/index': productionAdminScriptsDir + "Views/Home/Index.js",
    'ScriptComponents/clickhandler': productionAdminScriptsDir + "ScriptComponents/click-handler.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/" + wwwRootDir + "dist"
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
