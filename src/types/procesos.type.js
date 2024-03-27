"use strict";
// To parse this data:
//
//   import { Convert, ConsultaNumeroRadicacion } from "./file";
//
//   const consultaNumeroRadicacion = Convert.toConsultaNumeroRadicacion(json);
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
// Converts JSON strings to/from your types
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toConsultaNumeroRadicacion = function (json) {
        return JSON.parse(json);
    };
    Convert.consultaNumeroRadicacionToJson = function (value) {
        return JSON.stringify(value);
    };
    Convert.toPaginacion = function (json) {
        return JSON.parse(json);
    };
    Convert.paginacionToJson = function (value) {
        return JSON.stringify(value);
    };
    Convert.toParametros = function (json) {
        return JSON.parse(json);
    };
    Convert.parametrosToJson = function (value) {
        return JSON.stringify(value);
    };
    Convert.toProceso = function (json) {
        return JSON.parse(json);
    };
    Convert.procesoToJson = function (value) {
        return JSON.stringify(value);
    };
    return Convert;
}());
exports.Convert = Convert;
