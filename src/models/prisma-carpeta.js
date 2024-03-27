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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCarpeta = void 0;
var deudor_1 = require("./deudor");
var demanda_1 = require("./demanda");
var prisma_1 = require("../services/prisma");
var carpeta_1 = require("./carpeta");
var PrismaCarpeta = /** @class */ (function () {
    function PrismaCarpeta() {
    }
    PrismaCarpeta.updateNotes = function (incomingCarpeta) {
        return __awaiter(this, void 0, void 0, function () {
            var notas, updater;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        notas = incomingCarpeta.notas;
                        return [4 /*yield*/, prisma_1.default.nota.createMany({
                                data: notas,
                                skipDuplicates: true,
                            })];
                    case 1:
                        updater = _a.sent();
                        console.log(updater);
                        return [2 /*return*/, updater.count];
                }
            });
        });
    };
    PrismaCarpeta.getCarpeta = function (numero) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma_1.default.carpeta.findFirstOrThrow({
                            where: {
                                numero: numero,
                            },
                            include: {
                                ultimaActuacion: true,
                                deudor: true,
                                codeudor: true,
                                notas: true,
                                tareas: true,
                                demanda: {
                                    include: {
                                        notificacion: {
                                            include: {
                                                notifiers: true,
                                            },
                                        },
                                        medidasCautelares: true,
                                    },
                                },
                                procesos: {
                                    include: {
                                        juzgado: true,
                                    },
                                },
                            },
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PrismaCarpeta.updateCarpeta = function (incomingCarpeta) {
        return __awaiter(this, void 0, void 0, function () {
            var ultimaActuacion, demanda, deudor, notas, newDemanda, newDeudor, newCarpeta, inserter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ultimaActuacion = incomingCarpeta.ultimaActuacion, demanda = incomingCarpeta.demanda, deudor = incomingCarpeta.deudor, notas = incomingCarpeta.notas;
                        newDemanda = demanda_1.ClassDemanda.prismaDemanda(demanda);
                        newDeudor = deudor_1.ClassDeudor.prismaDeudor(deudor);
                        newCarpeta = carpeta_1.default.prismaCarpeta(incomingCarpeta);
                        return [4 /*yield*/, prisma_1.default.carpeta.update({
                                where: {
                                    numero: incomingCarpeta.numero,
                                },
                                data: {
                                    category: newCarpeta.category,
                                    fecha: newCarpeta.fecha,
                                    terminado: newCarpeta.terminado,
                                    nombre: newCarpeta.nombre,
                                    notasCount: newCarpeta.notasCount,
                                    ultimaActuacion: ultimaActuacion
                                        ? {
                                            connectOrCreate: {
                                                where: {
                                                    idRegActuacion: ultimaActuacion.idRegActuacion,
                                                },
                                                create: __assign({}, ultimaActuacion),
                                            },
                                        }
                                        : undefined,
                                    deudor: {
                                        update: __assign({}, newDeudor),
                                    },
                                    demanda: {
                                        update: __assign({}, newDemanda),
                                    },
                                    notas: {
                                        createMany: {
                                            data: notas,
                                            skipDuplicates: true,
                                        },
                                    },
                                },
                            })];
                    case 1:
                        inserter = _a.sent();
                        console.log(inserter);
                        return [2 /*return*/];
                }
            });
        });
    };
    PrismaCarpeta.insertCarpeta = function (incomingCarpeta) {
        return __awaiter(this, void 0, void 0, function () {
            var idRegUltimaAct, ultimaActuacion, procesos, actuaciones, demanda, deudor, codeudor, notas, newDemanda, newDeudor, newCarpeta, inserter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        idRegUltimaAct = incomingCarpeta.idRegUltimaAct, ultimaActuacion = incomingCarpeta.ultimaActuacion, procesos = incomingCarpeta.procesos, actuaciones = incomingCarpeta.actuaciones, demanda = incomingCarpeta.demanda, deudor = incomingCarpeta.deudor, codeudor = incomingCarpeta.codeudor, notas = incomingCarpeta.notas;
                        console.log(idRegUltimaAct);
                        newDemanda = demanda_1.ClassDemanda.prismaDemanda(demanda);
                        newDeudor = deudor_1.ClassDeudor.prismaDeudor(deudor);
                        newCarpeta = carpeta_1.default.prismaCarpeta(incomingCarpeta);
                        return [4 /*yield*/, prisma_1.default.carpeta.upsert({
                                where: {
                                    numero: incomingCarpeta.numero,
                                },
                                create: __assign(__assign({}, newCarpeta), { ultimaActuacion: ultimaActuacion
                                        ? {
                                            connectOrCreate: {
                                                where: {
                                                    idRegActuacion: ultimaActuacion.idRegActuacion,
                                                },
                                                create: __assign({}, ultimaActuacion),
                                            },
                                        }
                                        : undefined, deudor: {
                                        connectOrCreate: {
                                            where: {
                                                id: incomingCarpeta.numero,
                                            },
                                            create: newDeudor,
                                        },
                                    }, demanda: {
                                        connectOrCreate: {
                                            where: {
                                                id: incomingCarpeta.numero,
                                            },
                                            create: newDemanda,
                                        },
                                    }, codeudor: {
                                        connectOrCreate: {
                                            where: {
                                                id: incomingCarpeta.numero,
                                            },
                                            create: __assign({}, codeudor),
                                        },
                                    }, notas: {
                                        createMany: {
                                            data: notas,
                                            skipDuplicates: true,
                                        },
                                    }, procesos: {
                                        connectOrCreate: procesos.map(function (proceso) {
                                            var juzgado = proceso.juzgado, restProceso = __rest(proceso, ["juzgado"]);
                                            var procesoCreateorConnect = {
                                                where: {
                                                    idProceso: proceso.idProceso,
                                                },
                                                create: __assign(__assign({}, restProceso), { juzgado: {
                                                        connectOrCreate: {
                                                            where: {
                                                                tipo: juzgado.tipo,
                                                            },
                                                            create: __assign({}, juzgado),
                                                        },
                                                    }, actuaciones: {
                                                        connectOrCreate: actuaciones.map(function (actuacion) {
                                                            var actuacionCreateOrConnect = {
                                                                where: {
                                                                    idRegActuacion: actuacion.idRegActuacion,
                                                                },
                                                                create: __assign({}, actuacion),
                                                            };
                                                            return actuacionCreateOrConnect;
                                                        }),
                                                    } }),
                                            };
                                            return procesoCreateorConnect;
                                        }),
                                    } }),
                                update: {
                                    category: newCarpeta.category,
                                    terminado: newCarpeta.terminado,
                                    revisado: newCarpeta.revisado,
                                    nombre: newCarpeta.nombre,
                                    notasCount: newCarpeta.notasCount,
                                    ultimaActuacion: ultimaActuacion
                                        ? {
                                            connectOrCreate: {
                                                where: {
                                                    idRegActuacion: ultimaActuacion.idRegActuacion,
                                                },
                                                create: __assign({}, ultimaActuacion),
                                            },
                                        }
                                        : undefined,
                                    demanda: {
                                        connectOrCreate: {
                                            where: {
                                                id: incomingCarpeta.numero,
                                            },
                                            create: newDemanda,
                                        },
                                    },
                                    notas: {
                                        createMany: {
                                            data: notas,
                                            skipDuplicates: true,
                                        },
                                    },
                                    procesos: {
                                        connectOrCreate: procesos.map(function (proceso) {
                                            var juzgado = proceso.juzgado, restProceso = __rest(proceso, ["juzgado"]);
                                            var procesoCreateorConnect = {
                                                where: {
                                                    idProceso: proceso.idProceso,
                                                },
                                                create: __assign(__assign({}, restProceso), { juzgado: {
                                                        connectOrCreate: {
                                                            where: {
                                                                tipo: juzgado.tipo,
                                                            },
                                                            create: __assign({}, juzgado),
                                                        },
                                                    }, actuaciones: {
                                                        connectOrCreate: actuaciones.map(function (actuacion) {
                                                            var actuacionCreateOrConnect = {
                                                                where: {
                                                                    idRegActuacion: actuacion.idRegActuacion,
                                                                },
                                                                create: __assign({}, actuacion),
                                                            };
                                                            return actuacionCreateOrConnect;
                                                        }),
                                                    } }),
                                            };
                                            return procesoCreateorConnect;
                                        }),
                                    },
                                },
                            })];
                    case 1:
                        inserter = _a.sent();
                        console.log(inserter);
                        return [2 /*return*/];
                }
            });
        });
    };
    return PrismaCarpeta;
}());
exports.PrismaCarpeta = PrismaCarpeta;
