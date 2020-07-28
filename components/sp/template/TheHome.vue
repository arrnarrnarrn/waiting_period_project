<template>
  <div class="container">
    <section v-if="isPickup" class="section-sp pale-green">
      <div class="section-sp_wrap">
        <h1 class="section-sp-title">PickUp</h1>
        <the-book-list :book-list="pickup" />
      </div>
    </section>
    <section v-if="isPickup" class="section-sp">
      <div class="section-sp_wrap">
        <h1 class="section-sp-title">Search Form</h1>
        <the-search-form />
      </div>
    </section>
    <section class="section-sp pale-green">
      <div class="category_wrap">
        <h1 class="section-sp-title u-mlr-16">Category</h1>
        <ul class="category_list">
          <li class="category_item">
            <the-basic-slider
              v-if="isComicPickup"
              :slider-item="comicPickup"
              label="Comic"
            />
          </li>
          <li class="category_item">
            <the-basic-slider
              v-if="isProgrammingPickup"
              :slider-item="programmingPickup"
              label="Programming"
            />
          </li>
          <li class="category_item">
            <the-basic-slider
              v-if="isDesignPickup"
              :slider-item="designPickup"
              label="Design"
            />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import TheBookList from '@/components/sp/organism/TheBookList.vue'
import TheSearchForm from '@/components/sp/organism/TheSearchForm.vue'
import TheBasicSlider from '@/components/sp/molecules/TheBasicSlider.vue'
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
      return Object.keys(this.pickup).length ? true : false
    },
    isComicPickup() {
      return Object.keys(this.comicPickup).length ? true : false
    },
    isProgrammingPickup() {
      return Object.keys(this.programmingPickup).length ? true : false
    },
    isDesignPickup() {
      return Object.keys(this.designPickup).length ? true : false
    },
  },
}
</script>

<style scoped lang="scss">
.category {
  &_wrap {
    padding: 16px 0;
  }
  &_item {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
