<template>
  <div>
    <the-advanced-search @submittedQuery="submittedQuery" />
    <the-advanced-book-detail :id="id" :book="bookData" />
    <section v-if="isRelated" class="section pale-green">
      <div class="section_wrap">
        <h1 class="section-title">Related Books</h1>
        <the-book-list :book-list="related" />
      </div>
    </section>
    <section v-if="isPickup" class="section pale-green">
      <div class="section_wrap">
        <h1 class="section-title">PickUp</h1>
        <the-book-list :book-list="pickup" />
      </div>
    </section>
  </div>
</template>

<script>
import TheAdvancedSearch from '@/components/pc/molecules/TheAdvancedSearch.vue'
import TheAdvancedBookDetail from '@/components/pc/organism/TheAdvancedBookDetail.vue'
import TheBookList from '@/components/pc/organism/TheBookList.vue'
export default {
  components: {
    TheAdvancedBookDetail,
    TheBookList,
    TheAdvancedSearch,
  },
  props: {
    pickup: {
      type: Object,
      default: () => {},
    },
    id: {
      type: String,
      default: '',
    },
    book: {
      type: Object,
      default: () => {},
    },
    related: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      queryString: '',
    }
  },
  computed: {
    bookData() {
      return this.book
    },
    isRelated() {
      if (Object.keys(this.related).length) {
        return true
      } else {
        return false
      }
    },
    isPickup() {
      if (Object.keys(this.pickup).length) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    submittedQuery(query) {
      console.log(query)
    },
  },
}
</script>

<style lang="scss" scoped></style>
