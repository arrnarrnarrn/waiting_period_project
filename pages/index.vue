<template>
  <div class="container">
    <!-- <ul> -->
    <!-- <li v-for="(post, index) in posts.items" :key="index"> -->
    <!-- <a href="#" target="_blank" rel="noopener noreferrer"> -->
    <!-- <h1>{{ post.volumeInfo.title }}</h1> -->
    <!-- <img :src="post.volumeInfo.imageLinks.thumbnail" alt="" /> -->
    <!-- </a> -->
    <!-- </li> -->
    <!-- </ul> -->
    <the-header />
    <p class="text">
      うらうらと晩春の日が照りわたっている野山
    </p>
    <p class="text">
      まるかめゴシック丸Pickup
    </p>
    <!-- {{ title_query }} -->
    <the-input-query
      attribute="title"
      :query="title_query"
      @changeQuery="changeInputText"
    />
    <the-sns />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/pc/organism/TheHeader.vue'
import TheInputQuery from '@/components/pc/atoms/TheInputQuery.vue'
import TheSns from '@/components/pc/molecules/TheSns.vue'
import TheFooter from '@/components/pc/organism/TheFooter.vue'
export default {
  //components: { TheHeader, TheSns, TheFooter },
  components: { TheHeader, TheInputQuery, TheSns, TheFooter },
  // async asyncData({ $axios }) {
  //   const url =
  //     'https://www.googleapis.com/books/v1/volumes?q=%E3%81%8A%E3%81%8A%E3%81%8D%E3%81%8F%E6%8C%AF%E3%82%8A%E3%81%8B%E3%81%B6%E3%81%A3%E3%81%A6'
  //   const response = await $axios.$get(url)
  //   return {
  //     posts: response,
  //   }
  // },
  data() {
    return {
      title_query: '',
    }
  },
  methods: {
    changeInputText(query) {
      this.title_query = query
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
