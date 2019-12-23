<template>
  <select v-model='selected'>
    <option disabled value=''>Please Select One</option>
    <option
      v-for='(option, index) in options'
      :key='index'
    >{{ option }}</option>
  </select>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['options'],
  data() {
    return {
      selected: '',
    };
  },
  created() {
    console.log('options', this.options);
  },
  // methods: {
  //   selectOption(e) {
  //     selected
  //   },
  // },
});
</script>
