import { Pokemon } from './Pokemon';
import { POKEMONS } from './mock-pokemon';
import {Component,OnInit} from '@angular/core';


//Hello World
@Component({
    selector: 'pokemon-app',
    templateUrl: './src/app.template.html',
})

export class AppComponent implements OnInit{
    pokemons: Pokemon[]=null;
    
    ngOnInit() {
        this.pokemons = POKEMONS;
    }
    
    selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez selectionné' + pokemon.name);
    }  
}


