import TheSimpleBookList from '@/components/sp/organism/TheSimpleBookList.vue'
import { withKnobs, number, object } from '@storybook/addon-knobs'

import dummyPickUp from '../../dummydata/comicPickup'
import '@/plugins/mixin-common-methods'

export default {
  title: 'sp/organism/TheSimpleBookList',
  components: { TheSimpleBookList },
  decorators: [withKnobs],
}

export const Default = () => ({
  components: { TheSimpleBookList },
  props: {
    totalBooks: {
      default: number('totalBooks', 20),
    },
    results: {
      default: object('results', dummyPickUp.comicPickList),
    },
  },
  template: `
    <the-simple-book-list :total-books="totalBooks" :book-list="results" />
  `,
})
