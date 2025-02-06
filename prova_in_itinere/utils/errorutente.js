"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorutente = errorutente;
const base_1 = require("../models/base");
function errorutente(name, email) {
    const user1 = new base_1.user(name, email);
    if (!name) {
        Error("nome non trovato");
    }
    else {
        console.log("il nome utente è:", name);
    }
    return base_1.user;
}
