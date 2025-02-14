"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaUpdaterActuaciones = void 0;
var promises_1 = require("node:fs/promises");
var prisma_1 = require("../../services/prisma");
function prismaUpdaterActuaciones(actuacionesComplete) {
    return __awaiter(this, void 0, void 0, function () {
        var ultimaActuacion, carpeta, incomingDate, savedDate, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ultimaActuacion = actuacionesComplete[0];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    return [4 /*yield*/, prisma_1.default.carpeta.findFirstOrThrow({
                            where: {
                                llaveProceso: ultimaActuacion.llaveProceso,
                            },
                        })];
                case 2:
                    carpeta = _b.sent();
                    incomingDate = new Date(ultimaActuacion.fechaActuacion)
                        .getTime();
                    savedDate = carpeta.fecha
                        ? new Date(carpeta.fecha)
                            .getTime()
                        : null;
                    if (!(!savedDate || savedDate < incomingDate)) return [3 /*break*/, 6];
                    console.log('no hay saved date o la saved date es menor que incoming date');
                    return [4 /*yield*/, prisma_1.default.actuacion.update({
                            where: {
                                idRegActuacion: (_a = carpeta.idRegUltimaAct) !== null && _a !== void 0 ? _a : undefined
                            },
                            data: {
                                isUltimaAct: false
                            }
                        })];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, prisma_1.default.carpeta.update({
                            where: {
                                numero: carpeta.numero,
                            },
                            data: {
                                fecha: new Date(ultimaActuacion.fechaActuacion),
                                revisado: false,
                                ultimaActuacion: {
                                    connectOrCreate: {
                                        where: {
                                            idRegActuacion: ultimaActuacion.idRegActuacion,
                                        },
                                        create: __assign({}, ultimaActuacion),
                                    },
                                },
                            },
                        })];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, promises_1.mkdir)("./src/date/".concat(new Date()
                            .getFullYear(), "/").concat(new Date()
                            .getMonth(), "/").concat(new Date()
                            .getDate()), {
                            recursive: true,
                        })];
                case 5:
                    _b.sent();
                    (0, promises_1.writeFile)("./src/date/".concat(new Date()
                        .getFullYear(), "/").concat(new Date()
                        .getMonth(), "/").concat(new Date()
                        .getDate(), "/").concat(ultimaActuacion.idRegActuacion, ".json"), JSON.stringify(ultimaActuacion));
                    _b.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    console.log(error_1);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.prismaUpdaterActuaciones = prismaUpdaterActuaciones;
