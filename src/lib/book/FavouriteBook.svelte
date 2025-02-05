<script>
	import BookCard from './BookCard.svelte';
	export let books = [];
	
	$: favoriteBooks = books.filter(book => book.isFavorite);
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	{#each favoriteBooks as book (book.id)}
		<BookCard {book} on:toggleFavorite />
	{/each}
</div>

{#if favoriteBooks.length === 0}
	<p class="text-center text-gray-500 mt-8">No favorite books yet. Mark some books as favorites!</p>
{/if}