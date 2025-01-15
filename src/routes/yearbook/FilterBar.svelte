<script lang="ts">
	import type { Animal } from './animals';

	export let filterByClass: (animalClass: string) => void;
	export let searchByName: (name: string) => void;
	export let animals: Animal[];

	let animalClass: string = '';
	let searchName: string = '';
	let classOptions: string[] = [];

	$: classOptions = Array.from(new Set(animals.map((animal) => animal.class)));

	$: {
		filterByClass(animalClass);
	}

	$: {
		searchByName(searchName);
	}
</script>

<div class="mb-4 space-y-4">
	<div>
		<label for="class" class="block text-sm font-medium">Filter by class:</label>
		<select id="class" bind:value={animalClass} class="border rounded-md p-2 w-full">
			<option value="">All</option>
			{#each classOptions as option}
				<option value={option}>{option}</option>
			{/each}
		</select>
	</div>

	<div>
		<label for="search" class="block text-sm font-medium">Search by name:</label>
		<input
			type="text"
			id="search"
			placeholder="Search by name"
			bind:value={searchName}
			class="border rounded-md p-2 w-full"
		/>
	</div>
</div>
