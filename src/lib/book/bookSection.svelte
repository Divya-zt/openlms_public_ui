<script>
	import BookLibrary from '$lib/book/BookLibrary.svelte';
	import { _ } from 'svelte-i18n';

	let books = [
		{ id: 1, title: "1984", author: "George Orwell", description: "A dystopian novel set in a totalitarian society.", isFavorite: false },
		{ id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", description: "A novel about racial injustice in the American South.", isFavorite: true },
		// Add more books as needed
	];

	let lang = 'en'; // or whatever language you're using
</script>

<BookLibrary {books} {lang} />