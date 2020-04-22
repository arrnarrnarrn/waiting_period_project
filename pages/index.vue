<template>
  <the-home :pickup="pickup" />
</template>

<script>
import TheHome from '@/components/pc/template/TheHome.vue'
export default {
  components: {
    TheHome,
  },
  async asyncData({ $axios }) {
    const url = '/api/pickup'
    const response = await $axios.$get(url).catch((error) => {
      return this.$nuxt.error({
        statusCode: error.response.status,
        message: error.response.message,
      })
    })
    return {
      pickup: response,
    }
  },
}
</script>

<style lang="scss" scoped></style>
