<template>
  <div class="t-app">
    <a class="t-app__skip" href="#t-app__main" @click.prevent="skipToMain()"
      >Skip to main content</a
    >
    <header class="t-app__header" role="banner">
      <nav class="t-app__brand" role="navigation">
        <router-link to="/">
          <Brand :hide-name="true" />
        </router-link>
      </nav>
      <nav class="t-app__nav" role="navigation">
        <router-link to="/about">About</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/code">Code</router-link>
      </nav>
    </header>
    <main class="t-app__main" id="t-app__main" role="main" ref="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Brand from './components/Brand';

export default {
  name: 'App',
  components: {
    Brand
  },
  methods: {
    skipToMain() {
      this.$nextTick(() => {
        const focusTarget = this.$refs.main;
        focusTarget.setAttribute('tabindex', '-1');
        focusTarget.focus();
        focusTarget.removeAttribute('tabindex');
      });
    }
  } // ,
  // watch: {
  //   $route(to) {
  //     this.skipToMain();
  //   }
  // }
};
</script>

<style lang="scss">
@use './scss/elements';
@use './scss/tools/mixins';

.t-app {
  &__header {
    display: flex;
    padding: 30px;
  }
  &__nav {
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  &__skip {
    @include mixins.visually-hidden;
    @include mixins.visually-hidden--focused;
  }
}
</style>
