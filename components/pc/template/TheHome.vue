<template>
  <div class="container">
    <section class="section pale-green">
      <div v-if="isPickup" class="section_wrap">
        <h1 class="section-title">PickUp</h1>
        <the-book-list :book-list="pickup" />
      </div>
    </section>

    <p class="text">
      うらうらと晩春の日が照りわたっている野山
    </p>
    <p class="text">
      まるかめゴシック丸Pickup
    </p>
    <!-- {{ title_query }} -->
    <!-- <p>{{ category_selected }}</p> -->
    <the-advanced-search @submittedQuery="submittedQuery" />
  </div>
</template>

<script>
import TheBookList from '@/components/pc/organism/TheBookList.vue'
import TheAdvancedSearch from '@/components/pc/molecules/TheAdvancedSearch.vue'
export default {
  //components: { TheHeader, TheSns, TheFooter },
  components: {
    TheBookList,
    TheAdvancedSearch,
  },
  // async asyncData({ $axios }) {
  //   const url =
  //     'https://www.googleapis.com/books/v1/volumes?q=%E3%81%8A%E3%81%8A%E3%81%8D%E3%81%8F%E6%8C%AF%E3%82%8A%E3%81%8B%E3%81%B6%E3%81%A3%E3%81%A6'
  //   const response = await $axios.$get(url)
  //   return {
  //     posts: response,
  //   }
  // },
  props: {
    pickup: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      title_query: '',
      category_selected: '',
      queryString: '',
    }
  },
  computed: {
    result() {
      return `title:${this.title_query}`
    },
    isPickup() {
      if (Object.keys(this.pickup).length) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    changeInputText(query) {
      this.title_query = query
    },
    changeSelectedItem(item) {
      this.category_selected = item
    },
    submittedQuery(value) {
      this.queryString = value
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
