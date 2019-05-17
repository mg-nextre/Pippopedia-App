import { Component, OnInit } from '@angular/core';
import { PippoArticoloService } from 'src/app/services/pippo-articolo.service';
import { PippoArticolo } from 'src/app/models/pippo-articolo';
import { Autore } from 'src/app/models/autore';
import { Professione } from 'src/app/models/professione';

@Component({
  selector: 'app-pippo-articoli-list',
  templateUrl: './pippo-articoli-list.component.html',
  styleUrls: ['./pippo-articoli-list.component.scss']
})
export class PippoArticoliListComponent implements OnInit {
  private _pippoArticoli:PippoArticolo[];  
  constructor(private pippoArticoloService:PippoArticoloService) { }


  get pippoArticoli(): PippoArticolo[] {
    return this._pippoArticoli;
  }

  public postPippoArticolo(id:number, titolo:string, corpo:string, idAutore:number, uniqueId:string, nome:string, cognome:string, idProfessione:number, nomeProfessione:string){
    if(!this.controllo(uniqueId)){
      uniqueId="";
    }
    let pippoArticolo = new PippoArticolo(id, titolo, corpo , new Autore(idAutore, uniqueId, nome, cognome, new Professione(idProfessione, nomeProfessione)));
    console.log(pippoArticolo);
    this.pippoArticoloService.postPippoArticoli(pippoArticolo).subscribe(_=>this.update());
    ;
  }
  public update(){
    this.pippoArticoloService.getPippoArticoli().subscribe(list => this._pippoArticoli = list);
  }
  public deletePippoArticolo(pippoArticolo:PippoArticolo){
    this.pippoArticoloService.deletePippoArticoli(pippoArticolo).subscribe(_=>this.update());
  }

  ngOnInit() {
    this.update()
  }

  controllo(uniqueId:string){
    const regex = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gm;
    let m;
    let ris = false;
    while ((m = regex.exec(uniqueId)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
        ris=true;
      });
    }
    return ris;

  }

}
