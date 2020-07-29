<template>
  <div>
    <section class="section-sp">
      <div class="section-sp_wrap">
        <h1 class="section-sp-title">Search Form</h1>
        <the-search-form />
      </div>
    </section>
    <div class="section-sp_wrap">
      <h1 class="section-sp-title">Result ({{ totalBooks }})</h1>
      <the-simple-book-list :total-books="totalBooks" :book-list="results" />
    </div>
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
import TheSimpleBookList from '@/components/sp/organism/TheSimpleBookList.vue'
import TheBookList from '@/components/sp/organism/TheBookList.vue'
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
    totalBooks: {
      type: Number,
      default: 0,
    },
    results: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isPickup() {
      return Object.keys(this.pickup).length ? true : false
    },
  },
}
</script>

<style lang="scss" scoped></style>
