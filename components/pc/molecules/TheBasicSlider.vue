<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="index in 20" :key="index">
      Slide {{ index }}
    </swiper-slide>
    <div slot="button-prev" class="swiper-button-prev"></div>
    <div slot="button-next" class="swiper-button-next"></div>
    <div slot="pagination" class="swiper-pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'Carrousel',
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // Some Swiper option/callback...
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
}
</script>
