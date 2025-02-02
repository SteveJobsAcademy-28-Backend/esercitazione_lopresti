 export abstract class BaseEntity {
    public readonly id: string;
  
    constructor() {
      this.id = this.generateId();
    }
  
    private generateId(): string {
      return Date.now().toString(36) + Math.random().toString(36).substring(2, 10);
    }
  
    protected abstract validate(): void;
  }
  