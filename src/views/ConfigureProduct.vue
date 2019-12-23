<template>
  <div>
    <h1 class='title'>Configure Product</h1>

    <!-- TODO: Create Stepper Component -->
    <p>Step 0</p>

    <p>Select your component:</p>
    <Dropdown :options='options'/>

    <pre><code>items: {{ JSON.stringify(items, null, 4) }}</code></pre>

    <button @click='updateItem({
      item: 10,
      type: "Jar",
      quantity: 999,
      decorations: [],
    })'>Set Quantity to 999 </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Dropdown from '@/components/Dropdown.vue';

import itemTypes from '@/data/itemType';

export default Vue.extend({
  data() {
    return {
      options: itemTypes.jars.map(type => type.name),
    };
  },
  methods: {
    ...mapActions('cart', [
      'updateItem',
    ]),
  },
  computed: {
    ...mapGetters('cart', [
      'items',
    ]),
  },
  components: {
    Dropdown,
  },
});
</script>
<style lang="scss" scoped>
  .title {
    text-decoration: underline;
    font-weight: 700;
  }
</style>
