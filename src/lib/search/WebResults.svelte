<script>
	export let result;
	let count = 10;

</script>


<main>
	{#each result?.results.slice(0,count) as ite, index}		
		<div class="my-4">
			<a target="_blank" href={ite?.link} class=" group">
				<small class="opacity-70 line-clamp-1">{ite?.cite?.domain || ""}</small>
				<h2 class="group-hover:underline text-[#8ab4f8] text-xl line-clamp-1 leading-relaxed">{ite?.title}</h2>
				<p class="text-base line-clamp-2 text-sm opacity-70">{ite?.description}</p>
			</a>
		</div>
	{/each}
	<button class="focus:outline-none my-5" on:click={()=> count = count + 10}>
		<span class=" bg-gray-700 py-1.5 px-3 rounded-sm">Load More...</span>
	</button>
</main>