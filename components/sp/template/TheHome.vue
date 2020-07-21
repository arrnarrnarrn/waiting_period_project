<template>
  <div class="container">
    <section v-if="isPickup" class="section-sp pale-green">
      <div class="section-sp_wrap">
        <h1 class="section-sp-title">PickUp</h1>
        <the-book-list :book-list="pickup" />
      </div>
    </section>
    <the-test-slider />
    <!-- <the-search-form /> -->
    <!-- <section class="section-sp pale-green"> -->
    <!-- <div class="section-sp_wrap"> -->
    <!-- <the-basic-slider -->
    <!-- v-if="isComicPickup" -->
    <!-- :slider-item="comicPickup" -->
    <!-- label="Comic" -->
    <!-- /> -->
    <!-- <the-basic-slider -->
    <!-- v-if="isProgrammingPickup" -->
    <!-- :slider-item="programmingPickup" -->
    <!-- label="Programming" -->
    <!-- /> -->
    <!-- <the-basic-slider -->
    <!-- v-if="isDesignPickup" -->
    <!-- :slider-item="designPickup" -->
    <!-- label="Design" -->
    <!-- /> -->
    <!-- </div> -->
    <!-- </section> -->
  </div>
</template>

<script>
import TheBookList from '@/components/sp/organism/TheBookList.vue'
// import TheSearchForm from '@/components/pc/organism/TheSearchForm.vue'
import TheTestSlider from '@/components/sp/molecules/TheTestSlider.vue'
export default {
  components: {
    TheTestSlider,
    TheBookList,
    // TheSearchForm,
  },
  props: {
    pickup: {
      type: Object,
      default: () => {},
    },
    comicPickup: {
      type: Object,
      default: () => {},
    },
    programmingPickup: {
      type: Object,
      default: () => {},
    },
    designPickup: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isPickup() {
      if (Object.keys(this.pickup).length) {
        return true
      } else {
        return false
      }
    },
    isComicPickup() {
      if (Object.keys(this.comicPickup).length) {
        return true
      } else {
        return false
      }
    },
    isProgrammingPickup() {
      if (Object.keys(this.programmingPickup).length) {
        return true
      } else {
        return false
      }
    },
    isDesignPickup() {
      if (Object.keys(this.designPickup).length) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style scoped lang="scss"></style>
