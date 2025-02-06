"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creautente = creautente;
exports.crealibro = crealibro;
exports.libroprestato = libroprestato;
const base_1 = require("./base");
const libro_1 = require("./libro");
const prestito_1 = require("./prestito");
function creautente(name, email) {
    const utente = new base_1.user(name, email);
    return base_1.user;
}
function crealibro(titolo, isdisponibile) {
    const libro1 = new libro_1.libro(titolo, isdisponibile);
    return libro1;
}
function libroprestato(utente, libro, isprenotato, datainizioprestito, datafineprestito, isdisponibile) {
    const prenotazione = new prestito_1.prestito(isprenotato, datainizioprestito, datafineprestito);
}
