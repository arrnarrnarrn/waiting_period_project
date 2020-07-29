<template>
  <div>
    <the-detail-pc
      v-if="$device.isDesktop"
      :id="id"
      :book="book"
      :pickup="pickupItems"
      :related="related"
    />
    <the-detail-sp
      v-else
      :id="id"
      :book="book"
      :pickup="pickupItems"
      :related="related"
    />
  </div>
</template>

<script>
import TheDetailPc from '@/components/pc/template/TheDetail.vue'
import TheDetailSp from '@/components/sp/template/TheDetail.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheDetailPc,
    TheDetailSp,
  },
  async asyncData({ params, $axios, store }) {
    if (!store.state.api.pickup.length) {
      await store.dispatch('api/pickup/fetchPickupItems')
    }
    try {
      return { id: params.id, book: params.bookDetail }
    } catch (err) {
      return { id: params.id, book: params.bookDetail }
    }
  },
  data() {
    return {
      related: {},
      title: '',
    }
  },
  computed: {
    ...mapGetters('api/pickup', ['pickupItems']),
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
