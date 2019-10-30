<template>
  <div
    class="o-brand"
    :class="{
      'o-brand--no-name': hideName
    }"
  >
    <i class="o-brand__logo" role="presentation"></i>
    <span class="o-brand__name">Keith Daulton</span>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  props: {
    hideName: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
@use '../scss/tools/mixins';

.o-brand {
  $_block: &;

  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;

  &--no-name #{$_block}__name {
    @include mixins.visually-hidden;
  }
}
</style>
