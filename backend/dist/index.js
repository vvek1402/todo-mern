"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const TodoRoutes_1 = __importDefault(require("./routes/TodoRoutes"));
const db_config_1 = __importDefault(require("./config/db.config"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1/', TodoRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
db_config_1.default.on("error", (error) => {
    console.error("Error connecting to MongoDB:", error);
});
db_config_1.default.once("open", () => {
    console.log("Connected to MongoDB");
});
module.exports = app;
