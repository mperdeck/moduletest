# moduletest

## todo

* x ts file - autocompile to wwwroot
* x ts file - jquery symbols
* x ts module - with jquery, load into local page
* x ts lib module same solution
*   ts lib module other solution, via link

* react module - local page
* react module - library

## tooling

tsconfig.json
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

typescript options in msbuild (instead of in tsconfig.json)
https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html

## background

Typescript typings
* https://blog.angular-university.io/typescript-2-type-system-how-do-type-definitions-work-in-npm-when-to-use-types-and-why-what-are-compiler-opt-in-types/

Typescript modules
* https://www.typescriptlang.org/docs/handbook/modules.html

https://github.com/aspnet/JavaScriptServices


---------------------------------------------------
To install the jquery types:

Create package.json, so you can do npm restore

* npm init -y
* npm install --save @types/jquery

(in directory containing the solution dir, so all projects can pick up the typings)

Typescript automatically finds the types in the node_modules/@typings dir.

----------------------------
install webpack:

* cd dir-with-solution-dir
* npm init -y
* npm install webpack webpack-cli --save-dev

To run webpack
* npx webpack

----------------------------
SplitChunksPlugin

* https://wanago.io/2018/06/04/code-splitting-with-splitchunksplugin-in-webpack-4/
* https://webpack.js.org/plugins/split-chunks-plugin/

--------------
mode

https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a

------------------
msbuild and webpack

https://recalll.co/ask/v/topic/MSBuild-and-Webpack/5a03f3d51126f4cb698b512f







