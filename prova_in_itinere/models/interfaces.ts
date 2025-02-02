interface Presentabile {
    getSummary(): string;
  }
  
  
  interface Riservabile {
    borrow(userId: string): void;
    return(): void;
    isAvailable(): boolean;
  }
  