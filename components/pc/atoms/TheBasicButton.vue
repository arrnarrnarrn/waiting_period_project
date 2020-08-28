<template>
  <button
    type="button"
    class="basicBtn"
    :class="{ white: isWhite }"
    @click="clickEvent"
  >
    <p class="basicBtn_text">{{ btnText }}</p>
  </button>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      default: 'button',
    },
    variation: {
      type: String,
      default: '',
    },
  },
  computed: {
    isWhite() {
      if (this.variation === 'white') return true
      else return false
    },
  },
  methods: {
    clickEvent() {
      this.$emit('clickEvent')
    },
  },
}
</script>

<style lang="scss" scoped>
.basicBtn {
  border: 1px solid $main-color;
  border-radius: 4px;
  min-width: 64px;
  padding: 0 8px;
  height: 32px;
  background-color: $main-color;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  outline: none;
  cursor: pointer;
  &_text {
    font-size: 1.4rem;
    font-weight: bold;
    //font-family: 'marukame', 'honokamaru', Roboto, '游ゴシック体', YuGothic,
    //  '游ゴシック Medium', 'Yu Gothic Medium', '游ゴシック', 'Yu Gothic',
    //  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial,
    //  sans-serif;
  }
}
.white {
  background-color: $back-white;
  color: $main-color;
}
</style>
