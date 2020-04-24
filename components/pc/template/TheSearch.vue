<template>
  <div>
    <the-search-form />
    <!-- {{ totalBook }} -->
    <!-- {{ book }} -->
    <the-simple-book-list :book-list="results" />
    <section v-if="isPickup" class="section pale-green">
      <div class="section_wrap">
        <h1 class="section-title">PickUp</h1>
        <the-book-list :book-list="pickup" />
      </div>
    </section>
  </div>
</template>

<script>
import TheSearchForm from '@/components/pc/organism/TheSearchForm.vue'
import TheSimpleBookList from '@/components/pc/organism/TheSimpleBookList.vue'
import TheBookList from '@/components/pc/organism/TheBookList.vue'
export default {
  components: {
    TheSearchForm,
    TheSimpleBookList,
    TheBookList,
  },
  props: {
    pickup: {
      type: Object,
      default: () => {},
    },
    results: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isPickup() {
      if (Object.keys(this.pickup).length) {
        return true
      } else {
        return false
      }
    },
  },
  // created() {
  // this.getResults()
  // },
  // methods: {
  // async getResults() {
  // const url = `https://www.googleapis.com/books/v1/volumes?q=+${this.query}`
  // console.log(url)
  // const response = await this.$axios.$get(url).catch((error) => {
  // return this.$nuxt.error({
  // statusCode: error.response.status,
  // message: error.response.message,
  // })
  // })
  // if (!response || !response.items) {
  // return false
  // }
  // this.totalBook = response.totalItems
  // this.book = Object.assign({}, response.items)
  // },
  // },
}
</script>

<style lang="scss" scoped></style>
