<script lang="ts">
	let todo = ['Počisti sobo', 'Naredi domačo nalogo'];
	let done = ['Skuhaj kosilo'];

	let newTask: string = '';

	function addDone(index: number) {
		const temp = todo.splice(index, 1)[0];
		todo = [...todo];
		done = [...done, temp];
	}

	function removeDone(index: number) {
		const temp = done.splice(index, 1)[0];
		done = [...done];
		todo = [...todo, temp];
	}

	function addTodo() {
		if (newTask !== '') {
			todo = [...todo, newTask];
			newTask = '';
		}
	}
</script>

<div class="flex align-middle justify-center m-10">
	<div class="w-4/12 bg-lime-200 border-2 border-lime-300 rounded-xl flex flex-col gap-5 py-5">
		<div class="px-5 flex gap-2">
			<input class="bg-lime-50 flex-grow rounded-full p-1" type="text" bind:value={newTask} />
			<button
				class=" bg-lime-500 rounded-full px-5 text-white uppercase text-xs font-semibold"
				on:click={addTodo}>Dodaj zadolžitev</button
			>
		</div>
		<div class="px-5">
			<h2 class="text-2xl font-bold">Zadolžitve</h2>
			<ul class="">
				{#each todo as task, index}
					<li class="p-1">
						<button on:click={() => addDone(index)}>✅</button>
						<span class="font-light">{task}</span>
					</li>
				{/each}
			</ul>
			<ul>
				{#each done as task, index}
					<li class="line-through p-1">
						<button on:click={() => removeDone(index)}>❌</button>
						<span class="font-light">{task}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
