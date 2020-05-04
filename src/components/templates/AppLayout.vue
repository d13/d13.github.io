<template>
  <div class="t-app">
    <a class="t-app__skip" href="#t-app__main" @click.prevent="skipToMain()"
      >Skip to main content</a
    >
    <header class="t-app__header" role="banner">
      <div class="t-app__brand">
        <router-link to="/">
          <Brand :hide-name="true" />
        </router-link>
      </div>
      <nav class="t-app__nav" role="navigation">
        <router-link to="about">About</router-link>
        <router-link to="experience">Experience</router-link>
        <router-link to="contact">Contact</router-link>
        <router-link to="code">Code</router-link>
      </nav>
    </header>
    <main class="t-app__main" id="t-app__main" ref="main">
      <router-view />
    </main>
    <Invitation />
    <Footer class="t-app__footer" />
  </div>
</template>

<script>
import Brand from '../objects/Brand';
import Invitation from '../Invitation';
import Footer from '../Footer';

export default {
  name: 'AppLayout',
  components: {
    Brand,
    Invitation,
    Footer
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
@use '../../scss/tools';

.t-app {
  min-height: 100vh;

  &__header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    height: tools.f-px-to-rem(60px);
    display: flex;
    align-items: center;
    padding: tools.f-px-to-rem(10px) tools.f-px-to-rem(20px);
  }

  &__nav {
    margin-left: auto;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  // &__main {}
  // &__footer {}

  &__skip {
    @include tools.m-visually-hidden;
    @include tools.m-visually-hidden--focused;
  }
}
</style>
