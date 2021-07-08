"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const compatibility_setting_1 = require("./compatibility-setting");
describe("CompatibilitySetting", () => {
    describe("#constructor", () => {
        it("creates an initially empty property object", () => {
            const compatibilitySetting = new compatibility_setting_1.CompatibilitySetting(15);
            const tree = new formatter_1.Formatter().format(compatibilitySetting);
            chai_1.expect(tree).to.deep.equal({
                "w:compatSetting": {
                    _attr: {
                        "w:name": "compatibilityMode",
                        "w:uri": "http://schemas.microsoft.com/office/word",
                        "w:val": 15,
                    },
                },
            });
        });
    });
});
//# sourceMappingURL=compatibility-setting.spec.js.map