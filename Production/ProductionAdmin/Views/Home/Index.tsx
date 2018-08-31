
// This uses "import types"
// So you only get the types out of a module, not the code itself.
// As a result, no import is generated to the compiled .js file, so the browser doesn't show an error message
// that it cannot import the module (because there is no file path in the import)
// See 
// https://davidea.st/articles/typescript-2-9-import-types
// https://github.com/Microsoft/TypeScript/issues/24279
// 
declare var React: typeof import("react");
declare var ReactDOM: typeof import("react-dom");


// Use extension .js, because that is what is used at runtime

// Load non-React module
import * as ProductionShared from "../../ScriptModules/production-shared.js";

// Load React component module
import { HelloMessage } from "../../ScriptModules/HelloMessage.js";
import { CustomGrid } from "../../ScriptModules/CustomGrid.js";


// -----------------------------------
// jQuery code

// abc 797s

$(function () {
    let jobValidator = new ProductionShared.JobValidator();
    jobValidator.validate("def2");
})

// -----------------------------
// React code, to generate a React component onto the page

ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById("hello-message")
);

ReactDOM.render(
    <CustomGrid />,
    document.getElementById("custom-grid")
);


