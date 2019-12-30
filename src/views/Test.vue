<template>
  <div>
    <h1>Test</h1>
    <div class='test'>
      <div v-for='productLine in productLines' :key='productLine'>
        {{ productLine}}
      </div>

      <hr />

      <pre>
      {{ JSON.stringify(data, null, 2) }}
      </pre>
    </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import search from '@/api/middletier/search';

export default Vue.extend({
  data() {
    return {
      data: {} as any,
      productLines: [],
    };
  },
  async created() {
    console.log('Created');
    this.data = await search.getProductLines();
    console.log('Data', this.data);
    const { searchRow } = this.data.searchResult.searchRowList;
    this.productLines = searchRow.map(row => row.basic.name[0].searchValue);
    console.log('productLines ', this.productLines);
  },
});
</script>

<style scoped>
h1 {
  text-align: center;
}

.test {
  margin: 1em;
  padding: 2em;
  border: 1px solid red;
}
</style>
