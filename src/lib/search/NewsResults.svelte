<script>
	let count = 10;
	export let result;
</script>

<main>
	{#each result?.entries.slice(0,count) as ite, index}	
		<div class="my-5">		
			<a target="_blank" href={ite?.link} class=" group">
				<small class="opacity-50 line-clamp-1">{ite?.published} &bull; 	{ite?.source?.title}</small>
				<h2 class="group-hover:underline text-[#8ab4f8] text-xl line-clamp-1 leading-relaxed">{ite?.title}</h2>
				<p class="text-base line-clamp-2 text-sm opacity-70">{@html ite?.summary}</p>
			</a>
		</div>	
	{/each}
	
	<button class="focus:outline-none my-5" on:click={()=> count = count + 10}>
		<span class=" bg-gray-700 py-1.5 px-3 rounded-sm">Load More...</span>
	</button>
</main>