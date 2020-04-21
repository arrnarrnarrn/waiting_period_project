<template>
  <the-advanced-book-detail :id="id" :book="book" />
</template>

<script>
import TheAdvancedBookDetail from '@/components/pc/organism/TheAdvancedBookDetail.vue'
export default {
  components: {
    TheAdvancedBookDetail,
  },
  asyncData({ params }) {
    return { id: params.id, book: params.bookDetail }
  },
}
</script>

<style lang="scss" scoped></style>
