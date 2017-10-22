import {Pokemon} from './Pokemon';
import {POKEMONS} from './mock-pokemon';
import {Component, OnInit, } from '@angular/core';
import {Router} from '@angular/router';



@Component({
    selector: 'list-pokemon',
    templateUrl: './src/pokemon-list.template.html',
})

export class PokemonListComponent implements OnInit {
    pokemons: Pokemon[] = null;

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez selectionné' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}


