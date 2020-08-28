import TheDetail from '@/components/pc/template/TheDetail.vue'
import TheHeader from '@/components/pc/organism/TheHeader.vue'
import TheFooter from '@/components/pc/organism/TheFooter.vue'
import TheSns from '@/components/pc/molecules/TheSns.vue'

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

import dummyPickup from '../../dummydata/pickup'

import { withKnobs, number } from '@storybook/addon-knobs'

export default {
  title: 'pc/template/TheDetail',
  components: { TheDetail, TheHeader, TheFooter, TheSns },
  decorators: [withKnobs],
}

export const Default = () => ({
  router,
  components: { TheDetail, TheHeader, TheFooter, TheSns },
  data() {
    return {
      pickupItems: dummyPickup.pickupList,
      related: dummyPickup.pickupList,
      book: {
        id: '6315DwAAQBAJ',
        volumeInfo: {
          title: 'おおきく振りかぶって（３０）',
          authors: ['ひぐちアサ'],
          publisher: '講談社',
          publishedDate: '2018-11-22',
          description:
            '県立西浦高校野球部の４市大会初戦の相手は崎玉高校。夏の大会でコールド負けした崎玉は西浦にリベンジを誓っていた！ 徹底的に練られた崎玉の戦略が西浦を翻弄！ 流れは崎玉に傾いた！',
          industryIdentifiers: [
            {
              type: 'OTHER',
              identifier: 'PKEY:BT000012855103003001900206',
            },
          ],
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=6315DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=6315DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          },
          language: 'ja',
          infoLink:
            'https://play.google.com/store/books/details?id=6315DwAAQBAJ&source=gbs_api',
          canonicalVolumeLink:
            'https://play.google.com/store/books/details?id=6315DwAAQBAJ',
        },
      },
      id: '6315DwAAQBAJ',
    }
  },
  template: `
    <div>
    <the-header />
    <the-detail
    :id="id"
    :book="book"
    :pickup="pickupItems"
    :related="related"
    />
    <the-sns />
    <the-footer />
    </div>
  `,
})
