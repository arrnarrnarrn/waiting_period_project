<template>
  <div>
    <the-home-pc
      v-if="$device.isDesktop"
      :pickup="pickupItems"
      :comic-pickup="pickupComics"
      :programming-pickup="pickupProgrammings"
      :design-pickup="pickupDesigns"
    />
    <the-home-sp
      v-else
      :pickup="pickupItems"
      :comic-pickup="pickupComics"
      :programming-pickup="pickupProgrammings"
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
    if (!store.state.api.pickup.pickupItems.length) {
      await store.dispatch('api/pickup/fetchPickupItems')
    }
    if (!store.state.api.comicPickup.pickupComics.length) {
      await store.dispatch('api/comicPickup/fetchPickupComics')
    }
    if (!store.state.api.designPickup.pickupDesigns.length) {
      await store.dispatch('api/designPickup/fetchPickupDesigns')
    }
    if (!store.state.api.programmingPickup.pickupProgrammings.length) {
      await store.dispatch('api/programmingPickup/fetchPickupProgrammings')
    }
  },
  computed: {
    ...mapGetters('api/pickup', ['pickupItems']),
    ...mapGetters('api/comicPickup', ['pickupComics']),
    ...mapGetters('api/designPickup', ['pickupDesigns']),
    ...mapGetters('api/programmingPickup', ['pickupProgrammings']),
  },
}
</script>

<style lang="scss" scoped></style>
