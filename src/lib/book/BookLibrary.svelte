<script>
	import { format } from 'svelte-i18n';
	import BookLibraryTabs from '$lib/book/BookLibraryTabs.svelte';
	import AllBooks from '$lib/book/AllBooks.svelte';
	import FavoriteBooks from '$lib/book/FavouriteBook.svelte';
	import AddBook from '$lib/book/AddBook.svelte';

	export let lang;
	export let books = [];
	let searchValue = '';

	let tabs = [
		{ text: 'All Books', component: AllBooks, clicked: false, textDisplay: $format('AllBooks') },
		{ text: 'Favorites', component: FavoriteBooks, clicked: false, textDisplay: $format('Favorites')},
		{ text: 'Add Book', component: AddBook, clicked: false, textDisplay: $format('AddBook')}
	];

	$: setTabsData($format);

	function setTabsData() {
		tabs = [
			{ text: 'All Books', component: AllBooks, clicked: false, textDisplay: $format('AllBooks') },
			{ text: 'Favorites', component: FavoriteBooks, clicked: false, textDisplay: $format('Favorites')},
			{ text: 'Add Book', component: AddBook, clicked: false, textDisplay: $format('AddBook') }
		];
	}
	let componentToRender = tabs[0];

	let activeTabText = tabs?.[0]?.text;

	function handleActiveTab(e) {
		activeTabText = e.detail;
		let [matchedObj] = activeTabText
			? tabs?.filter((tab) => tab?.text?.toLowerCase().includes(activeTabText?.toLowerCase()))
			: [componentToRender];
		componentToRender = matchedObj;
	}

	function handleAddBook(event) {
		books = [...books, event.detail];
	}

	function handleToggleFavorite(event) {
		const { bookId, isFavorite } = event.detail;
		books = books.map(book => 
			book.id === bookId ? {...book, isFavorite} : book
		);
	}
</script>

<div class="container mx-auto px-4">
	<h1 class="text-3xl font-bold mb-6">Book Library</h1>
	
	<div class="mb-4 sm:mb-6">
		<BookLibraryTabs bind:tabs on:handleActiveTab={handleActiveTab} {activeTabText} />
	</div>

	<svelte:component
		this={componentToRender.component}
		{searchValue}
		{books}
		on:addBook={handleAddBook}
		on:toggleFavorite={handleToggleFavorite}
		globalSelectedLang={lang}
	/>
</div>