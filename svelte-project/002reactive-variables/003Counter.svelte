<script>
    let count = 0;

    function increment() {
      count++;
    }

    function decrement() {
      count--;
    }
</script>

Count is {count}
<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
