<template>
  <div class="basicSlider">
    <div ref="mySwiper" v-swiper="swiperOptions" class="basicSlider_container">
      <div class="swiper-wrapper basicSlider_list">
        <div
          v-for="index in 5"
          :key="index"
          class="swiper-slide basicSlider_item"
        >
          <the-card />
        </div>
      </div>
      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
      <div
        slot="pagination"
        class="swiper-pagination swiper-pagination-bullets swiper-basicSlider-bullets"
      ></div>
    </div>
  </div>
</template>

<script>
import TheCard from '@/components/sp/molecules/TheCard.vue'
import altImg from '~/assets/images/image_not_found.jpg'
export default {
  name: 'Carrousel',
  components: {
    TheCard,
  },
  data() {
    return {
      altSrc: altImg,
      sliderData: this.sliderItem,
      swiperOptions: {
        loop: false,
        slidesPerView: 2.4,
        centeredSlides: false,
        spaceBetween: 16,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: `.swiper-button-next`,
          prevEl: `.swiper-button-prev`,
        },
        // Some Swiper option/callback...
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    //swiperPaginationName() {
    //  const swiperPaginationName = `swiper-pagination-${this.label}`
    //  return swiperPaginationName
    //},
    sliderItems() {
      return this.sliderData.items
    },
    thumbnail() {
      return function (item) {
        if (!item || !item.volumeInfo || !item.volumeInfo.imageLinks) {
          return this.altSrc
        }
        return item.volumeInfo.imageLinks.thumbnail
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.basicSlider {
  width: 100%;
  margin: 0 auto;
  &_container {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  &_list {
    width: 100%;
  }
  &_item {
    // width: 147px;
    // height: 216px;
  }
  &_link {
    display: block;
  }
  &_img {
    // width: 147px;
    // height: 216px;
    // object-fit: cover;
  }
}

.swiper-pagination {
  margin-top: 12px;
  position: static;
}

.swiper-button-prev {
  opacity: 0;
  height: 100%;
  width: 10vw;
  margin-top: 0;
  position: absolute;
  left: 0;
  top: 0;
}
.swiper-button-next {
  opacity: 0;
  height: 100%;
  width: 10vw;
  margin-top: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.swiper-basicSlider-bullets {
  & > .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: 1px solid $main-color;
    background: $back-white;
    opacity: 1;
  }
  & > .swiper-pagination-bullet-active {
    width: 10px;
    height: 10px;
    background: $main-color;
    opacity: 1;
  }
}
</style>

<style lang="scss">
.swiper-basicSlider-bullets {
  & > .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: 1px solid $main-color;
    background: $back-white;
    opacity: 1;
  }
  & > .swiper-pagination-bullet-active {
    width: 10px;
    height: 10px;
    background: $main-color;
    opacity: 1;
  }
}
</style>
