<script>
	import NavBar from '$lib/home/NavBar.svelte'
	import SearchBar from '$lib/home/SearchBar.svelte'
	import Footer from '$lib/home/Footer.svelte'
</script>
<main class="w-full h-screen flex flex-col items-center justify-between">
	<NavBar />
	<main class="flex-1">
		<SearchBar />
	</main>	
	<Footer />
</main>
