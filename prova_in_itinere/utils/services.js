"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanService = void 0;
const error_1 = require("../models/error");
class LoanService {
    constructor(userRepository, bookRepository) {
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
    }
    borrowBook(userId, bookId) {
        const user = this.userRepository.findById(userId);
        const book = this.bookRepository.findById(bookId);
        if (!user)
            throw new error_1.LoanError('Utente non trovato');
        if (!book)
            throw new error_1.LoanError('Libro non trovato');
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
            throw new error_1.LoanError('Libro non trovato');
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
exports.LoanService = LoanService;
