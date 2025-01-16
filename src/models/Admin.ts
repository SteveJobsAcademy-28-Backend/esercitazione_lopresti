export interface admin {
    id:number;
    name?:string;
}

 export interface SuperAdmin extends admin {
    permission: string[];
}
