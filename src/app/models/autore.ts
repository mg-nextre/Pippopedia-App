import { Professione } from './professione';

export class Autore {
    public id:number;
    public uniqueId:string;
    public nome:string;
    public cognome:string;
    public professione: Professione;

    constructor(id:number, uniqueId:string, nome:string, cognome:string, professione:Professione){
        this.id=id;
        this.uniqueId=uniqueId;
        this.nome=nome;
        this.cognome=cognome;
        this.professione=professione; 
    }
}
