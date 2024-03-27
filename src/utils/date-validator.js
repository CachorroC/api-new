"use strict";
/*
const rawValues = [];

//SECTION Carpeta example
for ( const carpeta of Carpetas ) {
  const dateEntries = new Map();

  dateEntries.set(
    'numero', carpeta.numero
  );

  const carpetaEntries = Object.entries(
    carpeta
  );


  for ( const [
    key,
    value
  ] of carpetaEntries ) {
    const matchedFechansKey = key.search(
      /(FECHA+)/gm
    );

    if ( matchedFechansKey >= 0 ) {
      const dateValue = datesExtractor(
        value
      );
      console.log(
        `${ value } ====> ${ dateValue }`
      );
      dateEntries.set(
        `RAW_${ key }`, value
      );
      rawValues.push(
        value
      );
      dateEntries.set(
        key, dateValue
      );
    }
  }

  const fechaCarpeta = Object.fromEntries(
    dateEntries
  );
  console.log(
    fechaCarpeta
  );

}

fs.writeFile(
  'fechas.json', JSON.stringify(
    rawValues, null, 2
  )
); */
Object.defineProperty(exports, "__esModule", { value: true });
exports.xlsxNumberToDate = exports.dateArrayValidator = exports.dateValidator = exports.fixSingleFecha = exports.datesExtractor = void 0;
//!SECTION
//SECTION first step: extract the date
function datesExtractor(incomingDate) {
    var outputDates = [];
    if (!incomingDate) {
        return dateArrayValidator(outputDates);
    }
    if (typeof incomingDate === 'object') {
        console.log(incomingDate);
        if (incomingDate.toString() !== 'Invalid Date') {
            outputDates.push(incomingDate);
        }
        return dateArrayValidator(outputDates);
    }
    if (typeof incomingDate === 'number') {
        var outgoingDate = xlsxNumberToDate(incomingDate);
        if (outgoingDate) {
            outputDates.push(outgoingDate);
        }
        return dateArrayValidator(outputDates);
    }
    var splitByDoubleSlash = incomingDate.split('//');
    for (var _i = 0, splitByDoubleSlash_1 = splitByDoubleSlash; _i < splitByDoubleSlash_1.length; _i++) {
        var splitted = splitByDoubleSlash_1[_i];
        var fixed = fixSingleFecha(splitted);
        for (var _a = 0, fixed_1 = fixed; _a < fixed_1.length; _a++) {
            var fixedDate = fixed_1[_a];
            outputDates.push(fixedDate);
        }
    }
    return dateArrayValidator(outputDates);
}
exports.datesExtractor = datesExtractor;
//!SECTION
//SECTION secondStep: fix the extracted date
function fixSingleFecha(rawFecha) {
    var datesOutput = [];
    var matchedDate = rawFecha.matchAll(/(\d+)(-|\/)(\d+)(-|\/)(\d+)/gm);
    for (var _i = 0, matchedDate_1 = matchedDate; _i < matchedDate_1.length; _i++) {
        var matchedValue = matchedDate_1[_i];
        var total = matchedValue[0], firstNumber = matchedValue[1], firstDivider = matchedValue[2], secondNumber = matchedValue[3], secondDivider = matchedValue[4], thirdNumber = matchedValue[5];
        var newYear = void 0, newDay = void 0;
        console.log(total);
        console.log(secondDivider);
        var newMonth = Number(secondNumber) - 1;
        if (firstDivider === '-') {
            newYear = Number(firstNumber.padStart(4, '2015'));
            newDay = Number(thirdNumber.padStart(2, '00'));
        }
        else {
            newYear = Number(thirdNumber.padStart(4, '2015'));
            newDay = Number(firstNumber.padStart(2, '00'));
        }
        var outputDate = new Date(newYear, newMonth, newDay);
        datesOutput.push(outputDate);
    }
    return datesOutput;
}
exports.fixSingleFecha = fixSingleFecha;
//!SECTION
function dateValidator(incomingDate) {
    var stringifiedDate = incomingDate.toString();
    console.log(stringifiedDate);
    console.log("\n    string date:\n    ".concat(String(incomingDate), "\n    "));
    var dateYear = incomingDate.getFullYear();
    console.log(dateYear);
    if (stringifiedDate === 'Invalid Date'
        || dateYear <= 2000
        || dateYear > 2200) {
        console.log(dateYear);
        return null;
    }
    console.log(incomingDate);
    return incomingDate;
}
exports.dateValidator = dateValidator;
function dateArrayValidator(incomingDates) {
    var outPutDates = [];
    for (var _i = 0, incomingDates_1 = incomingDates; _i < incomingDates_1.length; _i++) {
        var date = incomingDates_1[_i];
        var ndate = dateValidator(date);
        if (ndate) {
            outPutDates.push(ndate);
        }
    }
    return outPutDates;
}
exports.dateArrayValidator = dateArrayValidator;
function xlsxNumberToDate(incomingDate) {
    var outgoingDate = new Date((incomingDate - (25567 + 1)) * 86400 * 1000);
    if (incomingDate > 55000
        || outgoingDate.toString() === 'Invalid Date'
        || outgoingDate.getFullYear() > 2200) {
        console.log(outgoingDate.toString());
        return null;
    }
    return outgoingDate;
}
exports.xlsxNumberToDate = xlsxNumberToDate;
