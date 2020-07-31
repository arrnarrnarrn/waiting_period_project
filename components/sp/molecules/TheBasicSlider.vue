<template>
  <div class="basicSlider">
    <h1 class="section-sp-subTitle u-mlr-16">{{ label }}</h1>
    <div class="basicSlider_wrapper">
      <div v-swiper="swiperOptions" class="basicSlider_container">
        <div class="swiper-wrapper basicSlider_list">
          <div
            v-for="(item, index) in sliderItems"
            :key="index"
            class="swiper-slide basicSlider_item"
          >
            <nuxt-link
              :to="{
                name: 'detail-id',
                params: { id: item.id, bookDetail: item },
              }"
              class="basicSlider_link"
              rel="noopener noreferrer"
            >
              <img class="basicSlider_img" :src="thumbnail(item)" alt="" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import altImg from '~/assets/images/image_not_found.jpg'
export default {
  name: 'Carrousel',
  props: {
    label: {
      type: String,
      default: 'Label',
    },
    sliderItem: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      altSrc: altImg,
      sliderData: this.sliderItem,
      swiperOptions: {
        loop: false,
        slidesPerView: 3.4,
        spaceBetween: 8,
        freeMode: true,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        breakpoints: {
          750: {
            slidesPerView: 5.2,
            spaceBetween: 24,
          },
          481: {
            slidesPerView: 4.8,
            spaceBetween: 16,
          },
        },
      },
    }
  },
  computed: {
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
  margin: 0 auto;
  &_wrapper {
    position: relative;
  }
  &_container {
    padding: 0;
    margin: 0 auto;
    position: relative;
    height: calc(149 / 375 * 100vw);
    @media screen and (min-width: 481px) {
      height: calc(124 / 480 * 100vw);
    }
    @media screen and (min-width: 750px) {
      height: calc(178 / 750 * 100vw);
    }
  }
  &_link {
    display: block;
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
