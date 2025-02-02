"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanError = exports.ValidationError = void 0;
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}
exports.ValidationError = ValidationError;
class LoanError extends Error {
    constructor(message) {
        super(message);
        this.name = 'LoanError';
    }
}
exports.LoanError = LoanError;
