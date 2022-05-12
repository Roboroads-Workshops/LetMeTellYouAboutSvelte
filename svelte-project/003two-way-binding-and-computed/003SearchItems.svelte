<script>
  let searchText = '';
  let items = ['svelte', 'vuejs', 'angular', 'react'];
</script>

<input type="text" bind:value={searchText} />
<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
