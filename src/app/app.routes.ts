import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        component: PokedexComponent,
        title: 'Pokedex'
    },
    {
        path: 'pokemondetails/:id',
        component: PokemondetailsComponent,
        title: 'Pokemon Details',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }


];
