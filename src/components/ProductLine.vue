<template>
  <div>
    <p>Product Line: {{ $route.params.productLine }}</p>
    <img :src='currentProductLine.image' />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import productLines from '@/data/productLines';

export default Vue.extend({
  data() {
    return {
      currentProductLine: {},
    };
  },
  created() {
    if (!this.$route.params.productLine) {
      console.log('no params');
      this.$router.push('/');
      return;
    }
    const { productLines: lines } = productLines;
    const [currentProductLine] = lines.filter(
      line => line.name === this.$route.params.productLine,
    );
    this.currentProductLine = currentProductLine;
  },
});
</script>

<style scoped>
</style>
