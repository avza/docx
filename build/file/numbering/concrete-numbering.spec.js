"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const formatter_1 = require("export/formatter");
const level_1 = require("./level");
const num_1 = require("./num");
describe("ConcreteNumbering", () => {
    describe("#overrideLevel", () => {
        let concreteNumbering;
        beforeEach(() => {
            concreteNumbering = new num_1.ConcreteNumbering(0, 1);
        });
        it("sets a new override level for the given level number", () => {
            concreteNumbering.overrideLevel(3);
            const tree = new formatter_1.Formatter().format(concreteNumbering);
            chai_1.expect(tree["w:num"]).to.include({
                "w:lvlOverride": [
                    { _attr: { "w:ilvl": 3 } },
                    {
                        "w:lvl": [
                            { _attr: { "w:ilvl": 3, "w15:tentative": 1 } },
                            { "w:start": { _attr: { "w:val": 1 } } },
                            { "w:lvlJc": { _attr: { "w:val": "start" } } },
                        ],
                    },
                ],
            });
        });
        it("sets the startOverride element if start is given", () => {
            concreteNumbering.overrideLevel(1, 9);
            const tree = new formatter_1.Formatter().format(concreteNumbering);
            chai_1.expect(tree["w:num"]).to.include({
                "w:lvlOverride": [
                    {
                        _attr: {
                            "w:ilvl": 1,
                        },
                    },
                    {
                        "w:startOverride": {
                            _attr: {
                                "w:val": 9,
                            },
                        },
                    },
                    {
                        "w:lvl": [
                            { _attr: { "w:ilvl": 1, "w15:tentative": 1 } },
                            { "w:start": { _attr: { "w:val": 1 } } },
                            { "w:lvlJc": { _attr: { "w:val": "start" } } },
                        ],
                    },
                ],
            });
        });
        it("sets the lvl element if overrideLevel.Level is accessed", () => {
            const ol = concreteNumbering.overrideLevel(1);
            chai_1.expect(ol.Level).to.be.instanceof(level_1.LevelForOverride);
            const tree = new formatter_1.Formatter().format(concreteNumbering);
            chai_1.expect(tree["w:num"]).to.include({
                "w:lvlOverride": [
                    { _attr: { "w:ilvl": 1 } },
                    {
                        "w:lvl": [
                            { _attr: { "w:ilvl": 1, "w15:tentative": 1 } },
                            { "w:start": { _attr: { "w:val": 1 } } },
                            { "w:lvlJc": { _attr: { "w:val": "start" } } },
                        ],
                    },
                ],
            });
        });
    });
});
//# sourceMappingURL=concrete-numbering.spec.js.map