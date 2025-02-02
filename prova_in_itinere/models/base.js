"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
class BaseEntity {
    constructor() {
        this.id = this.generateId();
    }
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substring(2, 10);
    }
}
exports.BaseEntity = BaseEntity;
