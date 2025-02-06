import {prestito} from "../models/prestito";

export function errorprestito(isPrenotato: boolean,
    isdisponibile:boolean,
    datainizioPrestito: Date,
    dataFinePrestito: Date) : prestito{
        const prestito1 = new    prestito(isPrenotato, datainizioPrestito, dataFinePrestito);
        if (!isPrenotato || isNaN(datainizioPrestito.getTime()) && isPrenotato) {
            throw new Error("ATTENZIONE - Libro risultante prenotato ma non è presente la data di prenotazione");
        } else {
            console.log("Data di prenotazione: ", datainizioPrestito, "\n");
        }
        
        //Controlla se la data di inizio prestito è valida
        if (!isPrenotato || isNaN(datainizioPrestito.getTime())) {
            console.log("ATTENZIONE - Nessuna data di prestito");
        } else {
            console.log("Data di prestito: ", datainizioPrestito, "\n");
        }
    
        //Controlla se la data di fine prestito è valida
        if (!dataFinePrestito || isNaN(dataFinePrestito.getTime())) {
            console.log("ATTENZIONE - Nessuna data di fine prestito");
        } else {
            console.log("Data di fine prestito: ", dataFinePrestito, "\n");
        }
    return prestito1;
    }