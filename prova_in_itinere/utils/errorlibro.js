"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorlibro = errorlibro;
const console_1 = require("console");
const libro_1 = require("../models/libro");
function errorlibro(titolo, isDisponibile) {
    const Libro = new libro_1.libro(titolo, isDisponibile);
    if (!libro_1.libro) {
        (0, console_1.error)("libro non trovato");
    }
    else {
        console.log("libro trovato:", titolo);
        console.log("libro disponibile", isDisponibile);
    }
    if (!isDisponibile) {
        (0, console_1.error)("libro non disponibile");
    }
    return Libro;
}
