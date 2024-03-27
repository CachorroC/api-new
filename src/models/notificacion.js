"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassNotificacion = void 0;
var date_validator_1 = require("../utils/date-validator");
var ClassNotificacion = /** @class */ (function () {
    function ClassNotificacion(rawDb) {
        this.notifiers = [];
        var fisico = rawDb.FISICO, certimail = rawDb.CERTIMAIL, autoNotificado = rawDb.FECHA_AUTO_NOTIFICADO, NUMERO = rawDb.NUMERO, fechaRecibido291 = rawDb.FECHA_RECIBO_291, fechaAporta291 = rawDb.FECHA_APORTA_NOTIFICACION_291, resultado291 = rawDb.RESULTADO_291, fechaRecibido292 = rawDb.FECHA_RECIBO_AVISO_292, fechaAporta292 = rawDb.FECHA_APORTA_NOTIFICACION_292, resultado292 = rawDb.RESULTADO_292;
        this.id = Number(NUMERO);
        this.certimail = certimail
            ? (certimail === 'SI'
                ? true
                : false)
            : null;
        this.fisico = fisico
            ? (fisico === 'SI'
                ? true
                : false)
            : null;
        this.autoNotificado = autoNotificado
            ? new Date(autoNotificado)
            : null;
        if (autoNotificado) {
            var newAutoNotificado = (0, date_validator_1.datesExtractor)(autoNotificado)[0];
            this.autoNotificado = newAutoNotificado !== null && newAutoNotificado !== void 0 ? newAutoNotificado : null;
        }
        else {
            this.autoNotificado = null;
        }
        var newFechaRecibido291 = (0, date_validator_1.datesExtractor)(fechaRecibido291)[0];
        var newFechaAporta291 = (0, date_validator_1.datesExtractor)(fechaAporta291)[0];
        var newResultado291 = resultado291
            ? resultado291 === 'POSITIVO' || resultado291 === 'ABIERTO'
                ? true
                : false
            : null;
        this.notifiers.push({
            tipo: '291',
            fechaRecibido: newFechaRecibido291 !== null && newFechaRecibido291 !== void 0 ? newFechaRecibido291 : null,
            fechaAporta: newFechaAporta291 !== null && newFechaAporta291 !== void 0 ? newFechaAporta291 : null,
            resultado: newResultado291,
            carpetaNumero: Number(NUMERO),
        });
        var newFechaRecibido292 = (0, date_validator_1.datesExtractor)(fechaRecibido292)[0];
        var newFechaAporta292 = (0, date_validator_1.datesExtractor)(fechaAporta292)[0];
        var newResultado292 = resultado292
            ? resultado292 === 'POSITIVO' || resultado292 === 'ABIERTO'
                ? true
                : false
            : null;
        this.notifiers.push({
            tipo: '292',
            fechaRecibido: newFechaRecibido292 !== null && newFechaRecibido292 !== void 0 ? newFechaRecibido292 : null,
            fechaAporta: newFechaAporta292 !== null && newFechaAporta292 !== void 0 ? newFechaAporta292 : null,
            resultado: newResultado292,
            carpetaNumero: Number(NUMERO),
        });
    }
    ClassNotificacion.prismaNotificacion = function (notificacion) {
        var newNotificacion = {
            id: notificacion.id,
            autoNotificado: notificacion.autoNotificado,
            certimail: notificacion.certimail,
            fisico: notificacion.fisico,
            notifiers: {
                connectOrCreate: notificacion.notifiers.map(function (notif) {
                    var notifCarpetaInput = {
                        tipo: notif.tipo,
                        carpetaNumero: notif.carpetaNumero,
                    };
                    var notifierConnectOrCreate = {
                        where: {
                            tipo_carpetaNumero: notifCarpetaInput,
                        },
                        create: {
                            tipo: notif.tipo,
                            carpetaNumero: notif.carpetaNumero,
                            fechaAporta: notif.fechaAporta,
                            fechaRecibido: notif.fechaRecibido,
                            resultado: notif.resultado,
                        },
                    };
                    return notifierConnectOrCreate;
                }),
            },
        };
        return newNotificacion;
    };
    return ClassNotificacion;
}());
exports.ClassNotificacion = ClassNotificacion;
