<script>
	import SearchForm from '$lib/search/SearchForm.svelte'
	import WebResults from '$lib/search/WebResults.svelte'
	import ImgResults from '$lib/search/ImgResults.svelte'
	import NewsResults from '$lib/search/NewsResults.svelte'
	import Spinner from '$lib/Spinner.svelte'

	import { fetchWebResults,fetchImageResults,fetchNewsResults } from '$store/utils'

	export let params = "";
</script>


<nav>
	<div class="border-b border-[#3c4043]">
 	 	<SearchForm {params} />
	</div>
	<div>
		{#if window.location.href.indexOf("/search/") > -1}
			<div class="flex flex-col px-4 sm:ml-[14rem] my-3 sm:max-w-2xl">
				{#await fetchWebResults(params)}
					<div class="flex items-center justify-center w-full">
						<Spinner />
					</div>
				{:then result}	
					<WebResults {result} />
				{/await}
			</div>
		{:else if window.location.href.indexOf("/images/") > -1}
			<div class="container mx-auto my-3">	
				{#await fetchImageResults(params)}
					<div class="flex items-center justify-center w-full">
						<Spinner />
					</div>			
				{:then result}
					<ImgResults {result}/>
				{/await}		
			</div>
		{:else if window.location.href.indexOf("/news/") > -1}
			<div class="flex flex-col px-4  sm:ml-[14rem] my-3 sm:max-w-2xl">
				{#await fetchNewsResults(params)}
					<div class="flex items-center justify-center w-full">
						<Spinner />
					</div>
				{:then result}
					<NewsResults {result}/>
				{/await}
			</div>
		{/if}
	</div>
</nav>