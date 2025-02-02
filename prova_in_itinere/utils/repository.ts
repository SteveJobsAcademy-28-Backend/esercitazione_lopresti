import { BaseEntity } from "../models/base";
import { User } from "../models/entities";
import { LoanError } from "../models/error";
import { Book } from "../models/entities";

class Repository<T extends BaseEntity> {
  protected items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  findById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAll(): T[] {
    return [...this.items];
  }
}

export class UserRepository extends Repository<User> {
  search(query: string): User[];
  search(query: { id: string }): User | undefined;
  search(query: string | { id: string }): User[] | User | undefined {
    if (typeof query === "string") {
      const searchTerm = query.trim().toLowerCase();
      if (!searchTerm) return [];
      return this.getAll().filter((user) =>
        user.name.toLowerCase().includes(searchTerm)
      );
    }
    return this.findById(query.id);
  }
}

export class BookRepository extends Repository<Book> {
  search(query: string): Book[];
  search(query: { id: string }): Book | undefined;
  search(query: string | { id: string }): Book[] | Book | undefined {
    if (typeof query === "string") {
      const searchTerm = query.trim().toLowerCase();
      if (!searchTerm) return [];
      return this.getAll().filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
    }
    return this.findById(query.id);
  }
}

class LoanService {
  constructor(
    private userRepository: UserRepository,
    private bookRepository: BookRepository
  ) {}

  borrowBook(userId: string, bookId: string): void {
    const user = this.userRepository.findById(userId);
    const book = this.bookRepository.findById(bookId);

    if (!user) throw new LoanError(`Utente con ID ${userId} non trovato`);
    if (!book) throw new LoanError(`Libro con ID ${bookId} non trovato`);

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

    if (!book) throw new LoanError(`Libro con ID ${bookId} non trovato`);

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
