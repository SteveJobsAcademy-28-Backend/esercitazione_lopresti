import { BaseEntity } from "./base";
import { LoanError } from "./error";
import { ValidationError } from "./error";

interface Presentable {
    getSummary(): string;
  }
  
  interface Reservable {
    borrow(userId: string): void;
    returnBook(): void; 
    isAvailable(): boolean;
  }
  
export  class User extends BaseEntity implements Presentable { 
    constructor(
      public name: string,
      public email?: string
    ) {
      super();
      this.validate();
    }
  
    protected validate(): void {
      if (!this.name.trim()) {
        throw new ValidationError('Il nome utente è obbligatorio');
      }
    }
  
    getSummary(): string {
      return `[${this.id}] ${this.name} - ${this.email ?? 'Nessuna email registrata'}`;
    }
  }
  
 export  class Book extends BaseEntity implements Presentable, Reservable {
    private borrowerId: string | null = null;
  
    constructor(public title: string) {
      super();
      this.validate();
    }
  
    protected validate(): void {
      if (!this.title.trim()) {
        throw new ValidationError('Il titolo del libro è obbligatorio');
      }
    }
  
    getSummary(): string {
      return `[${this.id}] "${this.title}" - ${
        this.isAvailable() ? 'Disponibile' : `Prestato a ${this.borrowerId}`
      }`;
    }
  
    isAvailable(): boolean {
      return this.borrowerId === null;
    }
  
    borrow(userId: string): void {
      if (!this.isAvailable()) {
        throw new LoanError('Libro già prestato');
      }
      this.borrowerId = userId;
    }
  
    returnBook(): void { 
      if (this.isAvailable()) {
        throw new LoanError('Libro non prestato');
      }
      this.borrowerId = null;
    }
  }