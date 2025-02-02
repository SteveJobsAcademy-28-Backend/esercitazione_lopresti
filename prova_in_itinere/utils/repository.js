"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = exports.UserRepository = void 0;
const error_1 = require("../models/error");
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    findById(id) {
        return this.items.find(item => item.id === id);
    }
    getAll() {
        return [...this.items];
    }
}
class UserRepository extends Repository {
    search(query) {
        if (typeof query === 'string') {
            const searchTerm = query.trim().toLowerCase();
            if (!searchTerm)
                return [];
            return this.getAll().filter(user => user.name.toLowerCase().includes(searchTerm));
        }
        return this.findById(query.id);
    }
}
exports.UserRepository = UserRepository;
class BookRepository extends Repository {
    search(query) {
        if (typeof query === 'string') {
            const searchTerm = query.trim().toLowerCase();
            if (!searchTerm)
                return [];
            return this.getAll().filter(book => book.title.toLowerCase().includes(searchTerm));
        }
        return this.findById(query.id);
    }
}
exports.BookRepository = BookRepository;
class LoanService {
    constructor(userRepository, bookRepository) {
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
    }
    borrowBook(userId, bookId) {
        const user = this.userRepository.findById(userId);
        const book = this.bookRepository.findById(bookId);
        if (!user)
            throw new error_1.LoanError(`Utente con ID ${userId} non trovato`);
        if (!book)
            throw new error_1.LoanError(`Libro con ID ${bookId} non trovato`);
        try {
            book.borrow(userId);
        }
        catch (error) {
            if (error instanceof Error) {
                throw new error_1.LoanError(`Errore nel prestito: ${error.message}`);
            }
            else {
                throw new error_1.LoanError(`Errore nel prestito: ${String(error)}`);
            }
        }
    }
    returnBook(bookId) {
        const book = this.bookRepository.findById(bookId);
        if (!book)
            throw new error_1.LoanError(`Libro con ID ${bookId} non trovato`);
        try {
            book.returnBook();
        }
        catch (error) {
            if (error instanceof Error) {
                throw new error_1.LoanError(`Errore nella restituzione: ${error.message}`);
            }
            else {
                throw new error_1.LoanError(`Errore nella restituzione: ${String(error)}`);
            }
        }
    }
}
