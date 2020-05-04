<template>
  <section class="c-section" :class="parentClasses">
    <div class="l-row c-section__row" :class="rowClasses">
      <div class="c-section__content">
        <slot />
      </div>
      <div class="c-section__media">
        <slot name="media" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',
  props: {
    hero: {
      type: Boolean,
      default: false
    },
    flow: {
      type: String,
      default: 'natural',
      validator(value) {
        return ['natural', 'reverse'].includes(value);
      }
    }
  },
  computed: {
    parentClasses() {
      return {
        'c-section--hero': this.hero
      };
    },
    rowClasses() {
      return {
        'l-row--narrow': this.hero,
        'l-row--reverse': this.flow === 'reverse'
      };
    }
  },
  mounted() {
    // console.log(this);
  }
};
</script>

<style lang="scss">
@use '../scss/tools';

.c-section {
  padding: {
    top: tools.f-px-to-rem(60px);
    bottom: tools.f-px-to-rem(60px);
  }

  &__row {
    flex-direction: column;

    @media (min-width: 640px) {
      flex-direction: row;
      justify-content: space-between;

      > * {
        flex-basis: calc(50% - 20px);
      }
    }
  }

  &--hero {
    display: flex;
    align-items: center;
    height: 100vh;
    box-shadow: inset 0 -30px 30px -30px rgba(0, 0, 0, 0.2);
  }
}
</style>
