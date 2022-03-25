<script lang="ts">
  const title = 'Steffen Weitz';
  const author = 'Steffen Weitz';
  const description = 'Contact card page of Steffen Weitz';
  const url = 'https://weitz.contact/';
</script>

<svelte:head>
  <!-- Title -->
  <title>{title}</title>
  <meta name="og:title" content={title} />
  <meta name="twitter:title" content={title} />

  <!-- Author -->
  <meta name="author" content={author} />

  <!-- Description -->
  <meta name="description" content={description} />
  <meta name="og:description" content={description} />
  <meta name="twitter:description" content={description} />

  <!-- URL -->
  <link key="canonical" rel="canonical" href={url} />
  <meta name="og:url" content={url} />
  <meta name="twitter:url" content={url} />

  <!-- General -->
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta httpEquiv="Content-Language" content="en-US" />
  <meta charset="utf-8" />
  <meta name="og:type" content="website" />
  <link rel="manifest" href="favicons/manifest.json" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary" />

  <!-- General favicons -->
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/favicons/favicon-32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="128x128"
    href="/favicons/favicon-128.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="/favicons/favicon-192.png"
  />

  <!-- iOS favicons -->
  <link
    rel="apple-touch-icon"
    type="image/png"
    sizes="152x152"
    href="/favicons/favicon-152.png"
  />
  <link
    rel="apple-touch-icon"
    type="image/png"
    sizes="167x167"
    href="/favicons/favicon-167.png"
  />
  <link
    rel="apple-touch-icon"
    type="image/png"
    sizes="180x180"
    href="/favicons/favicon-180.png"
  />

  <!-- Android favicons -->
  <link
    rel="shortcut icon"
    type="image/png"
    sizes="196x196"
    href="/favicons/favicon-196.png"
  />
</svelte:head>
