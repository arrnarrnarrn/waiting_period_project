import TheHome from '@/components/sp/template/TheHome.vue'
import TheHeader from '@/components/sp/organism/TheHeader.vue'
import TheFooter from '@/components/sp/organism/TheFooter.vue'
import TheSns from '@/components/sp/molecules/TheSns.vue'

import dummyPickup from '../../dummydata/pickup'
import dummyComics from '../../dummydata/comicPickup'
import dummyProgrammings from '../../dummydata/programmingPickup'
import dummyDesings from '../../dummydata/designPickup'

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
  title: 'sp/template/TheHome',
  components: { TheHome, TheHeader, TheFooter, TheSns },
}

export const Default = () => ({
  router,
  components: { TheHome, TheHeader, TheFooter, TheSns },
  data() {
    return {
      pickupItems: dummyPickup.pickupList,
      pickuspomics: dummyComics.comicPickList,
      pickupProgrammings: dummyProgrammings.programmingPickList,
      pickupDesigns: dummyDesings.designPickList,
    }
  },
  template: `
    <div>
    <the-header />
    <the-home
      :pickup="pickupItems"
      :comic-pickup="pickuspomics"
      :programming-pickup="pickupProgrammings"
      :design-pickup="pickupDesigns"
    />
    <the-sns />
    <the-footer />
    </div>
  `,
})
