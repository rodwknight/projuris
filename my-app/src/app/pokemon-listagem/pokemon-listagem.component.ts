import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { FavoritoService } from '../favorito.service';

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

  constructor(private PokemonService: PokemonService, private FavoritoService: FavoritoService) { }

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

  favoritar(item:any) {
    this.FavoritoService.setData(item);
  }

  isFavorito(name:String) {
    if (this.FavoritoService.getData(name))
      return 'assets/images/star-fill.svg'
    else
      return 'assets/images/star.svg'
  }
}
