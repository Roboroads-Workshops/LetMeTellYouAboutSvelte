<script>
  import {isLoggedIn, userName} from './globalState.js';
</script>

{#if $isLoggedIn}
  Welcome back, {$userName}!
  Change name: <input type="text" bind:value={$userName} />
{:else}
  You are not logged in.
  <button on:click={() => $isLoggedIn = true}>Log in</button>
{/if}
