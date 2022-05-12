<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div>
    Count is {{ count }}
    <button @click="()=>count.value++">+</button>
    <button @click="()=>count.value--">-</button>
  </div>
</template>
