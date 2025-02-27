"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordsUnderline = exports.WavyHeavyUnderline = exports.WavyDoubleUnderline = exports.WaveUnderline = exports.ThickUnderline = exports.SingleUnderline = exports.DoubleUnderline = exports.DottedHeavyUnderline = exports.DottedUnderline = exports.DotDotDashUnderline = exports.DotDashUnderline = exports.DashLongHeavyUnderline = exports.DashLongUnderline = exports.DashDotHeavyUnderline = exports.DashDotDotHeavyUnderline = exports.DashUnderline = exports.Underline = exports.BaseUnderline = exports.UnderlineType = void 0;
const xml_components_1 = require("file/xml-components");
var UnderlineType;
(function (UnderlineType) {
    UnderlineType["SINGLE"] = "single";
    UnderlineType["WORDS"] = "words";
    UnderlineType["DOUBLE"] = "double";
    UnderlineType["THICK"] = "thick";
    UnderlineType["DOTTED"] = "dotted";
    UnderlineType["DOTTEDHEAVY"] = "dottedHeavy";
    UnderlineType["DASH"] = "dash";
    UnderlineType["DASHEDHEAVY"] = "dashedHeavy";
    UnderlineType["DASHLONG"] = "dashLong";
    UnderlineType["DASHLONGHEAVY"] = "dashLongHeavy";
    UnderlineType["DOTDASH"] = "dotDash";
    UnderlineType["DASHDOTHEAVY"] = "dashDotHeavy";
    UnderlineType["DOTDOTDASH"] = "dotDotDash";
    UnderlineType["DASHDOTDOTHEAVY"] = "dashDotDotHeavy";
    UnderlineType["WAVE"] = "wave";
    UnderlineType["WAVYHEAVY"] = "wavyHeavy";
    UnderlineType["WAVYDOUBLE"] = "wavyDouble";
})(UnderlineType = exports.UnderlineType || (exports.UnderlineType = {}));
class BaseUnderline extends xml_components_1.XmlComponent {
    constructor(underlineType, color) {
        super("w:u");
        this.root.push(new xml_components_1.Attributes({
            val: underlineType,
            color: color,
        }));
    }
}
exports.BaseUnderline = BaseUnderline;
class Underline extends BaseUnderline {
    constructor(underlineType = UnderlineType.SINGLE, color) {
        super(underlineType, color);
    }
}
exports.Underline = Underline;
class DashUnderline extends BaseUnderline {
    constructor() {
        super("dash");
    }
}
exports.DashUnderline = DashUnderline;
class DashDotDotHeavyUnderline extends BaseUnderline {
    constructor() {
        super("dashDotDotHeavy");
    }
}
exports.DashDotDotHeavyUnderline = DashDotDotHeavyUnderline;
class DashDotHeavyUnderline extends BaseUnderline {
    constructor() {
        super("dashDotHeavy");
    }
}
exports.DashDotHeavyUnderline = DashDotHeavyUnderline;
class DashLongUnderline extends BaseUnderline {
    constructor() {
        super("dashLong");
    }
}
exports.DashLongUnderline = DashLongUnderline;
class DashLongHeavyUnderline extends BaseUnderline {
    constructor() {
        super("dashLongHeavy");
    }
}
exports.DashLongHeavyUnderline = DashLongHeavyUnderline;
class DotDashUnderline extends BaseUnderline {
    constructor() {
        super("dotDash");
    }
}
exports.DotDashUnderline = DotDashUnderline;
class DotDotDashUnderline extends BaseUnderline {
    constructor() {
        super("dotDotDash");
    }
}
exports.DotDotDashUnderline = DotDotDashUnderline;
class DottedUnderline extends BaseUnderline {
    constructor() {
        super("dotted");
    }
}
exports.DottedUnderline = DottedUnderline;
class DottedHeavyUnderline extends BaseUnderline {
    constructor() {
        super("dottedHeavy");
    }
}
exports.DottedHeavyUnderline = DottedHeavyUnderline;
class DoubleUnderline extends BaseUnderline {
    constructor() {
        super("double");
    }
}
exports.DoubleUnderline = DoubleUnderline;
class SingleUnderline extends BaseUnderline {
    constructor() {
        super("single");
    }
}
exports.SingleUnderline = SingleUnderline;
class ThickUnderline extends BaseUnderline {
    constructor() {
        super("thick");
    }
}
exports.ThickUnderline = ThickUnderline;
class WaveUnderline extends BaseUnderline {
    constructor() {
        super("wave");
    }
}
exports.WaveUnderline = WaveUnderline;
class WavyDoubleUnderline extends BaseUnderline {
    constructor() {
        super("wavyDouble");
    }
}
exports.WavyDoubleUnderline = WavyDoubleUnderline;
class WavyHeavyUnderline extends BaseUnderline {
    constructor() {
        super("wavyHeavy");
    }
}
exports.WavyHeavyUnderline = WavyHeavyUnderline;
class WordsUnderline extends BaseUnderline {
    constructor() {
        super("words");
    }
}
exports.WordsUnderline = WordsUnderline;
//# sourceMappingURL=underline.js.map