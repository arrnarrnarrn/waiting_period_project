<template>
  <div>
    <section class="section-sp pale-green">
      <div class="section-sp_wrap">
        <h1 class="section-sp-title">Search Form</h1>
        <the-search-form />
      </div>
    </section>
    <the-advanced-book-detail :id="id" :book="bookData" />
    <section v-if="isRelated" class="section-sp pale-green">
      <div class="section-sp_wrap">
        <h1 class="section-sp-title">Related Books</h1>
        <the-book-list :book-list="related" />
      </div>
    </section>
    <section v-if="isPickup" class="section-sp pale-green">
      <div class="section-sp_wrap">
        <h1 class="section-sp-title">PickUp</h1>
        <the-book-list :book-list="pickup" />
      </div>
    </section>
  </div>
</template>

<script>
import TheSearchForm from '@/components/sp/organism/TheSearchForm.vue'
import TheAdvancedBookDetail from '@/components/sp/organism/TheAdvancedBookDetail.vue'
import TheBookList from '@/components/sp/organism/TheBookList.vue'
export default {
  components: {
    TheAdvancedBookDetail,
    TheBookList,
    TheSearchForm,
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
      return Object.keys(this.related).length ? true : false
    },
    isPickup() {
      return Object.keys(this.pickup).length ? true : false
    },
  },
}
</script>

<style lang="scss" scoped></style>
