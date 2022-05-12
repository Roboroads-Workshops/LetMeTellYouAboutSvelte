<script setup>
import {computed, reactive, ref} from 'vue';

const items = reactive(['svelte','vuejs','angular','react']);
const searchText = ref('');
const searchItems = computed(() => {
  return items
    .filter((item) => item.toUpperCase()
      .indexOf(searchText.value.toUpperCase()) !== -1
    );
});
</script>

<template>
  <div>
    <input type="text" v-model="searchText" />
    <ul>
      <li v-for="item in searchItems">{{ item }}</li>
    </ul>
  </div>
</template>
