<template>
  <div>
    <the-search-pc
      v-if="$device.isDesktop"
      :pickup="pickupItems"
      :total-books="total_books"
      :results="results"
    />
    <the-search-sp
      v-else
      :pickup="pickupItems"
      :total-books="total_books"
      :results="results"
    />
  </div>
</template>

<script>
import TheSearchPc from '@/components/pc/template/TheSearch.vue'
import TheSearchSp from '@/components/sp/template/TheSearch.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheSearchPc,
    TheSearchSp,
  },
  watchQuery: true,
  async asyncData({ route, $axios, store, error }) {
    console.log(store.state.api.pickup)
    if (!store.state.api.pickup.length) {
      await store.dispatch('api/pickup/fetchPickupItems')
    }
    console.log(store.state.api.pickup)

    let search_results = {}
    let total_books = 0
    if (!route.query.q) {
      return { results: {}, total_books: 0 }
    }
    const url = `https://www.googleapis.com/books/v1/volumes?q=${route.query.q}`
    const encodedUrl = encodeURI(url)
    let response = await $axios.$get(encodedUrl).catch((err) => {
      response = {}
      return error({
        statusCode: err.response.status,
        message: err.response.message,
      })
    })
    if (!response || !response.items) {
      return { results: {}, total_books: 0 }
    }
    total_books = response.totalItems
    search_results = Object.assign({}, response)
    return { results: search_results, total_books: total_books }
  },
  data() {
    return {
      results: {},
      total_books: 0,
    }
  },
  computed: {
    ...mapGetters('api/pickup', ['pickupItems']),
  },
}
</script>

<style lang="scss" scoped></style>
