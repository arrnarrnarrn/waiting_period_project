<template>
  <section class="searchForm">
    <form @submit.prevent="submitToSearch">
      <the-simple-search class="u-mb-12" @submittedQuery="submittedQuery" />
      <the-advanced-search @submittedQuery="submittedQuery" />
    </form>
  </section>
</template>

<script>
import TheSimpleSearch from '@/components/pc/molecules/TheSimpleSearch.vue'
import TheAdvancedSearch from '@/components/pc/molecules/TheAdvancedSearch.vue'
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
      this.$router.push(searchURL, () => {})
    },
  },
}
</script>

<style lang="scss" scoped>
.searchForm {
  width: 1040px;
  padding: 32px 24px;
  margin: 0 auto;
}
</style>
