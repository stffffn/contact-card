<script lang="ts">
  import '../app.css';
  import Head from '../components/Head.svelte';
  import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
  import ThemeSwitch from '../components/ThemeSwitch.svelte';
</script>

<Head />

<SvelteTheme attribute="class" />

<ThemeSwitch />

<main
  class="h-screen flex flex-col justify-center items-center bg-neutral-100 dark:bg-neutral-900"
>
  <div class="w-full py-10 px-5 overflow-scroll">
    <slot />
  </div>
</main>
