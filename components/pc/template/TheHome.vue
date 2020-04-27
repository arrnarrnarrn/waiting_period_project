<template>
  <div class="container">
    <section v-if="isPickup" class="section pale-green">
      <div class="section_wrap">
        <h1 class="section-title">PickUp</h1>
        <the-book-list :book-list="pickup" />
      </div>
    </section>
    <the-search-form />
    <p class="text">
      うらうらと晩春の日が照りわたっている野山
    </p>
    <p class="text">
      まるかめゴシック丸Pickup
    </p>
    <!-- {{ title_query }} -->
    <!-- <p>{{ category_selected }}</p> -->
  </div>
</template>

<script>
import TheBookList from '@/components/pc/organism/TheBookList.vue'
import TheSearchForm from '@/components/pc/organism/TheSearchForm.vue'
export default {
  components: {
    TheBookList,
    TheSearchForm,
  },
  props: {
    pickup: {
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
