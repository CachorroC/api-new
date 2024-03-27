"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassDemanda = void 0;
var library_1 = require("@prisma/client/runtime/library");
var tipoProceso_1 = require("../data/tipoProceso");
var date_validator_1 = require("../utils/date-validator");
var notificacion_1 = require("./notificacion");
var capital_builder_1 = require("../utils/capital-builder");
var ClassDemanda = /** @class */ (function () {
    function ClassDemanda(rawCarpeta) {
        var _a, _b;
        var capitalAdeudado = rawCarpeta.VALOR_CAPITAL_ADEUDADO, JUZGADO_EJECUCION = rawCarpeta.JUZGADO_EJECUCION, JUZGADO_ORIGEN = rawCarpeta.JUZGADO_ORIGEN, entregaGarantiasAbogado = rawCarpeta.FECHA_ENTREGA_GARANTIAS_ABOGADO, etapaProcesal = rawCarpeta.ETAPA_PROCESAL, departamento = rawCarpeta.DEPARTAMENTO, NUMERO = rawCarpeta.NUMERO, fechaPresentacion = rawCarpeta.FECHA_PRESENTACION_DEMANDA, tipoProceso = rawCarpeta.TIPO_PROCESO, mandamientoPago = rawCarpeta.FECHA_MANDAMIENTO_PAGO, municipio = rawCarpeta.JUZGADO_CIUDAD, radicado = rawCarpeta.RADICADO, llaveProceso = rawCarpeta.EXPEDIENTE, vencimientoPagare = rawCarpeta.FECHA_VENCIMIENTO_PAGARE, fechaOrdenaMedidas = rawCarpeta.FECHA_ORDENA_MEDIDAS_CAUTELARES, medidaSolicitada = rawCarpeta.MEDIDA_SOLICITADA, A = rawCarpeta.OBLIGACION_1, B = rawCarpeta.OBLIGACION_2, VALOR_LIQUIDACION_DEL_CREDITO = rawCarpeta.VALOR_LIQUIDACION_DEL_CREDITO, VALOR_AVALUO = rawCarpeta.VALOR_AVALUO;
        rawCarpeta.FECHA_PRESENTACION_DEMANDA;
        var newFechaOrdenaMedida = (0, date_validator_1.datesExtractor)(fechaOrdenaMedidas)[0];
        this.id = Number(NUMERO);
        this.medidasCautelares = {
            id: Number(NUMERO),
            fechaOrdenaMedida: newFechaOrdenaMedida !== null && newFechaOrdenaMedida !== void 0 ? newFechaOrdenaMedida : null,
            medidaSolicitada: medidaSolicitada
                ? String(medidaSolicitada)
                : null,
        };
        var obligacionesSet = new Set();
        if (A) {
            obligacionesSet.add(String(A));
        }
        if (B) {
            obligacionesSet.add(String(B));
        }
        this.fechaPresentacion = (_a = (0, date_validator_1.datesExtractor)(fechaPresentacion)) !== null && _a !== void 0 ? _a : null;
        this.notificacion = new notificacion_1.ClassNotificacion(rawCarpeta);
        this.mandamientoPago = (_b = (0, date_validator_1.datesExtractor)(mandamientoPago)) !== null && _b !== void 0 ? _b : null;
        var NewEntregaDeGarantias = (0, date_validator_1.datesExtractor)(entregaGarantiasAbogado);
        if (NewEntregaDeGarantias.length === 0) {
            this.entregaGarantiasAbogado = null;
        }
        else {
            var firstEntrega = NewEntregaDeGarantias[0];
            this.entregaGarantiasAbogado = firstEntrega;
        }
        this.capitalAdeudado = new library_1.Decimal((0, capital_builder_1.capitalBuilder)(capitalAdeudado));
        this.tipoProceso = (0, tipoProceso_1.default)(tipoProceso);
        this.etapaProcesal = etapaProcesal
            ? "".concat(etapaProcesal)
            : null;
        this.municipio = municipio
            ? String(municipio)
            : null;
        this.obligacion = Array.from(obligacionesSet);
        this.radicado = radicado
            ? "".concat(radicado)
            : null;
        this.vencimientoPagare = (0, date_validator_1.datesExtractor)(vencimientoPagare);
        this.departamento = departamento
            ? departamento
            : null;
        this.despacho = JUZGADO_EJECUCION
            ? JUZGADO_EJECUCION
            : JUZGADO_ORIGEN
                ? JUZGADO_ORIGEN
                : null;
        this.llaveProceso = llaveProceso
            ? String(llaveProceso)
            : null;
        this.avaluo = new library_1.Decimal((0, capital_builder_1.capitalBuilder)(VALOR_AVALUO));
        this.liquidacion = new library_1.Decimal((0, capital_builder_1.capitalBuilder)(VALOR_LIQUIDACION_DEL_CREDITO));
    }
    ClassDemanda.prismaDemanda = function (demanda) {
        var newMedidas = {
            id: demanda.id,
            fechaOrdenaMedida: demanda.medidasCautelares.fechaOrdenaMedida,
            medidaSolicitada: demanda.medidasCautelares.medidaSolicitada,
        };
        var newNotificacion = notificacion_1.ClassNotificacion.prismaNotificacion(demanda.notificacion);
        var newDemanda = {
            id: demanda.id,
            tipoProceso: demanda.tipoProceso,
            avaluo: demanda.avaluo,
            capitalAdeudado: demanda.capitalAdeudado,
            departamento: demanda.departamento,
            despacho: demanda.despacho,
            entregaGarantiasAbogado: demanda.entregaGarantiasAbogado,
            fechaPresentacion: demanda.fechaPresentacion,
            vencimientoPagare: demanda.vencimientoPagare,
            etapaProcesal: demanda.etapaProcesal,
            liquidacion: demanda.liquidacion,
            llaveProceso: demanda.llaveProceso,
            mandamientoPago: demanda.mandamientoPago,
            municipio: demanda.municipio,
            obligacion: demanda.obligacion,
            radicado: demanda.radicado,
            medidasCautelares: {
                connectOrCreate: {
                    where: {
                        id: demanda.id,
                    },
                    create: newMedidas,
                },
            },
            notificacion: {
                connectOrCreate: {
                    where: {
                        id: demanda.id,
                    },
                    create: newNotificacion,
                },
            },
        };
        return newDemanda;
    };
    return ClassDemanda;
}());
exports.ClassDemanda = ClassDemanda;
