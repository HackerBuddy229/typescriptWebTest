"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
const user_1 = __importDefault(require("./routes/user"));
const app = express_1.default();
// view engine setup
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/", index_1.default);
app.use("/users", user_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use((err, req, res, next) => {
        res.status(err["status"] || 500);
        res.render("error", {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktrace leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {}
    });
});
app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () => {
    debug_1.default(`Express server listening on port ${server.address().port}`);
});
//# sourceMappingURL=app.js.map