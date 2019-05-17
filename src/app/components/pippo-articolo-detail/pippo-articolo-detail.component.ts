import { Component, OnInit } from '@angular/core';
import { PippoArticoloService } from 'src/app/services/pippo-articolo.service';
import { PippoArticolo } from 'src/app/models/pippo-articolo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Autore } from 'src/app/models/autore';
import { Professione } from 'src/app/models/professione';

@Component({
  selector: 'app-pippo-articolo-detail',
  templateUrl: './pippo-articolo-detail.component.html',
  styleUrls: ['./pippo-articolo-detail.component.scss']
})
export class PippoArticoloDetailComponent implements OnInit {
  pippoArticolo:PippoArticolo;
 
  


  constructor(private pippoArticoloService:PippoArticoloService, private activatedRoute:ActivatedRoute, private location:Location) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
      this.pippoArticoloService.getArticoloById(id).subscribe(p => this.pippoArticolo=p);
  }
  delete(pippoArticolo){
    this.pippoArticoloService.deletePippoArticoli(pippoArticolo).subscribe(_=>this.location.back());
  }
  back(){
    this.location.back();
  }
  putPippoArticolo(id:number, titolo:string, corpo:string, idAutore:number, uniqueId:string, nome:string, cognome:string, idProfessione:number, nomeProfessione:string){
    let pippoArticolo =new PippoArticolo(id, titolo, corpo , new Autore(idAutore, uniqueId, nome, cognome, new Professione(idProfessione, nomeProfessione)));
    this.pippoArticoloService.putPippoArticoli(pippoArticolo).subscribe(p=> this.pippoArticolo=p);
  }

}
