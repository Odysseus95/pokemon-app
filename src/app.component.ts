import { Pokemon } from './Pokemon';
import { POKEMONS } from './mock-pokemon';
import {Component,OnInit} from '@angular/core';


//Hello World
@Component({
    selector: 'pokemon-app',
    template: '<h1>Pokémons<\h1>',
})

export class AppComponent implements OnInit{
    private pokemons: Pokemon[]=null;
    
    ngOnInit() {
        this.pokemons = POKEMONS;
    }
    
    selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez selectionné' + pokemon.name);
    }  
}


