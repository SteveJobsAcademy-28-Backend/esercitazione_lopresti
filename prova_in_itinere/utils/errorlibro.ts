import { error } from 'console';
import { libro} from '../models/libro';

export function errorlibro(titolo:string,isDisponibile:boolean): libro {
    const Libro = new libro(titolo,isDisponibile);

    if(!libro){
        error("libro non trovato");
    } else {
        console.log("libro trovato:",titolo);
        console.log("libro disponibile",isDisponibile)
    }

    if(!isDisponibile){
        error("libro non disponibile");
    }
    return Libro; 
}