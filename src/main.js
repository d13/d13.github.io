import Vue from 'vue';
import App from './App.vue';
import router from './router';
import mixpanel from 'mixpanel-browser';

Vue.config.productionTip = false;

if (process.env.VUE_APP_TRACKING !== 'false') {
  mixpanel.init('00f8e130c9f6233dcc214d3235d272fb');
  mixpanel.track('vue init');
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
