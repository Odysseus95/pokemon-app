import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { PokemonListComponent } from './pokemon-list.component';
import { DetailPokemonComponent } from './detail-pokemon.component';

import { ShadowCardDirective } from './shadow-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import {PageNotFoundComponent} from './page-not-found.component';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [
    AppComponent,
    ShadowCardDirective,
    PokemonTypeColorPipe,
    PokemonListComponent,
    DetailPokemonComponent,
    PageNotFoundComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
