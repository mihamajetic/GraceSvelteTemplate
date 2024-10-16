<script>
	export let name;
	export let image;
	export let description;
	let hidden = true;
</script>

<div
	class="shadow-xl bg-yellow-200 rounded-xl p-5 flex flex-col items-center border-4 border-yellow-800"
>
	<h3 class="text-2xl">{name}</h3>
	<img class="py-2 rounded-br-3xl" src={image} />
	<p class="">{description}</p>
	<button
		class="rounded-full bg-emerald-200 py-2 px-10 w-1/2"
		on:click={() => {
			hidden = !hidden;
		}}
	>
		Preberi {hidden ? 'več' : 'manj'}
	</button>
	<p class={'text-sm ' + (hidden ? 'hidden' : '')}>Tukaj je dodaten tekst.</p>
</div>
