<template>
  <div>
    <h1>Test</h1>
    <div v-for='productLine in productLines' :key='productLine'>
      {{ productLine}}
    </div>

    <hr />

    <pre>
    {{ JSON.stringify(data, null, 2) }}
    </pre>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import search from '@/api/middletier/search';

export default Vue.extend({
  data() {
    return {
      data: {},
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
