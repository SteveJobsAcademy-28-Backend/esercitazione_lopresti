import {user } from "../models/base";
import { libro } from "../models/libro";


export function errorutente(name:string,email:string): user{
    const user1 = new user(name,email);

    if(!name) {
        Error("nome non trovato");
    } else {
        console.log("il nome utente è:",name);
    }

    return user;
}