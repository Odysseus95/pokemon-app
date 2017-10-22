import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import {PageNotFoundComponent} from './page-not-found.component';
import { PokemonsModule } from './pokemon/pokemons.module'


@NgModule({
  imports:      [ BrowserModule,PokemonsModule, AppRoutingModule ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
