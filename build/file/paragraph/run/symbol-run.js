"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolRun = void 0;
const run_1 = require("./run");
const symbol_1 = require("./run-components/symbol");
class SymbolRun extends run_1.Run {
    constructor(options) {
        if (typeof options === "string") {
            super({});
            this.root.push(new symbol_1.Symbol(options));
            return;
        }
        super(options);
        this.root.push(new symbol_1.Symbol(options.char, options.symbolfont));
    }
}
exports.SymbolRun = SymbolRun;
//# sourceMappingURL=symbol-run.js.map