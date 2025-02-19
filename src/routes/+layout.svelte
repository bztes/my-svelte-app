<script lang="ts">
  import Menu from '$lib/components/Menu.svelte';
  import type { Snippet } from 'svelte';
  import './global.css';

  interface Props {
    children: Snippet;
  }

  const { children }: Props = $props();
</script>

<div class="page">
  <header>
    <Menu />
  </header>
  <main>
    {@render children()}
  </main>
  <footer>Footer</footer>
</div>

<style>
  .page {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  header {
    background-color: aqua;
  }

  main {
    background-color: honeydew;
  }

  footer {
    background-color: aquamarine;
  }
</style>
