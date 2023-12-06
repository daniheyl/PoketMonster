import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { Pokemon, PokemonList } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  PokemonList: Pokemon[] = [];
  PokemonService: PokemonService = inject(PokemonService);
  
  constructor() { 
    this.PokemonList = this.PokemonService.getAllPokemon();
  }

  ngOnInit(): void {
  }


}
