<template>
  <a class="btnLink" :class="{ white: isWhite }" :href="link" target="_blank">
    {{ linkText }}
  </a>
</template>

<script>
export default {
  props: {
    linkText: {
      type: String,
      default: 'Link',
    },
    link: {
      type: String,
      default: '/',
    },
    variation: {
      type: String,
      default: '',
    },
  },
  computed: {
    isWhite() {
      return this.variation === 'white'
    },
  },
}
</script>

<style lang="scss" scoped>
.btnLink {
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  background-color: $main-color;
  color: white;
  width: 80px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.white {
  background-color: $back-white;
  color: $main-color;
}
</style>
