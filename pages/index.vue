<template>
  <div>
    <the-home-pc
      v-if="$device.isDesktop"
      :pickup="pickup"
      :comic-pickup="comicPickup"
      :programming-pickup="programmingPickup"
      :design-pickup="designPickup"
    />
    <the-home-sp
      v-else
      :pickup="pickup"
      :comic-pickup="comicPickup"
      :programming-pickup="programmingPickup"
      :design-pickup="designPickup"
    />
  </div>
</template>

<script>
import TheHomePc from '@/components/pc/template/TheHome.vue'
import TheHomeSp from '@/components/sp/template/TheHome.vue'
export default {
  components: {
    TheHomePc,
    TheHomeSp,
  },
  async asyncData({ $axios }) {
    const url = '/api/pickup'
    const comicUrl = '/api/pickup/comic'
    const programmingUrl = '/api/pickup/programming'
    const designUrl = '/api/pickup/design'
    let response = await $axios.$get(url).catch((error) => {
      //return this.$nuxt.error({
      //  statusCode: error.response.status,
      //  message: error.response.message,
      //})
      response = {}
    })
    let comicResponse = await $axios.$get(comicUrl).catch((error) => {
      //return this.$nuxt.error({
      //  statusCode: error.response.status,
      //  message: error.response.message,
      //})
      comicResponse = {}
    })
    let programmingResponse = await $axios
      .$get(programmingUrl)
      .catch((error) => {
        //return this.$nuxt.error({
        //  statusCode: error.response.status,
        //  message: error.response.message,
        //})
        programmingResponse = {}
      })
    let designResponse = await $axios.$get(designUrl).catch((error) => {
      //return this.$nuxt.error({
      //  statusCode: error.response.status,
      //  message: error.response.message,
      //})
      designResponse = {}
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
