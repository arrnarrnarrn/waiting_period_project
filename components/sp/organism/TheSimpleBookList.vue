<template>
  <div>
    <p v-if="!isResults" class="simpleBookList_notFound">
      検索条件に該当する書籍はありませんでした
    </p>
    <ul v-if="isResults" class="simpleBookList_list">
      <li
        v-for="(item, index) in bookList.items"
        :key="index"
        class="simpleBookList_item"
      >
        <the-simple-book-detail :book="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import TheSimpleBookDetail from '@/components/sp/molecules/TheSimpleBookDetail.vue'
export default {
  components: {
    TheSimpleBookDetail,
  },
  props: {
    bookList: {
      type: Object,
      default: () => {},
    },
    totalBooks: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    isResults() {
      return this.totalBooks ? true : false
    },
  },
}
</script>

<style lang="scss" scoped>
.simpleBookList {
  &_notFound {
    font-size: 1.6rem;
    color: $main-color;
  }
  &_list {
    list-style-type: none;
  }
  &_item {
    margin-bottom: 24px;
  }
}
</style>
