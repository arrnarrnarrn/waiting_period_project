<template>
  <ul>
    <li v-for="(item, index) in bookList" :key="index">
      <the-simple-book-detail :book="item" />
    </li>
  </ul>
</template>

<script>
import TheSimpleBookDetail from '@/components/pc/molecules/TheSimpleBookDetail.vue'
export default {
  components: {
    TheSimpleBookDetail,
  },
  props: {
    bookList: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
