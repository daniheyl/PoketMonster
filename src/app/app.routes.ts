import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';

export const routes: Routes = [
    {
        path: '',
        component: PokedexComponent,
        title: 'Pokedex'
    },
    {
        path: 'pokemondetails/:id',
        component: PokemondetailsComponent,
        title: 'Pokemon Details'
    },


];
