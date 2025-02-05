<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let title = '';
	let author = '';
	let description = '';

	function handleSubmit() {
		const newBook = {
			id: Date.now(),
			title,
			author,
			description,
			isFavorite: false
		};
		dispatch('addBook', newBook);
		title = '';
		author = '';
		description = '';
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="max-w-lg mx-auto">
	<div class="mb-4">
		<label for="title" class="block text-sm font-medium text-gray-700">Title</label>
		<input type="text" id="title" bind:value={title} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
	</div>
	
	<div class="mb-4">
		<label for="author" class="block text-sm font-medium text-gray-700">Author</label>
		<input type="text" id="author" bind:value={author} required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
	</div>
	
	<div class="mb-4">
		<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
		<textarea id="description" bind:value={description} rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
	</div>
	
	<button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
		Add Book
	</button>
</form>