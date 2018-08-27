// version 2aa

// Use extension .js, because that is what is used at runtime
import * as ProductionShared from "../ScriptModules/production-shared";

// Any symbol defined in a module is confined to that module.
// To make a symbol available to say an html onclick handler,
// assign it to window.
(<any>window).buttonClick = function() {
    alert("button clicked");

    let jobValidator = new ProductionShared.JobValidator();
    jobValidator.validate("buttonClick - xyz2");
}


