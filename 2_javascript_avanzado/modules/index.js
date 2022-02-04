'use strict'

const operations = require('./functions')

function main() {
    let numero1 = 10;
    let numero2 = 2;

    const resSuma = operations.sum(numero1, numero2)
    const resResta = operations.subtract(numero1, numero2)
    const resMultipl = operations.multply(numero1, numero2)
    const resDivision = operations.divide(numero1, numero2)

    console.log(`resSuma = ${resSuma}`);
    console.log(`resSuma = ${resResta}`);
    console.log(`resSuma = ${resMultipl}`);
    console.log(`resSuma = ${resDivision}`);
}

main()
