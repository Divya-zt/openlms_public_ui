<script>
	import { createEventDispatcher } from 'svelte';

	export let book;
	const dispatch = createEventDispatcher();

	function toggleFavorite() {
		dispatch('toggleFavorite', {
			bookId: book.id,
			isFavorite: !book.isFavorite
		});
	}
</script>

<div class="bg-white shadow-md rounded-lg overflow-hidden">
	<div class="p-4">
		<h2 class="font-bold text-xl mb-2">{book.title}</h2>
		<p class="text-gray-700 text-base mb-2">by {book.author}</p>
		<p class="text-gray-600 text-sm">{book.description}</p>
	</div>
	<div class="px-4 py-2 bg-gray-100 flex justify-between items-center">
		<button
			on:click={toggleFavorite}
			class="text-sm font-semibold {book.isFavorite ? 'text-yellow-500' : 'text-gray-500'}"
		>
			{book.isFavorite ? '★ Favorite' : '☆ Add to Favorites'}
		</button>
	</div>
</div>