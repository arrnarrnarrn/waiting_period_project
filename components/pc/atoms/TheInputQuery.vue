<template>
  <div class="input_wrap">
    <input
      v-model="input_text"
      class="input_area"
      type="text"
      name="input"
      autocomplete="off"
    />
    <label
      class="input_attribute"
      for="input"
      :class="{ input_attribute_active: isInputText }"
    >
      {{ attribute }}
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
    attribute: {
      type: String,
      default: '',
    },
  },
  computed: {
    input_text: {
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
  &_attribute {
    display: block;
    color: $main-color;
    font-size: 1.6rem;
    font-weight: bold;
    position: absolute;
    top: 2px;
    line-height: 1;
    transition: all 0.2s;
    &_active {
      top: -16px;
    }
  }
  &_area {
    font-family: 'marukame', 'honokamaru', Roboto, '游ゴシック体', YuGothic,
      '游ゴシック Medium', 'Yu Gothic Medium', '游ゴシック',
      'Yu Gothic' -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Helvetica Neue', Arial, sans-serif;
    color: $main-color;
    display: block;
    border: 0;
    width: 100%;
    outline: none;
    font-size: 1.8rem;
    padding: 4px 2px;
    &:focus + .input_attribute {
      top: -16px;
    }
  }
}
</style>
