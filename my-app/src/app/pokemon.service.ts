import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemons } from './../app/models/pokemon.model';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  public listar(offset:number = 0):Observable<Pokemons> {
    return this.http.get<Pokemons>(`${this.pokeUrl}?offset=${offset}&limit=10`);
  }
}
