"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var randomNumberBetween_1 = __importDefault(require("../randomNumberBetween"));
function generateCriticalPointInterval(min, max) {
    return (0, randomNumberBetween_1.default)(min, max);
}
exports.default = generateCriticalPointInterval;
