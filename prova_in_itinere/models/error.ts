export class ValidationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  
  export class LoanError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'LoanError';
    }
  }