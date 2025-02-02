"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.User = void 0;
const base_1 = require("./base");
const error_1 = require("./error");
const error_2 = require("./error");
class User extends base_1.BaseEntity {
    constructor(name, email) {
        super();
        this.name = name;
        this.email = email;
        this.validate();
    }
    validate() {
        if (!this.name.trim()) {
            throw new error_2.ValidationError('Il nome utente è obbligatorio');
        }
    }
    getSummary() {
        var _a;
        return `[${this.id}] ${this.name} - ${(_a = this.email) !== null && _a !== void 0 ? _a : 'Nessuna email registrata'}`;
    }
}
exports.User = User;
class Book extends base_1.BaseEntity {
    constructor(title) {
        super();
        this.title = title;
        this.borrowerId = null;
        this.validate();
    }
    validate() {
        if (!this.title.trim()) {
            throw new error_2.ValidationError('Il titolo del libro è obbligatorio');
        }
    }
    getSummary() {
        return `[${this.id}] "${this.title}" - ${this.isAvailable() ? 'Disponibile' : `Prestato a ${this.borrowerId}`}`;
    }
    isAvailable() {
        return this.borrowerId === null;
    }
    borrow(userId) {
        if (!this.isAvailable()) {
            throw new error_1.LoanError('Libro già prestato');
        }
        this.borrowerId = userId;
    }
    returnBook() {
        if (this.isAvailable()) {
            throw new error_1.LoanError('Libro non prestato');
        }
        this.borrowerId = null;
    }
}
exports.Book = Book;
