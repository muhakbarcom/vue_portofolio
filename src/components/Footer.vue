<template>
  ini footer <br />
  <button @click="increment">Increment+</button>
  <button @click="decrement">Decrement+</button>
  <br />
  <button @click="incrementWithAction">Increment+ with action</button>
  <button @click="decrementWithAction">Decrement+ with action</button>
  <br />
  <button @click="incrementByWithAction(5)">Increment+ by 5 with action</button>
  <!-- <button @click="reset">Reset</button> -->
  <br />
  <br />
  <br />
  <button @click="fetchPokemon('ditto')">Fetch Pokemon</button>
  <button @click="resetPokemon">Reset Pokemon</button>
</template>

<script setup>
import { useCounterStore } from '../stores/counter';
import { usePokemonStore } from '../stores/pokemon';

const counter = useCounterStore();
const pokemon = usePokemonStore();

const increment = () => {
  counter.$patch((state) => {
    state.count++;
  });
};

const decrement = () => {
  counter.$patch((state) => {
    state.count--;
  });
};

// reset
const reset = () => {
  counter.$reset();
};

const incrementWithAction = () => {
  counter.increment();
};

const decrementWithAction = () => {
  counter.decrement();
};

const incrementByWithAction = (number) => {
  counter.incrementBy(number);
};

const fetchPokemon = (name) => {
  pokemon.getPokemonDetails(name);
};

const resetPokemon = () => {
  pokemon.$reset();
};
</script>
