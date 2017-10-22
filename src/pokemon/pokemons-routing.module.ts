import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PokemonListComponent} from './pokemon-list.component';
import {DetailPokemonComponent} from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';

// routes definition
const pokemonsRoutes: Routes = [
    {path: 'pokemons', component: PokemonListComponent},
    {path: 'pokemon/edit/:id', component: EditPokemonComponent},
    {path: 'pokemon/:id', component: DetailPokemonComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule {}