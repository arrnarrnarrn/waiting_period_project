<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <nuxt-link to="/">ホーム</nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    message() {
      if (this.error.statusCode === 404) {
        return 'このページは存在しません。'
      }
      return this.error.message || `エラーが発生しました。`
    },
  },
}
</script>
