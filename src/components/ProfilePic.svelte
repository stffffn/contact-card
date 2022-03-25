<script lang="ts">
  export let image: { src: string; alt: string; width: string; height: string };
</script>

<img
  src={image.src}
  alt={image.alt}
  width={image.width}
  height={image.height}
  class="max-h-60 w-auto mx-auto sm:mx-0 rounded-full sm:rounded-none"
/>
