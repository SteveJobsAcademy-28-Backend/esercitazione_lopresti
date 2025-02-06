"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.generaid = void 0;
class generaid {
    constructor() {
        this.id = Math.floor(Math.random() * 1000);
    }
}
exports.generaid = generaid;
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
exports.user = user;
