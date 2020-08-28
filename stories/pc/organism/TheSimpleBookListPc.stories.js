import TheSimpleBookList from '@/components/pc/organism/TheSimpleBookList.vue'
import { withKnobs, number, object } from '@storybook/addon-knobs'
import '@/plugins/mixin-common-methods'

import dummyPickUp from '../../dummydata/comicPickup'

export default {
  title: 'pc/organism/TheSimpleBookList',
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
    <div class="section_wrap">
      <the-simple-book-list :total-books="totalBooks" :book-list="results" />
    </div>
  `,
})
