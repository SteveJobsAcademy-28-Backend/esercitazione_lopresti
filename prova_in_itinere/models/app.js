"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funzioni_1 = require("./funzioni");
let listautenti = [
    {
        id: 2,
        nome: "giacomo",
        email: "giacomo@gmail.com"
    },
    {
        id: 10,
        nome: "davide",
        email: "davide@gmail.com"
    }
];
const utente1 = (0, funzioni_1.creautente)("gianpaolo", "gianpaolo@gmail.com");
const libro1 = (0, funzioni_1.crealibro)("rosso fuoco", true);
const prenotalibro2 = (0, funzioni_1.libroprestato)(utente1, libro1, true, new Date("2021-08-22"), new Date("2022-10-12"), false);
