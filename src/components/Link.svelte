<script lang="ts">
  export let href: string;
  export let label: string;
</script>

<a
  class="m-1 sm:m-0 sm:mr-2 py-1 px-2 rounded-lg bg-neutral-300 dark:bg-neutral-700 dark:hv:hover:bg-neutral-600 hv:hover:bg-neutral-200"
  {href}
  aria-label={label}
  target="_blank"
  rel="noopener noreferrer"
>
  <slot />
</a>
