import Vue from 'vue';

export default Vue.extend({
  methods: {
    isEmpty(obj: any): boolean {
      return Object.entries(obj).length === 0 && obj.constructor === Object;
    },
  },
  created() {
    console.log('loaded mixin');
  },
});
