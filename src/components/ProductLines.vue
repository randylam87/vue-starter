<template>
  <div class="grid">
    <div
        v-for="productLine in productLines"
        :key="productLine.id"
        @click='goToProductLine(productLine.name)'
    >
      <div class="module" :style="{ backgroundImage: 'url(' + productLine.image + ')' }">
        <div class="product-text-container">
          <span>{{ productLine.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import productLines from '@/data/productLines';

export default Vue.extend({
  data() {
    return {
      productLines: productLines.productLines,
    };
  },
  methods: {
    goToProductLine(productLine: string) {
      this.$router.push({ name: 'productLine', params: { productLine } });
    },
  },
});
</script>

<style scoped>
body {
  margin: 0 auto;
  max-width: 56em;
  padding: 1em 0;
  font-family: Montserrat, "Avenir", Helvetica, Arial, sans-serif;
  line-height: 1.4;
}

.grid {
  /* Grid Fallback */
  display: flex;
  flex-wrap: wrap;

  /* Supports Grid */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1em;
}

.module {
  /* Demo-Specific Styles */
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  border-radius: 5px;

  /* Flex Fallback */
  margin-left: 5px;
  margin-right: 5px;
  flex: 1 1 200px;
}

.module:hover {
  border: solid 1px #CCC;
  -moz-box-shadow: 1px 1px 5px #999;
  -webkit-box-shadow: 1px 1px 5px #999;
  box-shadow: 1px 1px 5px #999;
}

.product-text-container {
  background: rgba(204, 204, 204, 0.7);
  padding: 5px;
  width: 100%;
  text-align: center;
  font-weight: 700;
}

/* If Grid is supported, remove the margin we set for the fallback */
@supports (display: grid) {
  .module {
    margin: 0;
  }
}
</style>
