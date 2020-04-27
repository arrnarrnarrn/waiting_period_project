<template>
  <div>
    <the-search-form />
    <div class="section_wrap">
      <h1 class="section-title">Result ({{ totalBooks }})</h1>
      <the-simple-book-list :total-books="totalBooks" :book-list="results" />
    </div>
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
      if (Object.keys(this.pickup).length) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
