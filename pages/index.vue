<template>
  <div>
    <the-home
      :pickup="pickup"
      :comic-pickup="comicPickup"
      :programming-pickup="programmingPickup"
      :design-pickup="designPickup"
    />
  </div>
</template>

<script>
import TheHome from '@/components/pc/template/TheHome.vue'
export default {
  components: {
    TheHome,
  },
  async asyncData({ $axios }) {
    const url = '/api/pickup'
    const comicUrl = '/api/pickup/comic'
    const programmingUrl = '/api/pickup/programming'
    const designUrl = '/api/pickup/design'
    const response = await $axios.$get(url).catch((error) => {
      return this.$nuxt.error({
        statusCode: error.response.status,
        message: error.response.message,
      })
    })
    const comicResponse = await $axios.$get(comicUrl).catch((error) => {
      return this.$nuxt.error({
        statusCode: error.response.status,
        message: error.response.message,
      })
    })
    const programmingResponse = await $axios
      .$get(programmingUrl)
      .catch((error) => {
        return this.$nuxt.error({
          statusCode: error.response.status,
          message: error.response.message,
        })
      })
    const designResponse = await $axios.$get(designUrl).catch((error) => {
      return this.$nuxt.error({
        statusCode: error.response.status,
        message: error.response.message,
      })
    })
    return {
      pickup: response,
      comicPickup: comicResponse,
      programmingPickup: programmingResponse,
      designPickup: designResponse,
    }
  },
}
</script>

<style lang="scss" scoped></style>
