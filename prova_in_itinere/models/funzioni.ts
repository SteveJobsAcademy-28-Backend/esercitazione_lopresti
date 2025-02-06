import { user } from "./base";
import { libro } from "./libro";
import { prestito } from "./prestito";

    export function creautente(name:string,email:string): user {
        const utente = new user(name ,email);
        return user;
    }

    export function crealibro(titolo:string,isdisponibile:boolean): libro {
        const libro1 = new libro(titolo,isdisponibile);
        return libro1;
    }

    export function libroprestato(utente: user , libro: libro,isprenotato:boolean,datainizioprestito:Date,
        datafineprestito:Date,isdisponibile:boolean){
        const prenotazione = new prestito(
            isprenotato,
            datainizioprestito,
            datafineprestito
        );
    }