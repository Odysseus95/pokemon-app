import {Pokemon} from './Pokemon';
import {POKEMONS} from './mock-pokemon';
import {Component, OnInit, } from '@angular/core';
import {Router} from '@angular/router';
import {PokemonsService} from './pokemons.service';



@Component({
    selector: 'list-pokemon',
    templateUrl: './src/pokemon/pokemon-list.template.html',
})

export class PokemonListComponent implements OnInit {
    pokemons: Pokemon[] = null;

    constructor(private router: Router, private pokemonService: PokemonsService) {

    }

    ngOnInit() {
        this.pokemons = this.pokemonService.getPokemons();
    }

    selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez selectionné' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}


