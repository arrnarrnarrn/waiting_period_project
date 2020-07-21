<template>
  <div class="bookList_container">
    <swiper ref="mySwiper" :options="swiperOptions" class="bookList">
      <swiper-slide
        v-for="(item, index) in bookLists"
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
          <img class="bookList_img" :src="thumbnail(item)" alt="" />
        </nuxt-link>
      </swiper-slide>
    </swiper>
  </div>
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
      swiperOptions: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 16,
        freeMode: true,
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
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
  &_container {
    max-width: 480px;
    margin: 0 auto;
  }
  width: 100%;
  list-style-type: none;
  &_item {
    width: 104px;
    height: 153px;
  }
  &_img {
    width: 104px;
    height: 153px;
    object-fit: cover;
  }
}
</style>
