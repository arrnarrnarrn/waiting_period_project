<template>
  <div class="basicSlider">
    <h1 class="section-title">{{ label }}</h1>
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
        <div
          slot="pagination"
          class="swiper-pagination swiper-pagination-bullets swiper-basicSlider-bullets"
          :class="swiperPaginationName"
        ></div>
      </div>
      <div
        slot="button-prev"
        class="swiper-button-prev"
        :class="swiperPrevName"
      ></div>
      <div
        slot="button-next"
        class="swiper-button-next"
        :class="swiperNextName"
      ></div>
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
      //sliderData: this.sliderItem,
      swiperOptions: {
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 40,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: `.swiper-button-next-${this.label}`,
          prevEl: `.swiper-button-prev-${this.label}`,
        },
        // Some Swiper option/callback...
      },
    }
  },
  computed: {
    swiperPaginationName() {
      const swiperPaginationName = `swiper-pagination-${this.label}`
      return swiperPaginationName
    },
    swiperNextName() {
      const swiperNextName = `swiper-button-next-${this.label}`
      return swiperNextName
    },
    swiperPrevName() {
      const swiperPrevName = `swiper-button-prev-${this.label}`
      return swiperPrevName
    },
    sliderItems() {
      return this.sliderItem?.items ?? {}
    },
    thumbnail() {
      return function (item) {
        return item?.volumeInfo?.imageLinks?.thumbnail
          ? encodeURI(this.replacedAmp(item.volumeInfo.imageLinks.thumbnail))
          : this.altSrc
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.basicSlider {
  width: 992px;
  margin: 0 auto;
  &_wrapper {
    position: relative;
  }
  &_container {
    width: 897px;
    padding: 0;
    margin: 0 auto;
    position: relative;
  }
  &_list {
    width: 897px;
  }
  &_item {
    width: 147px;
    height: 216px;
  }
  &_link {
    display: block;
  }
  &_img {
    width: 147px;
    height: 216px;
    object-fit: cover;
    transition: opacity 0.2s ease-out;
    &:hover {
      opacity: 0.7;
    }
  }
}
.swiper-button-prev,
.swiper-button-next {
  margin-top: 0;
  top: 96px;
}
.swiper-button-prev {
  height: 24px;
  color: #333;
  position: absolute;
  left: 0;
  &::after {
    font-size: 24px;
    font-weight: bold;
  }
}
.swiper-button-next {
  height: 24px;
  color: #333;
  position: absolute;
  right: 0;
  &::after {
    font-size: 24px;
    font-weight: bold;
  }
}
.swiper-pagination {
  margin-top: 12px;
  position: static;
}
.swiper-basicSlider-bullets {
  & > .swiper-pagination-bullet {
    margin: 0 8px;
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
