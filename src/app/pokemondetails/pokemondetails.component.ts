import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon/pokemon';
@Component({
  selector: 'app-pokemondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemondetails.component.html',
  styleUrl: './pokemondetails.component.css'
})
export class PokemondetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  pokemonService = inject(PokemonService);
  pokemon: Pokemon | undefined;
  
  pokemonId: number = 0;

  constructor() {
    const pokemonId = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemon = this.pokemonService.getPokemonById(pokemonId);
  }
  
  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}
