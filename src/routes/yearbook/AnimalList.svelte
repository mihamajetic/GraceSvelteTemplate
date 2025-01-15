<script lang="ts">
	import AnimalCard from './AnimalCard.svelte';
	import type { Animal } from './animals';

	export let animals: Animal[] = [];
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
	{#each animals as animal}
		<AnimalCard {animal} />
	{/each}
</div>
