"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorToHex = void 0;
var colors = require('../data/nameToHex.json');
var colorToHex = function (color) {
    return colors[color.toLowerCase()];
};
exports.colorToHex = colorToHex;
if (require.main === module) {
    var color = process.argv[2];
    console.log((0, exports.colorToHex)(color));
}
