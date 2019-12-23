<template>
  <v-app>
    <Nav title='CPQ Configurator'/>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Nav from '@/components/Nav.vue';

export default Vue.extend({
  components: {
    Nav,
  },
});
</script>
