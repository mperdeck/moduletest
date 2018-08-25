
// Use extension .js, because that is what is used at runtime
import * as ProductionShared from "../../ScriptModules/production-shared.js";


// abc 797s

$(function () {
    let jobValidator = new ProductionShared.JobValidator();
    jobValidator.validate("def2");
})

