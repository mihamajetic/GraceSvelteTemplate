<script lang="ts">
	// najprej naredimo nov tip
	type Task = {
		text: string;
		done: boolean;
	};

	//naredimo prazen array, sami morajo potem dodat tri nove objekte
	// naredijo for loop kjer se bo samo izpisala vsebina

	let tasks: Task[] = [
		{
			text: 'Počisti sobo',
			done: true
		},
		{
			text: 'Skuha kosilo',
			done: false
		},
		{
			text: 'Posesa sobo',
			done: false
		}
	];
	let newTask: string = '';

	function addTodo() {
		if (newTask !== '') {
			tasks = [
				...tasks,
				{
					text: newTask,
					done: false
				}
			];
			newTask = '';
		}
	}

	function removeTodo(idx: number) {
		tasks = tasks.filter((value, index) => i !== idx);
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
				{#each tasks as task, index}
					<li class="p-1">
						<button on:click={() => (task.done = !task.done)}>{task.done ? '✅' : '❌'}</button>
						<span class="font-light {!task.done ? 'line-through' : ''}">{task.text}</span>
						<button on:click={() => removeTodo(index)}>Odstrani</button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
