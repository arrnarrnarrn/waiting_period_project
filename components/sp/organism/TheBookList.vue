<template>
  <div ref="mySwiper" v-swiper="swiperOptions" class="bookList_container">
    <div class="swiper-wrapper bookList">
      <div
        v-for="(item, index) in bookLists"
        :key="index"
        class="swiper-slide bookList_item"
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
      </div>
    </div>
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
        loop: false,
        slidesPerView: 3,
        spaceBetween: 16,
        freeMode: true,
        centeredSlides: false,
      },
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
  width: 100%;
  list-style-type: none;
  &_container {
    margin: 0 auto;
    height: calc(155 / 375 * 100vw);
  }
  &_img {
    object-fit: cover; /* IE: not support */
    width: 100%;
    height: 100%;
    transition: opacity 0.2s ease-out;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
