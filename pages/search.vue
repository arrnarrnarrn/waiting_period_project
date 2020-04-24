<template>
  <div>
    {{ query }}
    <the-search :pickup="pickup" :results="results" />
  </div>
</template>

<script>
import TheSearch from '@/components/pc/template/TheSearch.vue'
export default {
  components: {
    TheSearch,
  },
  async asyncData({ $axios }) {
    const url = '/api/pickup'
    const response = await $axios.$get(url).catch((error) => {
      return this.$nuxt.error({
        statusCode: error.response.status,
        message: error.response.message,
      })
    })
    return {
      pickup: response,
    }
  },
  data() {
    return {
      results: {},
      query: this.$route.query.q,
      total_book: 0,
    }
  },
  created() {
    this.getResults()
  },
  methods: {
    async getResults() {
      if (!this.query) {
        return false
      }
      const url = `https://www.googleapis.com/books/v1/volumes?q=${this.query}`
      console.log(url)
      const response = await this.$axios.$get(url).catch((error) => {
        return this.$nuxt.error({
          statusCode: error.response.status,
          message: error.response.message,
        })
      })
      if (!response || !response.items) {
        return false
      }
      this.totalBook = response.totalItems
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
