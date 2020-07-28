<template>
  <section class="searchForm">
    <form @submit.prevent="submitToSearch">
      <the-simple-search class="u-mb-12" @submittedQuery="submittedQuery" />
      <the-advanced-search @submittedQuery="submittedQuery" />
    </form>
  </section>
</template>

<script>
import TheSimpleSearch from '@/components/sp/molecules/TheSimpleSearch.vue'
import TheAdvancedSearch from '@/components/sp/molecules/TheAdvancedSearch.vue'
export default {
  components: {
    TheSimpleSearch,
    TheAdvancedSearch,
  },
  data() {
    return {
      queryString: '',
    }
  },
  methods: {
    submittedQuery(value) {
      this.queryString = value
      this.submitToSearch()
    },
    submitToSearch() {
      const searchURL = `/search?q=${this.queryString}`
      this.$router.push(searchURL)
    },
  },
}
</script>

<style lang="scss" scoped>
.searchForm {
  width: 100%;
  padding: 0;
  margin: 0 auto;
}
</style>
