<script>
  let searchText = '';
  let items = ['svelte', 'vuejs', 'angular', 'react'];

  $: searchItems = items
    .filter((item) => item.toUpperCase()
      .indexOf(searchText.toUpperCase()) !== -1
    );
</script>

<input type="text" bind:value={searchText} />
<ul>
  {#each searchItems as item}
    <li>{item}</li>
  {/each}
</ul>
