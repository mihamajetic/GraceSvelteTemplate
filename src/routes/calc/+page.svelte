<script lang="ts">
	type Operator = '+' | '-' | '*' | '/';
	let num1 = 0;
	let num2 = 0;
	let op: Operator = '+';
	let result = 0;
	$: {
		if (op === '+') result = num1 + num2;
		else if (op === '-') result = num1 - num2;
		else if (op === '*') result = num1 * num2;
		else if (op === '/') result = num1 / num2;
	}

	function randomNumbers() {
		num1 = Math.floor(Math.random() * 10000);
		num2 = Math.floor(Math.random() * 10000);
	}
</script>

<div class="w-full h-screen flex flex-col gap-10 justify-center">
	<div class="flex justify-center gap-10">
		<input
			bind:value={num1}
			type="number"
			class="border-2 border-black p-2 rounded-md"
			placeholder="Število 1"
		/>
		<input
			bind:value={num2}
			type="number"
			class="border-2 border-black p-2 rounded-md"
			placeholder="Število 2"
		/>
		<select bind:value={op}>
			<option value="+">+</option>
			<option value="-">-</option>
			<option value="*">*</option>
			<option value="/">/</option>
		</select>
		<button on:click={randomNumbers}>Naljučno</button>
	</div>
	<div class="flex justify-center gap-10">
		<p class=" text-8xl">{num1} {op} {num2} = {result}</p>
	</div>
</div>
