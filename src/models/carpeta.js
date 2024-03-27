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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var tipoProceso_1 = require("../data/tipoProceso");
var juzgado_1 = require("./juzgado");
var nota_1 = require("./nota");
var demanda_1 = require("./demanda");
var deudor_1 = require("./deudor");
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
console.log(process.env['NODE_TLS_REJECT_UNAUTHORIZED']);
var Carpeta = /** @class */ (function () {
    //!PROPERTIES
    //!PROPERTIES
    //CONSTRUCTOR - EL CONSTRUCTOR DE LA CARPETA
    function Carpeta(rawCarpeta) {
        var _this = this;
        //PROPERTIES -todas las propiedades  que existen en la class carpeta
        //PROPERTIES array objects
        this.procesos = [];
        this.idProcesos = [];
        this.actuaciones = [];
        this.notas = [];
        var NUMERO = rawCarpeta.NUMERO, category = rawCarpeta.category, cedula = rawCarpeta.DEMANDADO_IDENTIFICACION, EXPEDIENTE = rawCarpeta.EXPEDIENTE, DEMANDADO_NOMBRE = rawCarpeta.DEMANDADO_NOMBRE, CODEUDOR_NOMBRE = rawCarpeta.CODEUDOR_NOMBRE, CODEUDOR_IDENTIFICACION = rawCarpeta.CODEUDOR_IDENTIFICACION, CODEUDOR_DIRECCION = rawCarpeta.CODEUDOR_DIRECCION, CODEUDOR_TELEFONOS = rawCarpeta.CODEUDOR_TELEFONOS, TIPO_PROCESO = rawCarpeta.TIPO_PROCESO, EXTRA = rawCarpeta.EXTRA, OBSERVACIONES = rawCarpeta.OBSERVACIONES;
        var idBuilder;
        var notasCounter = 0;
        if (OBSERVACIONES) {
            var extras = OBSERVACIONES.split('//');
            extras.forEach(function (nota) {
                notasCounter++;
                var newNoter = new nota_1.NotasBuilder(nota, Number(NUMERO), notasCounter);
                _this.notas.push(newNoter);
            });
        }
        if (EXTRA) {
            console.log("EXTRAS === ".concat(EXTRA));
            var extras = String(EXTRA)
                .split('//');
            extras.forEach(function (nota) {
                notasCounter++;
                var newNoter = new nota_1.NotasBuilder(nota, Number(NUMERO), notasCounter);
                _this.notas.push(newNoter);
            });
        }
        var cedulaAsNumber = Number(cedula);
        if (isNaN(cedulaAsNumber)) {
            idBuilder = Number(NUMERO);
        }
        else {
            idBuilder = cedulaAsNumber;
        }
        this.notasCount = notasCounter;
        this.id = idBuilder;
        this.idRegUltimaAct = null;
        this.numero = Number(NUMERO);
        this.category = category;
        this.deudor = new deudor_1.ClassDeudor(rawCarpeta);
        this.llaveProceso = String(EXPEDIENTE);
        this.demanda = new demanda_1.ClassDemanda(rawCarpeta);
        this.nombre = String(DEMANDADO_NOMBRE);
        this.revisado = false;
        this.codeudor = {
            nombre: CODEUDOR_NOMBRE
                ? String(CODEUDOR_NOMBRE)
                : null,
            cedula: CODEUDOR_IDENTIFICACION
                ? String(CODEUDOR_IDENTIFICACION)
                : null,
            direccion: CODEUDOR_DIRECCION
                ? String(CODEUDOR_DIRECCION)
                : null,
            telefono: CODEUDOR_TELEFONOS
                ? String(CODEUDOR_TELEFONOS)
                : null,
            id: this.numero,
        };
        this.tipoProceso = TIPO_PROCESO
            ? (0, tipoProceso_1.default)(TIPO_PROCESO)
            : 'SINGULAR';
        this.terminado = category === 'Terminados'
            ? true
            : false;
        this.idRegUltimaAct = null;
        this.fecha = null;
        this.ultimaActuacion = null;
        this.llaveProceso = EXPEDIENTE
            ? String(EXPEDIENTE)
            : 'SinEspecificar';
        this.numero = Number(NUMERO);
    }
    //!CONSTRUCTOR -
    //METHODS
    Carpeta.prototype.getProcesos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var request, json, consultaProcesos, procesos, _i, procesos_1, rawProceso, proceso, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, fetch("https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=".concat(this.llaveProceso, "&SoloActivos=false&pagina=1"))];
                    case 1:
                        request = _a.sent();
                        if (!!request.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, request.json()];
                    case 2:
                        json = _a.sent();
                        throw new Error(JSON.stringify(json));
                    case 3: return [4 /*yield*/, request.json()];
                    case 4:
                        consultaProcesos = (_a.sent());
                        procesos = consultaProcesos.procesos;
                        for (_i = 0, procesos_1 = procesos; _i < procesos_1.length; _i++) {
                            rawProceso = procesos_1[_i];
                            if (rawProceso.esPrivado) {
                                continue;
                            }
                            proceso = __assign(__assign({}, rawProceso), { fechaProceso: rawProceso.fechaProceso
                                    ? new Date(rawProceso.fechaProceso)
                                    : null, fechaUltimaActuacion: rawProceso.fechaUltimaActuacion
                                    ? new Date(rawProceso.fechaUltimaActuacion)
                                    : null, juzgado: new juzgado_1.NewJuzgado(rawProceso) });
                            this.procesos.push(proceso);
                            this.idProcesos.push(proceso.idProceso);
                        }
                        return [2 /*return*/, this.procesos];
                    case 5:
                        error_1 = _a.sent();
                        console.log("".concat(this.numero, " => error en CarpetaBuilder.getProcesos(").concat(this.llaveProceso, ") => ").concat(error_1));
                        return [2 /*return*/, []];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Carpeta.prototype.getActuaciones = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, this_1, _i, _a, idProceso, sorted, ultimaActuacion;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.idProcesos.length === 0) {
                            return [2 /*return*/, []];
                        }
                        _loop_1 = function (idProceso) {
                            var request, consultaActuaciones, actuaciones, outActuaciones, error_2;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _c.trys.push([0, 3, , 4]);
                                        return [4 /*yield*/, fetch("https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/".concat(idProceso))];
                                    case 1:
                                        request = _c.sent();
                                        if (!request.ok) {
                                            throw new Error(request.statusText);
                                        }
                                        return [4 /*yield*/, request.json()];
                                    case 2:
                                        consultaActuaciones = (_c.sent());
                                        actuaciones = consultaActuaciones.actuaciones;
                                        outActuaciones = actuaciones.map(function (actuacion) {
                                            return __assign(__assign({}, actuacion), { idProceso: idProceso, isUltimaAct: actuacion.cant === actuacion.consActuacion
                                                    ? true
                                                    : false, fechaActuacion: new Date(actuacion.fechaActuacion), fechaRegistro: new Date(actuacion.fechaRegistro), fechaInicial: actuacion.fechaInicial
                                                    ? new Date(actuacion.fechaInicial)
                                                    : null, fechaFinal: actuacion.fechaFinal
                                                    ? new Date(actuacion.fechaFinal)
                                                    : null });
                                        });
                                        outActuaciones.forEach(function (actuacion) {
                                            _this.actuaciones.push(actuacion);
                                        });
                                        return [2 /*return*/, "continue"];
                                    case 3:
                                        error_2 = _c.sent();
                                        console.log("".concat(this_1.numero, " ERROR ==> getActuaciones ").concat(idProceso, " => ").concat(JSON.stringify(error_2, null, 2)));
                                        return [2 /*return*/, "continue"];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = this.idProcesos;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        idProceso = _a[_i];
                        return [5 /*yield**/, _loop_1(idProceso)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (this.actuaciones.length > 0) {
                            sorted = __spreadArray([], this.actuaciones, true).sort(function (a, b) {
                                var fechaA = a.fechaActuacion;
                                var fechaB = b.fechaActuacion;
                                if (fechaA < fechaB) {
                                    return -1;
                                }
                                else if (fechaA > fechaB) {
                                    return 1;
                                }
                                return 0;
                            });
                            ultimaActuacion = sorted[0];
                            this.ultimaActuacion = ultimaActuacion;
                            this.fecha = ultimaActuacion.fechaActuacion;
                            this.idRegUltimaAct = ultimaActuacion.idRegActuacion;
                        }
                        return [2 /*return*/, this.actuaciones];
                }
            });
        });
    };
    //STATIC
    Carpeta.prismaCarpeta = function (carpeta) {
        var newCarpeta = {
            id: carpeta.id,
            llaveProceso: carpeta.llaveProceso,
            nombre: carpeta.nombre,
            numero: carpeta.numero,
            category: carpeta.category,
            fecha: carpeta.fecha,
            idProcesos: carpeta.idProcesos,
            notasCount: carpeta.notasCount,
            revisado: carpeta.revisado,
            terminado: carpeta.terminado,
            tipoProceso: carpeta.tipoProceso,
        };
        return newCarpeta;
    };
    return Carpeta;
}());
exports.default = Carpeta;
