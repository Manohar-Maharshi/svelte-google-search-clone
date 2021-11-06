<script>
	import Masonry from '$lib/Masonry.svelte'

	export let result;
</script>

<main>
	<Masonry gridGap={'0.75rem'} items={result?.image_results} >				
		{#each result?.image_results as ite, index}		
			<a target="_blank" href={ite?.link?.href} class="bg-green-400 border border-blue-400 p-1 ">
				<img class="w-full h-full object-cover" src={ite?.image?.src} alt={ite?.image?.src || 'goo'}>
			</a>
		{/each}
	</Masonry>
</main>