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
@use '../scss/tools';

.o-brand {
  $_block: &;

  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;

  &__logo {
    $_img-ratio: (750 / 900); // 750x900
    $_height: tools.f-px-to-rem(40px);

    display: inline-block;
    width: $_height * $_img-ratio; // 0.833
    height: $_height;
    background: url(../assets/media/branding/logo-tight.png) no-repeat center
      center;
    background-size: contain;
    vertical-align: baseline;
  }

  &__name {
    white-space: nowrap;
  }

  &__logo + #{$_block}__name {
    margin-left: 0.25em;
  }

  &--no-name #{$_block}__name {
    @include tools.m-visually-hidden;
  }
}
</style>
