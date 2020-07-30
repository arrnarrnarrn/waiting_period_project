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
  async asyncData({ params, $axios, store, error }) {
    if (!store.state.api.pickup.length) {
      await store.dispatch('api/pickup/fetchPickupItems')
    }
    let relatedBook = {}
    if (!params.bookDetail) {
      const url = `https://www.googleapis.com/books/v1/volumes?q=?id=${params.id}`
      const encodedUrl = encodeURI(url)
      let response = await $axios.$get(encodedUrl).catch((error) => {
        response = {}
        return this.$nuxt.error({
          statusCode: error.response.status,
          message: error.response.message,
        })
      })
      if (!response.items) {
        return this.$nuxt.error({
          statusCode: error.response.status,
          message: error.response.message,
        })
      }
      params.bookDetail = Object.assign({}, response.items[0])
    }
    const bookTitle = params.bookDetail.volumeInfo.title
    if (bookTitle.length != 0) {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=5`
      const encodedUrl = encodeURI(url)
      const response = await $axios.$get(encodedUrl).catch((error) => {
        return { id: params.id, book: params.bookDetail, related: {} }
      })
      if (response) {
        relatedBook = Object.assign({}, response)
      }
    }
    try {
      return { id: params.id, book: params.bookDetail, related: relatedBook }
    } catch (err) {
      return error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
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
}
</script>
<style lang="scss" scoped></style>
