var wwwRootDir = "wwwroot/scripts/";
var debugDir = "./" + wwwRootDir + "debug/";

module.exports = {
  mode: "production",
  entry: {
      'views/home/index': debugDir + "Views/Home/Index.js",
      'ScriptComponents/clickhandler': debugDir + "ScriptComponents/click-handler.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/" + wwwRootDir + "release"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        scriptmodules: {
          test: /[\\/]ScriptModules[\\/]/,
          name: 'scriptmodules',
          minSize: 0
        }
      }
    }
  }
};
