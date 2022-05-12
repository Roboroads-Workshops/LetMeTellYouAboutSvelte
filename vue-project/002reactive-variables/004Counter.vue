<script setup>
import { ref } from 'vue'

const count = ref(0);
//const state = reactive({ count: 0 });
</script>

<template>
  <div>
    Count is {{ count }}
  </div>
</template>
