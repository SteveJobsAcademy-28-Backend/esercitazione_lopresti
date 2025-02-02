import { LoanError } from "../models/error";
import { BookRepository } from "./repository";
import { UserRepository } from "./repository";

export class LoanService {
  constructor(
    private userRepository: UserRepository,
    private bookRepository: BookRepository
  ) {}

  borrowBook(userId: string, bookId: string): void {
    const user = this.userRepository.findById(userId);
    const book = this.bookRepository.findById(bookId);

    if (!user) throw new LoanError("Utente non trovato");
    if (!book) throw new LoanError("Libro non trovato");

    try {
      book.borrow(userId);
    } catch (error) {
      if (error instanceof Error) {
        throw new LoanError(`Errore nel prestito: ${error.message}`);
      } else {
        throw new LoanError(`Errore nel prestito: ${String(error)}`);
      }
    }
  }

  returnBook(bookId: string): void {
    const book = this.bookRepository.findById(bookId);

    if (!book) throw new LoanError("Libro non trovato");

    try {
      book.returnBook();
    } catch (error) {
      if (error instanceof Error) {
        throw new LoanError(`Errore nella restituzione: ${error.message}`);
      } else {
        throw new LoanError(`Errore nella restituzione: ${String(error)}`);
      }
    }
  }
}
