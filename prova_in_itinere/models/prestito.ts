import { generaid } from "./base";
import { libro } from "./libro";

export class prestito extends generaid {
  isprenotato:boolean;
  datainizioprestito:Date;
  datafineprestito:Date; 

  constructor(isprenotato:boolean,datainizio:Date,datafine:Date){
    super();
    this.isprenotato=isprenotato;
    this.datainizioprestito=datainizio;
    this.datafineprestito=datafine;
  }

}