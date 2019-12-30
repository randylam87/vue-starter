<template>
  <div>
    <div v-if='loaded'>
      <v-progress-circular color='primary' indeterminate></v-progress-circular>
    </div>
    <div v-else>
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
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import mixins from 'vue-typed-mixins';

import search from '@/api/middletier/search';

import utilsMixin from '@/mixins/utils';


export default mixins(utilsMixin).extend({
  data() {
    return {
      data: {} as any,
      productLines: [],
    };
  },
  computed: {
    loaded() {
      return this.isEmpty(this.data);
    },
  },
  async created() {
    console.log('utilsmixin', utilsMixin);
    this.data = await search.getProductLines();
    const { searchRow } = this.data.searchResult.searchRowList;
    this.productLines = searchRow.map(row => row.basic.name[0].searchValue);
  },
  mixins: [utilsMixin],
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
