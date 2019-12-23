<template>
  <v-app-bar app color="#1A1919" dense>
    <div class="d-flex align-center">
      <v-img
        alt="Kushco Logo"
        class="shrink mr-2"
        contain
        src="@/assets/KCH-Icon-White-500px.png"
        transition="scale-transition"
        width="40"
      />
    </div>
    <span v-if='title'>{{ title }}</span>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['title'],
});
</script>

<style lang="scss" scoped>
  span {
    color: #FFF;
    font-weight: 700;
  }
</style>
