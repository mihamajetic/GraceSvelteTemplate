<script lang="ts">
	let besedilo = '';
	let steviloCrk = 0;
	let najvecjCrk = 300;
	let samoglasniki = ['a', 'e', 'i', 'o', 'u'];
	let emojiFilter = false;
	let emojis: { [key: string]: string } = {
		kača: '🐍',
		zmaj: '🐉',
		kolo: '🚲',
		hiša: '🏠',
		drevo: '🌲',
		vesel: '😃'
	};

	// Random Tailwind color function
	function nakljucnaBarva() {
		let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
		let size = [500, 600, 700, 800, 900];
		return (
			'text-' +
			colors[Math.floor(Math.random() * colors.length)] +
			'-' +
			size[Math.floor(Math.random() * size.length)]
		);
	}

	// Replace word with emoji if emojiFilter is enabled
	function zamenjajEmoji(beseda: string) {
		return emojiFilter ? emojis[beseda.toLowerCase()] || beseda : beseda;
	}

	// Format text based on action
	function urediBesedilo(f: string) {
		switch (f) {
			case 'upper':
				besedilo = besedilo.toUpperCase();
				break;
			case 'lower':
				besedilo = besedilo.toLowerCase();
				break;
		}
	}

	$: {
		steviloCrk = besedilo.length;
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen gap-10">
	<h3 class="text-green-300 text-4xl">Besedilko</h3>
	<textarea
		bind:value={besedilo}
		rows="4"
		class="text-gray-900 rounded-lg border-2 border-green-300 focus:outline-none w-6/12 p-4"
		placeholder="Write your thoughts here..."
	></textarea>
	<div class="grid grid-cols-4 gap-2 items-center">
		<button
			on:click={() => urediBesedilo('upper')}
			class="uppercase bg-green-300 rounded-full p-2 text-white"
		>
			Velike črke
		</button>
		<button
			on:click={() => urediBesedilo('lower')}
			class="lowercase bg-green-300 rounded-full p-2 text-white"
		>
			Male črke
		</button>
		<button
			on:click={() => (emojiFilter = !emojiFilter)}
			class="{emojiFilter
				? 'bg-green-300 text-white'
				: 'bg-white text-green-300'} rounded-full p-2 text-white"
		>
			Emoji filter
		</button>
		<p class="text-green-700">{steviloCrk}/{najvecjCrk}</p>
	</div>

	<div class="flex flex-wrap gap-1 w-6/12">
		{#each besedilo.split(' ') as beseda}
			<span class={nakljucnaBarva()}>
				{#if emojiFilter}
					{zamenjajEmoji(beseda)}
				{:else}
					{beseda}
				{/if}
			</span>
		{/each}
	</div>
</div>
