
export interface guest {
    id: number;
    name: string;
}

export interface Admin extends guest {
    adminLevel: number;
}

export interface Developer extends guest {
    programmingLanguages: string[];
}
