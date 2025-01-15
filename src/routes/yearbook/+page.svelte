<script lang="ts">
	import { onMount } from 'svelte';
	import FilterBar from './FilterBar.svelte';
	import AnimalList from './AnimalList.svelte';
	import { animals, type Animal } from './animals';

	let filteredAnimals: Animal[] = [];

	// onMount(() => {
	// 	filteredAnimals = animals;
	// });

	function filterByClass(animalClass: string) {
		filteredAnimals = animalClass
			? animals.filter((animal) => animal.class === animalClass)
			: animals;
	}

	function searchByName(name: string) {
		filteredAnimals = name
			? animals.filter((animal) => animal.name.toLowerCase().includes(name.toLowerCase()))
			: animals;
	}
</script>

<div class="container mx-auto p-4">
	<h1 class="text-2xl font-bold mb-4">Animal Yearbook</h1>
	<FilterBar {filterByClass} {searchByName} {animals} />
	<AnimalList animals={filteredAnimals} />
</div>
