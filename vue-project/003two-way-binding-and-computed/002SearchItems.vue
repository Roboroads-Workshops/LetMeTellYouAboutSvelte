<script setup>
import {reactive} from 'vue';

const items = reactive(['svelte','vuejs','angular','react']);
</script>

<template>
  <div>
    <input type="text" />
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </div>
</template>
