<script>
  let items = ['svelte', 'vuejs', 'angular', 'react'];
</script>

<input type="text" />
<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
