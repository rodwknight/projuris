import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FavoritoService } from './favorito.service';
import { PokemonListagemComponent } from './pokemon-listagem/pokemon-listagem.component'


@NgModule({
  declarations: [
    AppComponent,
    PokemonListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [PokemonService, FavoritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
