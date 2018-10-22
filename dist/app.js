"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const bodyParser = __importStar(require("body-parser"));
function default_1() {
    const app = express.default();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    return app;
}
exports.default = default_1;
//# sourceMappingURL=app.js.map