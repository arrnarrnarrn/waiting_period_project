import { action } from '@storybook/addon-actions'
import TheSearchForm from '@/components/pc/organism/TheSearchForm.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{ path: '/search', name: 'search' }],
})

router.afterEach((to, from) => {
  action('router')(to, from)
})

export default {
  title: 'pc/organism/TheSearchForm',
  components: { TheSearchForm },
}

export const Default = () => ({
  components: { TheSearchForm },
  template: `
    <the-searchForm />
  `,
  router,
})
