import {Injectable} from '@angular/core';
import {Pokemon} from './Pokemon';
import {POKEMONS} from './mock-pokemon';

@Injectable()
export class PokemonsService {

    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    getPokemon(id: number): Pokemon {
        let pokemons: Pokemon[] = this.getPokemons();
        for (let i = 0; i < pokemons.length; i++) {
            if (pokemons[i].id === id)
                return pokemons[i];
        }
    }

    // types de pokémons possible
    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }

}