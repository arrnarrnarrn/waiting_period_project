<template>
  <div>
    <the-home-pc
      v-if="$device.isDesktop"
      :pickup="pickupItems"
      :comic-pickup="comicPickup"
      :programming-pickup="programmingPickup"
      :design-pickup="designPickup"
    />
    <the-home-sp
      v-else
      :pickup="pickupItems"
      :comic-pickup="comicPickup"
      :programming-pickup="programmingPickup"
      :design-pickup="designPickup"
    />
  </div>
</template>

<script>
import TheHomePc from '@/components/pc/template/TheHome.vue'
import TheHomeSp from '@/components/sp/template/TheHome.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    TheHomePc,
    TheHomeSp,
  },
  async asyncData({ $axios, store }) {
    const comicUrl = '/api/pickup/comic'
    const programmingUrl = '/api/pickup/programming'
    const designUrl = '/api/pickup/design'
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
    if (store.state.api.pickup.pickupItems.length) {
      return
    }
    await store.dispatch('api/pickup/fetchPickupItems')
    return {
      comicPickup: comicResponse,
      programmingPickup: programmingResponse,
      designPickup: designResponse,
    }
  },
  computed: {
    ...mapGetters('api/pickup', ['pickupItems']),
  },
}
</script>

<style lang="scss" scoped></style>
