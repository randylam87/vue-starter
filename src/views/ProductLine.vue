<template>
  <div>
    <ProductLine />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import ProductLine from '@/components/ProductLine.vue';

export default Vue.extend({
  name: 'home',
  components: {
    ProductLine,
  },
});

</script>
