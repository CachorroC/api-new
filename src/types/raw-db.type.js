"use strict";
// To parse this data:
//
//   import { Convert, RawDb } from "./file";
//
//   const welcome = Convert.toRawDb(json);
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const rawDb = Convert.toRawDb(json);
// To parse this data:
//
//   import { Convert } from "./file";
//
//   const rawDb = Convert.toRawDb(json);
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = exports.ConvertRawDb = void 0;
// Converts JSON strings to/from your types
var ConvertRawDb = /** @class */ (function () {
    function ConvertRawDb() {
    }
    ConvertRawDb.toRawDb = function (json) {
        return JSON.parse(json);
    };
    ConvertRawDb.rawDbToJson = function (value) {
        return JSON.stringify(value);
    };
    return ConvertRawDb;
}());
exports.ConvertRawDb = ConvertRawDb;
// Converts JSON strings to/from your types
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toRawDb = function (json) {
        return JSON.parse(json);
    };
    Convert.rawDbToJson = function (value) {
        return JSON.stringify(value);
    };
    Convert.toRawWorkSheets = function (json) {
        return JSON.parse(json);
    };
    Convert.welcomeToJson = function (value) {
        return JSON.stringify(value);
    };
    Convert.toBancolombia = function (json) {
        return JSON.parse(json);
    };
    Convert.bancolombiaToJson = function (value) {
        return JSON.stringify(value);
    };
    Convert.toInsolvencia = function (json) {
        return JSON.parse(json);
    };
    Convert.insolvenciaToJson = function (value) {
        return JSON.stringify(value);
    };
    Convert.toLiosJuridico = function (json) {
        return JSON.parse(json);
    };
    Convert.liosJuridicoToJson = function (value) {
        return JSON.stringify(value);
    };
    Convert.toReintegra = function (json) {
        return JSON.parse(json);
    };
    Convert.reintegraToJson = function (value) {
        return JSON.stringify(value);
    };
    Convert.toTerminado = function (json) {
        return JSON.parse(json);
    };
    Convert.terminadoToJson = function (value) {
        return JSON.stringify(value);
    };
    return Convert;
}());
exports.Convert = Convert;
