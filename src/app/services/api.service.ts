import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { delay, catchError} from 'rxjs/operators';
import { Result } from '../interfaces/Result.interface';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL:string = 'https://rickandmortyapi.com/api';

  constructor(private httpClient: HttpClient) { }

  getCharacters(page:number, query:string):Observable<Result>{

    const params = new HttpParams().set('page',page)
                                   .set('name',query);
    
    
    return this.httpClient.get<Result>(`${this.baseURL}/character/`,{params:params})
                          .pipe(catchError( (err) => throwError(err)))
                          .pipe(delay(1500));
  }

  getCharacter(id:number):Observable<Character>{
  
    return this.httpClient.get<Character>(`${this.baseURL}/character/${id}`)
                          .pipe(catchError( (err) => throwError(err) ));
  }


  searchCharacter(page:number,name:string):Observable<Result>{
    const params = new HttpParams().set('page',page)
                                   .set('name',name);

    return this.httpClient.get<Result>(`${this.baseURL}/character/`, {params:params})
                          .pipe(catchError( (err) => throwError(err)))
                          .pipe(delay(1500))
  }
}
