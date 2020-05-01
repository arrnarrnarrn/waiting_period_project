<template>
  <ul class="bookList">
    <li v-for="(item, index) in bookLists" :key="index" class="bookList_item">
      <nuxt-link
        :to="{
          name: 'detail-id',
          params: { id: item.id, bookDetail: item },
        }"
        class="bookList_link"
        rel="noopener noreferrer"
      >
        <img class="bookList_img" :src="thumbnail(item)" alt="" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import altImg from '~/assets/images/image_not_found.jpg'
export default {
  props: {
    bookList: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      altSrc: altImg,
      bookData: this.bookList,
    }
  },
  computed: {
    bookLists() {
      if (!this.bookData) return false
      if (this.bookData.items) {
        let sliceMax = 0
        if (this.bookData.items.length > 5) {
          sliceMax = 5
        } else {
          sliceMax = this.bookData.items.length
        }
        return this.bookData.items.slice(0, sliceMax)
      }
      return this.bookData.items
    },
    thumbnail() {
      return function (item) {
        if (!item.volumeInfo.imageLinks) {
          return this.altSrc
        }
        return item.volumeInfo.imageLinks.thumbnail
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.bookList {
  width: 897px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  &_item {
    width: 147px;
    height: 216px;
  }
  &_img {
    width: 147px;
    height: 216px;
    object-fit: cover;
  }
}
</style>
