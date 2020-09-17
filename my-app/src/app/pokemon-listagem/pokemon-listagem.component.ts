import { Component, OnInit } from '@angular/core';
import { PokemonService} from '../pokemon.service';
import { Pokemons } from '../models/pokemon.model';
@Component({
  selector: 'app-pokemon-listagem',
  templateUrl: './pokemon-listagem.component.html',
  styleUrls: ['./pokemon-listagem.component.css']
})
export class PokemonListagemComponent implements OnInit {

  pokemons: any;
  offset: number;
  previous: any;
  next: any;

  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(offset:number = 0){
    this.PokemonService.listar(offset).subscribe(dados => {
      this.pokemons = dados.results;
      this.offset = offset;
      this.previous = dados.previous;
      this.next = dados.next;
    });
  }
}
