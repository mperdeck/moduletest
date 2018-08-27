var productionAdminScriptsDir = "./ProductionAdmin/";

module.exports = {
  mode: "production",
  resolve: {
        // For modules referenced with no filename extension, Webpack will consider these extensions
        extensions: [ '.js', '.ts' ]
  },
  module: {
	rules: [
      { test: /\.ts$/, use: 'ts-loader' }
    ]
  },
  entry: {
    'views/home/index': productionAdminScriptsDir + "Views/Home/Index.ts",
    'ScriptComponents/clickhandler': productionAdminScriptsDir + "ScriptComponents/click-handler.ts"
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
          test: /[\\/]ScriptModules[\\/]/,
          name: 'scriptmodules',
          minSize: 0
        }
      }
    }
  }
};
