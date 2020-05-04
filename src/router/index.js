import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About'
    },
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    meta: {
      title: 'Experience'
    },
    component: () =>
      import(/* webpackChunkName: 'experience' */ '../views/Experience.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: 'Contact'
    },
    component: () =>
      import(/* webpackChunkName: 'contact' */ '../views/Contact.vue')
  },
  {
    path: '/code',
    name: 'code',
    beforeEnter() {
      location.href = 'https://github.com/d13/d13.github.io';
    }
  }
];

const router = new VueRouter({
  routes
});

router.afterEach(to => {
  const baseTitle = 'Keith Daulton - UI Developer and Designer';

  if (!to.meta || !to.meta.title) {
    document.title = baseTitle;
  } else {
    document.title = `${to.meta.title} | ${baseTitle}`;
  }
});

export default router;
