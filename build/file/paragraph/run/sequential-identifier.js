"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequentialIdentifier = void 0;
const run_1 = require("file/paragraph/run");
const field_1 = require("file/paragraph/run/field");
const sequential_identifier_instruction_1 = require("./sequential-identifier-instruction");
class SequentialIdentifier extends run_1.Run {
    constructor(identifier) {
        super({});
        this.root.push(new field_1.Begin(true));
        this.root.push(new sequential_identifier_instruction_1.SequentialIdentifierInstruction(identifier));
        this.root.push(new field_1.Separate());
        this.root.push(new field_1.End());
    }
}
exports.SequentialIdentifier = SequentialIdentifier;
//# sourceMappingURL=sequential-identifier.js.map