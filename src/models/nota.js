"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotasBuilder = void 0;
var date_validator_1 = require("../utils/date-validator");
var NotasBuilder = /** @class */ (function () {
    function NotasBuilder(incomingNote, carpetaNumero, index) {
        this.content = [];
        var dateExtract = (0, date_validator_1.datesExtractor)(incomingNote);
        if (dateExtract.length === 0) {
            this.dueDate = null;
        }
        var firstDate = dateExtract[0];
        this.dueDate = firstDate;
        this.text = incomingNote;
        this.createdAt = new Date();
        this.pathname = null;
        this.id = "".concat(carpetaNumero
            ? carpetaNumero
            : Date.now(), "-").concat(index
            ? index
            : Math.random());
    }
    return NotasBuilder;
}());
exports.NotasBuilder = NotasBuilder;
