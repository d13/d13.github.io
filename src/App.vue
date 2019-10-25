<template>
  <div class="t-app">
    <a class="t-app__skip" href="#t-app__main" @click.prevent="skipToMain()"
      >Skip to main content</a
    >
    <header class="t-app__header" role="banner">
      <nav class="t-app__nav" role="navigation">
        <router-link to="/">Home</router-link>
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
export default {
  name: 'App',
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
@use './scss/baseline';
@use './scss/utils';

.t-app {
  &__nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  &__skip {
    @include utils.m-visually-hidden;
    @include utils.m-visually-hidden--focused;
  }
}
</style>
