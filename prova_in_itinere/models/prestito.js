"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prestito = void 0;
const base_1 = require("./base");
class prestito extends base_1.generaid {
    constructor(isprenotato, datainizio, datafine) {
        super();
        this.isprenotato = isprenotato;
        this.datainizioprestito = datainizio;
        this.datafineprestito = datafine;
    }
}
exports.prestito = prestito;
