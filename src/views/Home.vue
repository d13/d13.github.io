<template>
  <div class="t-home">
    <Section class="t-home__hero t-home__hero--rough" hero>
      <VisibilityDetection v-slot="{ classes }">
        <div class="a-fade-in-down" :class="classes">
          <h1>Hello!</h1>
          <p>
            I'm a
            <strong>UI Developer &amp; Designer</strong> with a passion for
            creating awesome user experiences for web and mobile.
          </p>
          <p>I make pixels &amp; divs pretty!</p>
        </div>
      </VisibilityDetection>
    </Section>
    <Section class="t-home__hero t-home__hero--polished" hero>
      <VisibilityDetection v-slot="{ classes }" once>
        <div class="a-fade-in-down" :class="classes">
          <h1>I'm Keith &mdash;</h1>
          <p>
            A leader in user-interface development and design with over 17 years
            of experience and a proven track record for delivering scalable,
            interactive and multi-device web experiences including: online
            stores, single-page applications, marketing apps, widgets,
            microsites, landing pages and social-networking websites.
          </p>
        </div>
      </VisibilityDetection>
    </Section>
    <Section class="t-home__gallery">
      <h2>Select works</h2>
      <template slot="media">
        <!-- gallery -->
      </template>
    </Section>
  </div>
</template>

<script>
import Section from '../components/Section';
import VisibilityDetection from '../components/helpers/VisibilityDetection';
export default {
  name: 'home',
  components: {
    Section,
    VisibilityDetection
  }
};
</script>

<style lang="scss">
.t-home {
  &__hero {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: auto 100vh;
    background-position: left calc(50vw + 20px) bottom -30vh;

    animation-name: phone-home;
    animation-duration: 0.65s;

    &--rough {
      background-image: url(../assets/media/features/phone-mergein-rough.png);
    }
    &--polished {
      background-image: url(../assets/media/features/phone-mergein-finished.png);
    }
  }
}
</style>
