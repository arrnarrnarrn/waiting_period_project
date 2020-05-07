<template>
  <div>
    <the-detail :id="id" :book="bookData" :pickup="pickup" :related="related" />
  </div>
</template>

<script>
import TheDetail from '@/components/pc/template/TheDetail.vue'
export default {
  components: {
    TheDetail,
  },
  async asyncData({ params, $axios }) {
    const url = '/api/pickup'
    let response = await $axios.$get(url).catch((error) => {
      //return this.$nuxt.error({
      //  statusCode: error.response.status,
      //  message: error.response.message,
      //})
      response = {}
    })
    return { id: params.id, book: params.bookDetail, pickup: response }
  },
  data() {
    return {
      pickup: {},
      related: {},
      title: '',
    }
  },
  computed: {
    bookData() {
      return this.book
    },
  },
  created() {
    if (!this.book) {
      this.getBook()
    } else {
      this.title = this.book.volumeInfo.title
      this.getRelated()
    }
  },
  methods: {
    async getBook() {
      const url = `https://www.googleapis.com/books/v1/volumes?q=?id=${this.id}`
      let response = await this.$axios.$get(url).catch((error) => {
        //return this.$nuxt.error({
        //  statusCode: error.response.status,
        //  message: error.response.message,
        //})
        response = {}
      })
      if (!response.items) {
        return false
      }
      this.book = Object.assign({}, response.items[0])
      this.title = this.book.volumeInfo.title
      this.getRelated()
    },
    async getRelated() {
      if (this.title.length != 0) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.title}&maxResults=5`
        const response = await this.$axios.$get(url)
        if (!response) {
          this.related = {}
        }
        this.related = Object.assign({}, response)
      } else {
        this.related = {}
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
