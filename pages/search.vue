<template>
  <div>
    <the-search
      :pickup="pickupItems"
      :total-books="total_books"
      :results="results"
    />
  </div>
</template>

<script>
import TheSearch from '@/components/pc/template/TheSearch.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheSearch,
  },
  async asyncData({ $axios, store }) {
    if (!store.state.api.pickup.length) {
      await store.dispatch('api/pickup/fetchPickupItems')
    }
  },
  data() {
    return {
      results: {},
      query: this.$route.query.q,
      total_books: 0,
    }
  },
  computed: {
    ...mapGetters('api/pickup', ['pickupItems']),
  },
  created() {
    this.getResults()
  },
  methods: {
    async getResults() {
      if (!this.query) {
        this.results = {}
        this.total_books = 0
        return false
      }
      const url = `https://www.googleapis.com/books/v1/volumes?q=${this.query}`
      let response = await this.$axios.$get(url).catch((error) => {
        //return this.$nuxt.error({
        //  statusCode: error.response.status,
        //  message: error.response.message,
        //})
        response = {}
      })
      if (!response || !response.items) {
        this.total_books = 0
        return false
      }
      this.total_books = response.totalItems
      this.results = Object.assign({}, response.items)
    },
  },
  watchQuery(newQuery) {
    this.$route.query.q = newQuery.q
    this.query = newQuery.q
    this.getResults()
  },
}
</script>

<style lang="scss" scoped></style>
