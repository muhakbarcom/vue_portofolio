import { defineStore } from 'pinia';

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    // pokemons: [],
    // pokemon: {},
    // loading: false,
    pokemonDetails: {},
  }),
  getters: {
    // getPokemons: (state) => state.pokemons,
    // getPokemon: (state) => state.pokemon,
    // getLoading: (state) => state.loading,
    // getPokemonDetails: (state) => state.pokemonDetails,
  },
  actions: {
    async getPokemonDetails(name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      this.pokemonDetails = data;
    },
    // async fetchPokemons() {
    //   this.loading = true;
    //   const response = await fetch(
    //     'https://pokeapi.co/api/v2/pokemon?limit=10'
    //   );
    //   const data = await response.json();
    //   this.pokemons = data.results;
    //   this.loading = false;
    // },
    // async fetchPokemon(name) {
    //   this.loading = true;
    //   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    //   const data = await response.json();
    //   this.pokemon = data;
    //   this.loading = false;
    // },
  },
});
