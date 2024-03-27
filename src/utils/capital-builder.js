"use strict";
/*
const outGoingValuesMap = new Map();

const regexMap = [];

for ( const carpeta of Carpetas ) {
  const indexOfCarpeta = Carpetas.indexOf(
    carpeta
  );

  const dateEntries = new Map();

  dateEntries.set(
    'numero', carpeta.numero
  );
  dateEntries.set(
    'index', indexOfCarpeta
  );

  const carpetaEntries = Object.entries(
    carpeta
  );

  for ( const [
    key,
    value
  ] of carpetaEntries ) {
    const matchedFechansKey = key.search(
      /(VALOR+)/gm
    );
    console.log(
      matchedFechansKey
    );

    if ( matchedFechansKey === -1 ) {
      continue;
    }

    regexMap.push(
      value
    );

    const dateValue = capitalBuilder(
      value
    );
    console.log(
      `OUT_${ value } ====> ${ dateValue }`
    );
    dateEntries.set(
      key, dateValue
    );
    dateEntries.set(
      `IN_${ key }`, value
    );
  }

  const fechaCarpeta = Object.fromEntries(
    dateEntries
  );
  console.log(
    JSON.stringify(
      fechaCarpeta, null, 2
    )
  );
  outGoingValuesMap.set(
    carpeta.numero, fechaCarpeta
  );
} */
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalBuilder = void 0;
function capitalBuilder(capitalAdeudado) {
    if (!capitalAdeudado || typeof capitalAdeudado === 'object') {
        return 0;
    }
    if (typeof capitalAdeudado === 'number') {
        return capitalAdeudado;
    }
    var copTaker = capitalAdeudado.matchAll(/([\d.]+)([.,])(\d{2}|\d{2})$/gm);
    console.log(copTaker);
    for (var _i = 0, copTaker_1 = copTaker; _i < copTaker_1.length; _i++) {
        var cap = copTaker_1[_i];
        var /*  */ value = cap[1];
        var valueReplacer_1 = value.replaceAll(/([.,]+)/gm, '');
        return Number(valueReplacer_1);
    }
    var newCapital = capitalAdeudado.search(/([/A-Za-z@]+)/gm);
    console.log(newCapital);
    if (newCapital >= 0) {
        console.log("es mayor a 0 ".concat(newCapital));
        return 0;
    }
    console.log(capitalAdeudado);
    var outGoingMatch = capitalAdeudado.match(/(\d+)/gm);
    if (!outGoingMatch) {
        return 0;
    }
    var valueReplacer = capitalAdeudado.replaceAll(/([.,]+)/gm, '');
    return Number(valueReplacer);
}
exports.capitalBuilder = capitalBuilder;
