<template>
  <footer class="c-footer" role="contentinfo">
    <p>
      All content &copy; copyright {{ year }} Keith Daulton and respective
      brands. All rights reserved.
      <a href="https://mixpanel.com/f/partner" rel="noopener" target="_blank">
        <img
          src="https://cdn.mxpnl.com/site_media/images/partner/badge_blue.png"
          alt="Mobile Analytics"
          style="vertical-align: middle;"
        />
      </a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss">
.c-footer {
  padding: 50px 20px;
  background-color: #313233;
  color: #b3b3b3;
}
</style>
