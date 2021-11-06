<script>
  import { navigate } from "svelte-routing";

  let term = "";

  function onSubmit() {
  	if(term.trim() != ""){	
      navigate(`/search/${term}`);
  	}else{
  		return
  	}
  }
</script>



<div class="w-full  flex flex-col items-center justify-center my-5">
	<img class="w-[10rem] md:w-[17rem] mb-11" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="google logo">
 	<form on:submit|preventDefault={onSubmit} class="flex flex-col items-center justify-between">
 		<div class="px-3 flex items-center justify-between border border-gray-400 rounded-full">
 			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-80" viewBox="0 0 20 20" fill="currentColor">
			  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
			</svg>
			<input bind:value={term} class="py-2 w-full sm:py-2.5 px-2 sm:w-[33rem] bg-transparent focus:outline-none" type="text">
			<svg class="h-6 w-6" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc04" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
 		</div>
 		<button type="submit" disabled={!term} class="text-[14px] mt-10 focus:outline-none bg-gray-700 shadow py-2 px-4 rounded">Google Search</button>
 	</form>
</div>