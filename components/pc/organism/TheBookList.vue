<template>
  <ul class="bookList">
    <li
      v-for="(item, index) in bookList.items"
      :key="index"
      class="bookList_item"
    >
      <nuxt-link
        :to="{
          name: 'detail-id',
          params: { id: item.id, bookDetail: item },
        }"
        class="bookList_link"
        rel="noopener noreferrer"
      >
        <img
          class="bookList_img"
          :src="item.volumeInfo.imageLinks.thumbnail"
          alt=""
          :error="altSrc"
        />
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
    }
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
