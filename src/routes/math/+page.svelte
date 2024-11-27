<script lang="ts">
	let num = 0;
	let even = true;
	let sum = 0;
	let listDivisor: number[] = [];
	let perfect = false;

	function isEven(x: number) {
		if (x % 2 == 0) return true;
		return false;
	}

	function getDivisors(num: number) {
		let divisors: number[] = [];
		if (num == 1) return [1];
		for (let i = 1; i < num; i++) {
			if (num % i === 0) divisors.push(i);
		}

		return divisors;
	}

	function sumDivisors(num: number) {
		let sum: number = 0;
		for (const i of listDivisor) {
			sum += i;
		}
		return sum;
	}

	function isPerfect(num: number) {
		if (num == sumDivisors(num)) return true;
		return false;
	}

	$: {
		even = isEven(num);
		listDivisor = getDivisors(num);
		sum = sumDivisors(num);
		perfect = isPerfect(num);
	}
</script>

<div class="flex flex-col items-center justify-center min-h-screen gap-10">
	<div class="w-1/2">
		<input
			class="border-violet-500 border-4 shadow-lg rounded-full text-center text-6xl p-2"
			bind:value={num}
			type="number"
			min="0"
		/>
	</div>
	<div class="grid grid-cols-4 gap-6">
		<div class="p-2 rounded-lg bg-violet-500 text-white shadow-lg">
			<p class="text-4xl">Število je:</p>
			<p class="text-8xl">{even ? 'sodo' : 'liho'}</p>
		</div>
		<div class="p-2 rounded-lg bg-violet-500 text-white shadow-lg">
			<p class="text-4xl">Seznam deljiteljev:</p>
			<ul class="flex flex-wrap gap-2">
				{#each listDivisor as deljitelj}
					<li class="bg-white text-violet-500 w-fit rounded-md inline p-1">{deljitelj}</li>
				{:else}
					<p>Ni deljiteljev.</p>
				{/each}
			</ul>
		</div>
		<div class="p-2 rounded-lg bg-violet-500 text-white shadow-lg">
			<p class="text-4xl">Seštevek deljiteljev:</p>
			<p class="text-8xl">{sum}</p>
		</div>
		<div class="p-2 rounded-lg bg-violet-500 text-white shadow-lg">
			<p class="text-4xl">Popolno število:</p>
			<p class="text-8xl">{perfect ? '✅' : '❌'}</p>
		</div>
	</div>
</div>
