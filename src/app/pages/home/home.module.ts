import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-list/components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon-list/services/pokemon.service';
import { FirstLetterUppercasePipe } from './pokemon-list/pipes/first-letter-uppercase.pipe';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    FirstLetterUppercasePipe,
  ],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
  providers: [PokemonService],
})
export class HomeModule {}