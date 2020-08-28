import TheBasicSlider from '@/components/pc/molecules/TheBasicSlider.vue'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import 'swiper/css/swiper.css'
import '@/plugins/vue-awesome-swiper'

import dummyPickUp from '../../dummydata/comicPickup'

import Vue from 'vue'

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

let data = dummyPickUp.comicPickList

export default {
  title: 'pc/molecules/TheBasicSlider',
  components: TheBasicSlider,
  decorators: [withKnobs],
}
export const Default = () => ({
  components: { TheBasicSlider },
  props: {
    label: {
      default: text('label', 'label'),
    },
    sliderItem: {
      default: object('sliderItem', data),
    },
  },
  template: `
    <the-basic-slider
      v-if="isPickup"
      :slider-item="sliderItem"
      :label="label"
    />`,
  computed: {
    isPickup() {
      return Object.keys(this.sliderItem.items).length ? true : false
    },
  },
})
