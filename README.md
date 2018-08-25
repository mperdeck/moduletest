# moduletest

## todo

x ts file - autocompile to wwwroot
x ts file - jquery symbols
x ts module - with jquery, load into local page
x ts lib module same solution
  ts lib module other solution, via link

react module - local page
react module - library

## tooling

tsconfig.json
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

typescript options in msbuild (instead of in tsconfig.json)
https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html

## background

Typescript typings
https://blog.angular-university.io/typescript-2-type-system-how-do-type-definitions-work-in-npm-when-to-use-types-and-why-what-are-compiler-opt-in-types/

Typescript modules
https://www.typescriptlang.org/docs/handbook/modules.html


---------------------------------------------------
To install the jquery types:
npm install --save @types/jquery

(in directory containing the solution dir, so all projects can pick up the typings)

Typescript automatically finds the types in the node_modules/@typings dir.







