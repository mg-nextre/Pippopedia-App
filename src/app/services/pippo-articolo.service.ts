import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { PippoArticolo } from '../models/pippo-articolo';

@Injectable({
  providedIn: 'root'
})
export class PippoArticoloService {
  private url= 'http://localhost:9999/articoli'; 
  private postUrl = '/new';

  private httpOptions = {
    headers: new HttpHeaders({'Content-type' : 'application/json'})
  };
  constructor(private httpClient: HttpClient) { }

  getPippoArticoli():Observable<PippoArticolo[]>{
    return this.httpClient.get<PippoArticolo[]>(this.url, this.httpOptions).pipe(
      tap(_ => console.log('PippoArticolo Fetched')),
      catchError(this.handleError<PippoArticolo[]>('getPippoArticoli', 'Error', []))
    
    );
  }
  postPippoArticoli(pippoArticolo:PippoArticolo): Observable<PippoArticolo>{
    return this.httpClient.post(this.url+this.postUrl, pippoArticolo, this.httpOptions).pipe(
      tap((pippo:PippoArticolo)=> console.log("PippoArticolo Created")),
      catchError(this.handleError<PippoArticolo>('postPippoArticolo', 'Error'))
    );
  }
  deletePippoArticoli(pippoArticolo:PippoArticolo): Observable<PippoArticolo>{
    const url = `${this.url}/${pippoArticolo.id}`;
    return this.httpClient.delete(url, this.httpOptions).pipe(
      tap(_=> console.log(`PippoArticolo with id: ${pippoArticolo.id} Deleted`)),
      catchError(this.handleError<any>('deletePippoArticoli', 'Error'))
    )
  }
  putPippoArticoli(pippoArticolo:PippoArticolo):Observable<PippoArticolo>{
    return this.httpClient.put(this.url, pippoArticolo, this.httpOptions).pipe(
      tap(_=> console.log(`PippoArticolo with id: ${pippoArticolo.id} Modified`)),
      catchError(this.handleError<any>('putPippoArticoli', 'Error'))
    )
  }
  getArticoloById(id:number):Observable<PippoArticolo>{
    const url = `${this.url}/${id}`;
    return this.httpClient.get(url, this.httpOptions).pipe(
      tap(_=> console.log(`PippoArticolo with id: ${id} Fetched`)),
      catchError(this.handleError<any>('getArticoloById', 'Error'))
    )
  }
  private handleError<T>(operation = 'operation', messageBody:string, result? :T){
    return ((error:any):Observable<T> =>{
      console.error(`${operation}: failed,\n message: ${messageBody} - returning ${result}`);
      return of(result as T);
    }
    );
  }
}

