import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from './pokemon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input() pokemon!: Pokemon;

  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}
