import { user } from "./base";
import { generaid } from "./base";
import { crealibro, creautente, libroprestato } from "./funzioni";
import { libro } from "./libro";
import { prestito } from "./prestito";


let listautenti = [
    {
      id: 2,
      nome: "giacomo",
      email: "giacomo@gmail.com"
    },
    {
      id: 10,
      nome: "davide",
      email: "davide@gmail.com"
    }
  ];
  
 const utente1 = creautente("gianpaolo","gianpaolo@gmail.com");
 const libro1 = crealibro("rosso fuoco",true);
 const prenotalibro2 = libroprestato(
    utente1,
    libro1,
    true,
    new Date ("2021-08-22"),
    new Date ("2022-10-12"),
    false
 )
