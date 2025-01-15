<script>
	export let animal;
</script>

<div class="border rounded-lg p-4 shadow-md">
	<img src={animal.photo} alt={animal.name} class="w-full h-48 object-cover rounded-md" />
	<h2 class="text-lg font-bold mt-2">{animal.name}</h2>
	<p class="italic">{animal.latinName}</p>
	<p><strong>Weight:</strong> {animal.weight}</p>
	<p><strong>Lifespan:</strong> {animal.lifespan}</p>
</div>
