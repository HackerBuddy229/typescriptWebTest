"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});
router.get("/greeting", (req, res) => {
    const name = req.query["name"];
    if (name) {
        res.status(200).send(`Welcome ${name}`);
    }
    else {
        res.status(400).send("No name provided :(");
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map