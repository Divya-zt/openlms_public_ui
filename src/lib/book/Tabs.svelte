<script>
	import { createEventDispatcher, onMount } from 'svelte';

	const tabs = [
		{ text: 'Fiction', textDisplay: 'Fiction',  },
		{ text: 'Non-Fiction', textDisplay: 'Non-Fiction', },
		{ text: 'Science', textDisplay: 'Science',  }
	];

	let activeTabText = tabs[0].text;
	const dispatch = createEventDispatcher();

	const books = {
		Fiction: [
			{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
			{ title: 'To Kill a Mockingbird', author: 'Harper Lee' }
		],
		'Non-Fiction': [
			{ title: 'Sapiens', author: 'Yuval Noah Harari' },
			{ title: 'Educated', author: 'Tara Westover' }
		],
		Science: [
			{ title: 'A Brief History of Time', author: 'Stephen Hawking' },
			{ title: 'The Selfish Gene', author: 'Richard Dawkins' }
		]
	};

	function handleTab(text) {
		activeTabText = text;
		dispatch('handleActiveTab', activeTabText);
	}
</script>

<div class="border-b border-gray-100 w-full">
	<nav class="flex flex-row flex-wrap">
		{#each tabs as tab}
			<button
				on:click={() => handleTab(tab.text)}
				class="whitespace-nowrap cursor-pointer border-b-2 px-4 py-3 text-sm text-darkGray hover:border-blue-100 hover:text-gray-700 {tab.text === activeTabText ? 'border-secondary font-semibold hover:border-secondary' : 'border-transparent'}"
			>
				<div class="flex items-center space-x-2">
					{#if tab.icon}
						<img src={tab.icon} alt="icon of {tab.textDisplay}" class="h-5 w-5 lg:h-6 lg:w-6" />
					{/if}
					<span>{tab.textDisplay}</span>
				</div>
			</button>
		{/each}
	</nav>
</div>

<div class="p-4">
	<h2 class="text-lg font-semibold">{activeTabText} Books</h2>
	<ul class="mt-2">
		{#each books[activeTabText] as book}
			<li class="py-2 border-b">
				<strong>{book.title}</strong> by {book.author}
			</li>
		{/each}
	</ul>
</div>
