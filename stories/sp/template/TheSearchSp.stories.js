import TheSearch from '@/components/sp/template/TheSearch.vue'
import TheHeader from '@/components/sp/organism/TheHeader.vue'
import TheFooter from '@/components/sp/organism/TheFooter.vue'
import TheSns from '@/components/sp/molecules/TheSns.vue'

import dummyPickup from '../../dummydata/pickup'
import dummyComics from '../../dummydata/comicPickup'

import { withKnobs, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

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
  title: 'sp/template/TheSearch',
  components: { TheSearch, TheHeader, TheFooter, TheSns },
  decorators: [withKnobs],
}

export const Default = () => ({
  router,
  components: { TheSearch, TheHeader, TheFooter, TheSns },
  data() {
    return {
      pickupItems: dummyPickup.pickupList,
      results: Object.assign({}, dummyComics.comicPickList),
    }
  },
  props: {
    total_books: {
      default: number('totalBooks', 20),
    },
  },
  template: `
    <div>
    <the-header />
    <the-search
      :pickup="pickupItems"
      :total-books="total_books"
      :results="results"
    />
    <the-sns />
    <the-footer />
    </div>
  `,
})
