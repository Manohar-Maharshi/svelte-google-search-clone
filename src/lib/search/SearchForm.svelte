<script>
	import { navigate } from "svelte-routing";
	import { Link} from "svelte-routing";

	import { onMount } from 'svelte';
	export let params = "";
	import NavLink from '$lib/NavLink.svelte'
	import {slugify,titleize} from '$store/utils'

	let term = "";

  function onSubmit() {
  	if(term.trim() != ""){	
      navigate(`/search/${slugify(term)}`);
  	}else{
  		return
  	}
  }

  onMount(()=>{
  	term = titleize(params)
  })


</script>
<div class="sm:hidden container mx-auto w-full px-4 flex items-center justify-center mt-4 -mb-3">
	<Link to="/">	
		<img height="30" width="92" class="mt-1" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="google logo">
	</Link>
</div>
<div class="container mx-auto px-4 md:px-0 w-full h-full flex items-start w-full h-full justify-between pt-8">
	<div class="hidden sm:block sm:mr-[3rem]">
		<Link to="/">	
			<img height="30" width="92" class="mt-1" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="google logo">
		</Link>
	</div>
	 <div class="flex-1 md:ml-14">
	 	<form on:submit|preventDefault={onSubmit} class="max-w-2xl -mt-1 px-3 flex items-center justify-between bg-[#303134] rounded-full">
			<input bind:value={term} class="py-[0.7rem] text-white px-2 w-full bg-transparent focus:outline-none" type="text">
			<div class="flex items-center space-x-3 pr-2">
				<div class="h-5 w-0.5 border-l border-gray-400" />
				<svg class="h-5 w-5" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-80 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
				  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
				</svg>
			</div>
		</form>
		<div class="mt-6">
			<div class="flex items-center space-x-3">
				<NavLink to={`search/${params}`}>
					<div class="text-sm">
						<div class="px-3 pb-1.5 inline-flex items-center space-x-1 text-center">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
							  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
							</svg>
							<span>All</span>
						</div>
					</div>
				</NavLink>
				<NavLink to={`images/${params}`}>
					<div class="text-sm">
						<div class="px-3 pb-1.5 inline-flex items-center space-x-1 text-center">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
							  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
							</svg>
							<span>Images</span>
						</div>
					</div>
				</NavLink>
				<NavLink to={`news/${params}`}>
					<div class="text-sm">
						<div class="px-3 pb-1.5 inline-flex items-center space-x-1 text-center">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
							  <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
							  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
							</svg>
							<span>News</span>
						</div>
					</div>
				</NavLink>
			</div>
		</div>	
	</div>
	<div class="sm:ml-[3rem] hidden sm:flex flex items-center space-x-5 text-xs">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
		</svg>
		<p class="w-9 h-9 rounded-full bg-gray-400"></p>
	</div>
</div>