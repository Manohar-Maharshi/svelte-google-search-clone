<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import Results from './routes/Results.svelte';

	export let url = "";
</script>


<Router url="{url}">
  <div>
	<Route path="search/:term" let:params>
	  <Results params={params.term} />
	</Route>
	<Route path="images/:term" let:params>
	  <Results params="{params.term}" />
	</Route>
	<Route path="news/:term" let:params>
	  <Results params="{params.term}" />
	</Route>
    <Route path="/"><Home /></Route>
  </div>
</Router>
