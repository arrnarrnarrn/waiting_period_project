<template>
  <div class="container">
    <section v-if="isPickup" class="section pale-green">
      <div class="section_wrap">
        <h1 class="section-title">PickUp</h1>
        <the-book-list :book-list="pickup" />
      </div>
    </section>
    <the-search-form />
    <section class="section pale-green">
      <div class="section_wrap">
        <the-basic-slider
          v-if="isComicPickup"
          :slider-item="comicPickup"
          label="Comic"
        />
        <the-basic-slider
          v-if="isProgrammingPickup"
          :slider-item="programmingPickup"
          label="Programming"
        />
        <the-basic-slider
          v-if="isDesignPickup"
          :slider-item="designPickup"
          label="Design"
        />
      </div>
    </section>
  </div>
</template>

<script>
import TheBookList from '@/components/pc/organism/TheBookList.vue'
import TheSearchForm from '@/components/pc/organism/TheSearchForm.vue'
import TheBasicSlider from '@/components/pc/molecules/TheBasicSlider.vue'
export default {
  components: {
    TheBasicSlider,
    TheBookList,
    TheSearchForm,
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

<style scoped lang="scss">
.container {
  margin: 0 auto;
}

.text {
  font-family: 'marukame', 'honokamaru', Roboto, 'Quicksand', 'Source Sans Pro',
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 32px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  &-text {
    color: red;
  }
}
</style>
