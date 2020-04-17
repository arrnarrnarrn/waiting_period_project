<template>
  <div class="input_wrap">
    <input
      v-model="inputText"
      class="input_area"
      type="text"
      :name="label"
      autocomplete="off"
    />
    <label
      class="input_label"
      :for="label"
      :class="{ input_label_active: isInputText }"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputText: {
      get: function () {
        return this.query
      },
      set: function (query) {
        this.$emit('changeQuery', query)
      },
    },
    isInputText() {
      if (this.query.length === 0) return false
      else return true
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  &_wrap {
    width: 280px;
    margin-top: 24px;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0px;
      border-radius: 2px;
      background: $main-color;
    }
  }
  &_label {
    display: block;
    color: $main-color;
    font-size: 1.6rem;
    font-weight: bold;
    position: absolute;
    pointer-events: none;
    top: 12px;
    line-height: 1;
    text-transform: capitalize;
    transition: all 0.2s;
    &_active {
      top: -16px;
      font-size: 1.4rem;
    }
  }
  &_area {
    font-family: '游ゴシック体', YuGothic, '游ゴシック Medium',
      'Yu Gothic Medium', '游ゴシック', 'Yu Gothic', 'roboto', 'marukame',
      'honokamaru', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Helvetica Neue', Arial, sans-serif, 'Meiryo';
    //font-family: inherit;
    color: $main-color;
    display: block;
    border: 0;
    width: 100%;
    outline: none;
    font-size: 1.8rem;
    padding: 4px;
    &:focus + .input_label {
      top: -16px;
      font-size: 1.4rem;
    }
  }
}
</style>
