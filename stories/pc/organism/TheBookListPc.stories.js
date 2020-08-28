import TheBookList from '@/components/pc/organism/TheBookList.vue'
import dummyData from '../../dummydata/pickup'

export default {
  title: 'pc/organism/TheBookList',
  component: { TheBookList },
}

export const Default = () => ({
  components: { TheBookList },
  data() {
    return {
      pickup: dummyData.pickupList,
    }
  },
  template: `
    <the-book-list :book-list="pickup" />
  `,
})
