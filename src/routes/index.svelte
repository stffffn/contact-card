<script lang="ts">
  import Card from '../components/Card.svelte';
  import Link from '../components/Link.svelte';
  import ProfilePic from '../components/ProfilePic.svelte';
</script>

<Card>
  <ProfilePic
    image={{
      src: 'images/me.png',
      alt: 'Black and white portrait of Steffen Weitz',
      width: '500',
      height: '500',
    }}
  />
  <div
    class="flex flex-col justify-between sm:p-6 pt-6 text-center sm:text-left"
  >
    <div class="mb-10 sm:mb-0">
      <h1 class="text-2xl font-semibold">Steffen Weitz</h1>
      <h2 class="text-neutral-500 dark:text-neutral-400 mb-6">
        BA, Interactive Media Design
      </h2>
      <p>
        Currently: Frontend Developer <span class="inline-block"
          >@ <a
            class="text-blue-600 dark:text-blue-400 hv:hover:underline"
            href="https://www.bevelop.de/"
            aria-label="Bevelop Homepage"
            target="_blank"
            rel="noopener noreferrer">bevelop</a
          ></span
        >
      </p>
    </div>

    <div class="flex flex-wrap flex-row justify-center sm:justify-start">
      <Link href="mailto:steffen@weitz.contact" label="Email">Email</Link>
      <Link href="https://www.linkedin.com/in/steffenweitz/" label="LinkedIn"
        >LinkedIn</Link
      >
      <Link href="https://www.github.com/stffffn" label="GitHub">GitHub</Link>
    </div>
  </div>
</Card>
