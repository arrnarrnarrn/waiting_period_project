import TheSimpleBookDetail from '@/components/pc/molecules/TheSimpleBookDetail.vue'
import { withKnobs, text, object } from '@storybook/addon-knobs'
import '@/plugins/mixin-common-methods'

export default {
  title: 'pc/molecules/TheSimpleBookDetail',
  component: { TheSimpleBookDetail },
  decorators: [withKnobs],
}

const data = {
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
}

export const Default = () => ({
  components: { TheSimpleBookDetail },
  props: {
    id: {
      default: text('id', '6315DwAAQBAJ'),
    },
    bookData: {
      default: object('bookData', data),
    },
  },
  template: `
    <the-simple-book-detail :id="id" :book="bookData" />
  `,
})
