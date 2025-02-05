<script>
	import BookCard from './BookCard.svelte';
	export let books = [];
	export let searchValue = '';
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	{#each books as book (book.id)}
		<BookCard {book} on:toggleFavorite />
	{/each}
</div>

{#if books.length === 0}
	<p class="text-center text-gray-500 mt-8">No books found. Add some books to your library!</p>
{/if}