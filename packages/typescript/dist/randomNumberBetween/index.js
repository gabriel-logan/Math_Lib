"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumberBetween(min, max) {
    var timestamp = Date.now();
    return min + (timestamp % (max - min + 1));
}
exports.default = randomNumberBetween;
