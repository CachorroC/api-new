"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassDeudor = exports.Tel = void 0;
var Tel = /** @class */ (function () {
    function Tel(telefono) {
        var celularStringArray = telefono.match(/\d{10}/g);
        var fijoStringArray = telefono.match(/\d{7}\s/g);
        var celularNumber = celularStringArray === null || celularStringArray === void 0 ? void 0 : celularStringArray.map(function (f) {
            return String(f);
        });
        var fijoNumber = fijoStringArray === null || fijoStringArray === void 0 ? void 0 : fijoStringArray.map(function (f) {
            return String(f);
        });
        this.fijo = fijoNumber
            ? fijoNumber[0]
            : null;
        this.celular = celularNumber
            ? celularNumber[0]
            : null;
    }
    return Tel;
}());
exports.Tel = Tel;
var ClassDeudor = /** @class */ (function () {
    function ClassDeudor(rawCarpeta) {
        var cedula = rawCarpeta.DEMANDADO_IDENTIFICACION, direccion = rawCarpeta.DEMANDADO_DIRECCION, email = rawCarpeta.DEMANDADO_EMAIL, telefono = rawCarpeta.DEMANDADO_TELEFONOS, nombre = rawCarpeta.DEMANDADO_NOMBRE, id = rawCarpeta.NUMERO;
        this.id = Number(id);
        this.cedula = String(cedula);
        this.direccion = direccion
            ? direccion.toString()
            : null;
        this.email = email
            ? email.toString()
            : null;
        var _a = new Tel(String(telefono)), fijo = _a.fijo, celular = _a.celular;
        this.telCelular = celular;
        this.telFijo = fijo;
        var nameStringArray = nombre
            ? nombre.trim()
                .split(' ')
            : 'Nelson Nuñez'.split(' ');
        var nameArrayLength = nameStringArray.length;
        switch (nameArrayLength) {
            case 4:
                this.primerNombre = nameStringArray[0], this.segundoNombre = nameStringArray[1], this.primerApellido = nameStringArray[2], this.segundoApellido = nameStringArray[3];
                break;
            case 2:
                this.primerNombre = nameStringArray[0], this.primerApellido = nameStringArray[1];
                this.segundoApellido = null;
                this.segundoNombre = null;
                break;
            case 1:
                this.primerNombre = nameStringArray[0];
                this.primerApellido = 'sinEspecificar';
                this.segundoApellido = null;
                this.segundoNombre = null;
                break;
            case 3:
                this.primerNombre = nameStringArray[0], this.segundoNombre = nameStringArray[1], this.primerApellido = nameStringArray[2];
                this.segundoApellido = null;
                break;
            default:
                this.primerNombre = nameStringArray[0], this.segundoNombre = nameStringArray[1], this.primerApellido = nameStringArray[2], this.segundoApellido = nameStringArray[3];
                break;
        }
    }
    ClassDeudor.prismaDeudor = function (deudor) {
        var newDeudor = {
            id: deudor.id,
            cedula: deudor.cedula,
            primerApellido: deudor.primerApellido,
            primerNombre: deudor.primerNombre,
            direccion: deudor.direccion,
            email: deudor.email,
            segundoApellido: deudor.segundoApellido,
            segundoNombre: deudor.segundoNombre,
            telCelular: deudor.telCelular,
            telFijo: deudor.telFijo,
        };
        return newDeudor;
    };
    return ClassDeudor;
}());
exports.ClassDeudor = ClassDeudor;
