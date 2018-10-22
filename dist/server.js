"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = 3000;
const app = app_1.default();
app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`);
});
app.get('/', function (req, res) {
    res.send("uhulllll");
});
//# sourceMappingURL=server.js.map