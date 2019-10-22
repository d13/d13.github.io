import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
      location.href = 'http://github.com';
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
