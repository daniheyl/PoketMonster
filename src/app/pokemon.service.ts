import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon/pokemon';
import { PokemonList } from './pokemon/pokemon';
import { PokedexComponent } from './pokedex/pokedex.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  spriteurl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  protected pokemonList: Pokemon[] = [
    {
      id: 1,
      name: 'Bulbasaur',
      types: ['Grass', 'Poison'],
      region: 'Kanto',
      height: 7,
      weight: 69,
      description: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun\'s rays, the seed grows progressively larger.',
      sprite: this.spriteurl + '1.png',
      abilities: ['Overgrow', 'Chlorophyll'],
      stats: {
          hp: 45,
          attack: 49,
          defense: 49,
          specialAttack: 65,
          specialDefense: 65,
          speed: 45
      }
  },
  {
      id: 2,
      name: 'Ivysaur',
      types: ['Grass', 'Poison'],
      region: 'Kanto',
      height: 10,
      weight: 130,
      description: 'There is a bud on this Pokémon\'s back. To support its weight, Ivysaur\'s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it\'s a sign that the bud will bloom into a large flower soon.',
      sprite: this.spriteurl + '2.png',
      abilities: ['Overgrow', 'Chlorophyll'],
      stats: {
          hp: 60,
          attack: 62,
          defense: 63,
          specialAttack: 80,
          specialDefense: 80,
          speed: 60
      }
  },
  {
      id: 3,
      name: 'Venusaur',
      types: ['Grass', 'Poison'],
        region: 'Kanto',
      height: 20,
      weight: 1000,
      description: 'There is a large flower on Venusaur\'s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower\'s aroma soothes the emotions of people.',
      sprite: this.spriteurl + '3.png',
      abilities: ['Overgrow', 'Chlorophyll'],
      stats: {
          hp: 80,
          attack: 82,
          defense: 83,
          specialAttack: 100,
          specialDefense: 100,
          speed: 80
      }
  },
  {
      id: 4,
      name: 'Charmander',
      types: ['Fire'],
      region: 'Kanto',
      height: 6,
      weight: 85,
      description: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.',
      sprite: this.spriteurl + '4.png',
      abilities: ['Blaze', 'Solar Power'],
      stats: {
          hp: 39,
          attack: 52,
          defense: 43,
          specialAttack: 60,
          specialDefense: 50,
          speed: 65
      }
  },
  {
      id: 5,
      name: 'Charmeleon',
      types: ['Fire'],
        region: 'Kanto',
      height: 11,
      weight: 190,
      description: 'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.',
      sprite: this.spriteurl + '5.png',
      abilities: ['Blaze', 'Solar Power'],
      stats: {
          hp: 58,
          attack: 64,
          defense: 58,
          specialAttack: 80,
          specialDefense: 65,
          speed: 80
      }
  },
  {
      id: 6,
      name: 'Charizard',
      types: ['Fire', 'Flying'],
        region: 'Kanto',
      height: 17,
      weight: 905,
      description: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.',
      sprite: this.spriteurl + '6.png',
      abilities: ['Blaze', 'Solar Power'],
      stats: {
          hp: 78,
          attack: 84,
          defense: 78,
          specialAttack: 109,
          specialDefense: 85,
          speed: 100
      },
  },
  {
    id: 7,
    name: 'Squirtle',
    types: ['Water'],
    region: 'Kanto',
    height: 5,
    weight: 90,
    description: 'Your description here',
    sprite: this.spriteurl + '7.png',
    abilities: ['Torrent', 'Rain Dish'],
    stats: {
        hp: 44,
        attack: 48,
        defense: 65,
        specialAttack: 50,
        specialDefense: 64,
        speed: 43
    },
  },
  {
    id: 8,
    name: 'Wartortle',
    types: ['Water'],
    region: 'Kanto',
    height: 10,
    weight: 225,
    description: 'Your description here',
    sprite: this.spriteurl + '8.png',
    abilities: ['Torrent', 'Rain Dish'],
    stats: {
        hp: 59,
        attack: 63,
        defense: 80,
        specialAttack: 65,
        specialDefense: 80,
        speed: 58
    },
  },
  {
    id: 9,
    name: 'Blastoise',
    types: ['Water'],
    region: 'Kanto',
    height: 16,
    weight: 855,
    description: 'Your description here',
    sprite: this.spriteurl + '9.png',
    abilities: ['Torrent', 'Rain Dish'],
    stats: {
        hp: 79,
        attack: 83,
        defense: 100,
        specialAttack: 85,
        specialDefense: 105,
        speed: 78
    },
  }
  ];
  constructor() { }

  getAllPokemon(): Pokemon[] {
    return this.pokemonList;
  }

  getPokemonById(id: number): Pokemon | undefined {
    return this.pokemonList.find(pokemon => pokemon.id === id);
  }

}
