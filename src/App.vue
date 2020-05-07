<template>
  <AppLayout />
</template>

<script>
import AppLayout from './components/templates/AppLayout';

export default {
  name: 'App',
  components: {
    AppLayout
  }
};
</script>

<style lang="scss">
@use './scss/tools';
@use './scss/elements';
@use './scss/animations';
@use './scss/layouts';
</style>
