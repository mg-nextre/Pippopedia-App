import { Autore } from './autore';

export class PippoArticolo {
    public id:number;
    public titolo:string;
    public corpo:string;
    public autore:Autore;

    constructor(id:number, titolo:string, corpo:string, autore:Autore){
      this.id=id;
      this.titolo=titolo;
      this.corpo=corpo;
      this.autore=autore; 
    }

  
}
