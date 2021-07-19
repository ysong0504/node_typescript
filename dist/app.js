"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express, { Application, Request, Response, NextFunction } from 'express';
const express_1 = __importDefault(require("express"));
// import express from 'express';
const router_1 = __importDefault(require("./routers/router"));
const schemas_1 = __importDefault(require("./schemas"));
schemas_1.default();
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// const app = express();
app.use("/api", [router_1.default]);
app.listen(5000, () => {
    console.log('Server Running');
});
