<script>
  import { Link } from "svelte-routing";

  export let to = "";

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: "border-b-2 border-blue-500 text-blue-300 font-semibold text-blue-300" };
    }
    return {};
  }
</script>

<Link {to} {getProps}>
  <slot />
</Link>