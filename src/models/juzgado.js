"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewJuzgado = void 0;
var despachos_1 = require("../data/despachos");
var NewJuzgado = /** @class */ (function () {
    function NewJuzgado(proceso) {
        var matchedDespacho = despachos_1.Despachos.find(function (despacho) {
            var nDesp = despacho.nombre
                .toLowerCase()
                .normalize('NFD')
                .replace(/\p{Diacritic}/gu, '')
                .trim();
            var pDesp = proceso.despacho
                .toLowerCase()
                .normalize('NFD')
                .replace(/\p{Diacritic}/gu, '')
                .trim();
            var indexOfDesp = nDesp.indexOf(pDesp);
            if (indexOfDesp >= 0) {
                console.log("procesos despacho is in despachos ".concat(indexOfDesp + 1));
            }
            return nDesp === pDesp;
        });
        var nameN = matchedDespacho
            ? matchedDespacho.nombre
            : proceso.despacho;
        var matchedId = nameN.match(/\d+/g);
        this.id = Number(matchedId === null || matchedId === void 0 ? void 0 : matchedId.toString());
        (this.tipo = matchedDespacho
            ? matchedDespacho.nombre
            : proceso.despacho),
            (this.url = matchedDespacho
                ? "https://www.ramajudicial.gov.co".concat(matchedDespacho.url)
                : "https://www.ramajudicial.gov.co".concat(proceso.despacho
                    .replaceAll(' ', '-')
                    .toLowerCase()));
    }
    return NewJuzgado;
}());
exports.NewJuzgado = NewJuzgado;
