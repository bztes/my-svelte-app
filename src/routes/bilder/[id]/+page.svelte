<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<img src="https://picsum.photos/id/{data.id}/400/300" alt="" />

<a href={data.previousId?.toString()}>Previous</a>
<a href={data.nextId?.toString()}>Next</a>
