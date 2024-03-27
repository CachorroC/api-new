"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actuacionConvert = void 0;
// Converts JSON strings to/from your types
var actuacionConvert = /** @class */ (function () {
    function actuacionConvert() {
    }
    actuacionConvert.actuacioneToJson = function (value) {
        return JSON.stringify(value);
    };
    actuacionConvert.consultaActuacionToJson = function (value) {
        return JSON.stringify(value);
    };
    actuacionConvert.paginacionToJson = function (value) {
        return JSON.stringify(value);
    };
    actuacionConvert.toActuacione = function (json) {
        return JSON.parse(json);
    };
    actuacionConvert.toConsultaActuacion = function (json) {
        return JSON.parse(json);
    };
    actuacionConvert.toPaginacion = function (json) {
        return JSON.parse(json);
    };
    return actuacionConvert;
}());
exports.actuacionConvert = actuacionConvert;
