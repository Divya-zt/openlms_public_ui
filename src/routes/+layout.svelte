<!-- <script>
	import WormLoader from '$lib/Components/WormLoader.svelte';
	import '../app.css';
	import Header from '$lib/Components/Header.svelte';
	import CommonLayoutPattern from '$lib/Components/CommonLayoutPattern.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	import LineDrawing from '$lib/landingPage/LineDrawing.svelte';
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import Login from '$lib/Components/Login.svelte';

	
	let loading = true;
	let displayLoginPopUp = false;
	$: loading = !!$navigating;

	$: route = $page.url.pathname;
	export let data;

	onMount(() => {
		if (route === '/') {
			displayLoginPopUp = true;
		}
	});
</script>



<div class="">
	{#if loading}
		<WormLoader wormColor="#2E5ED4" />
	{/if}
	<Header lang={data.lang} bind:displayLoginPopUp />
	{#if displayLoginPopUp}
		<Login centersData={data?.centersData ?? []} bind:displayLoginPopUp />
	{/if}

	{#if route === '/'}
		<div class=" 2xl:m-auto">
			<slot />
		</div>
	{:else if route === '/login'}
		<slot />
	{:else}
		<div class=" 2xl:max-w-7xl 2xl:m-auto">
			<slot />
		</div>
	{/if}

	<Footer />
</div> -->


<script>
	import { onMount } from 'svelte';
	import Header from '$lib/Components/Header.svelte';
	import '../app.css';
	import Flashnews from '../lib/Components/flashnews.svelte';
	let timeLeft = '';
	
	onMount(() => {
	  const timer = setInterval(() => {
		const end = new Date('2025-03-01').getTime();
		const now = new Date().getTime();
		const distance = end - now;
		
		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		timeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;
	  }, 1000);
  
	  return () => clearInterval(timer);
	});
  </script>
  
  <div class="announcement">
	<!-- <span>🎨 Our next novel writing master class starts in {timeLeft}</span>
	<a href="/claim">Claim your spot →</a> -->
	<Flashnews/>
	</div>
	<Header/>
  
  <!-- <nav>
	<div class="nav-content">
	  <a href="/" class="logo">reedsy<span>prompts</span></a>
	  <div class="nav-links">
		<a href="/prompts">Prompts</a>
		<a href="/contests">Contests</a>
		<a href="/stories">Stories</a>
		<a href="/blog">Blog</a>
		<a href="/apps">Apps</a>
		<a href="/tools">Tools</a>
		<button class="login-btn">Log in</button>
	  </div>
	</div>
  </nav>
   -->
  <main>
	<slot name="breadcrumb" />
	<slot />
  </main>
  
  <style>
	.announcement {
	  background-color: #FFF9E6;
	  padding: 8px;
	  text-align: center;
	}
	.announcement a {
	  margin-left: 8px;
	  text-decoration: underline;
	}
	nav {
	  background-color: #0A2533;
	  color: white;
	  padding: 16px;
	}
	.nav-content {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  max-width: 1200px;
	  margin: 0 auto;
	}
	.logo {
	  font-size: 24px;
	  font-weight: bold;
	  color: white;
	  text-decoration: none;
	}
	.logo span {
	  color: #3498db;
	}
	.nav-links {
	  display: flex;
	  gap: 24px;
	  align-items: center;
	}
	.nav-links a {
	  color: white;
	  text-decoration: none;
	}
	.login-btn {
	  background-color: #3498db;
	  color: white;
	  border: none;
	  padding: 8px 16px;
	  border-radius: 4px;
	  cursor: pointer;
	}
	main {
	  max-width: 1200px;
	  margin: 0 auto;
	  padding: 16px;
	}
  </style>
  
  
