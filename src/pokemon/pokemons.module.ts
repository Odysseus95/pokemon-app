import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { PokemonListComponent }   from './pokemon-list.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { ShadowCardDirective }    from './shadow-card.directive';
import { PokemonTypeColorPipe }   from './pokemon-type-color.pipe';

import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  declarations: [
    PokemonListComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonFormComponent,
    ShadowCardDirective,
    PokemonTypeColorPipe
  ],
  providers: [PokemonsService]
})
export class PokemonsModule {}