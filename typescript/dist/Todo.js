"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Todo = ({ todo }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: todo.title }), (0, jsx_runtime_1.jsx)("h2", { children: todo.description })] }));
};
exports.default = Todo;
