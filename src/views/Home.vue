<template>
  <div>
    <ProductLines msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import ProductLines from '@/components/ProductLines.vue';

export default Vue.extend({
  name: 'home',
  components: {
    ProductLines,
  },
});

</script>
