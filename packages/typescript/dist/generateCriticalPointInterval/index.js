"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateCriticalPointInterval(min, max) {
    return Math.random() * (max - min + 1) + min;
}
exports.default = generateCriticalPointInterval;
