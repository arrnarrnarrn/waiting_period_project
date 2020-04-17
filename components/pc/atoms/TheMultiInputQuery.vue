<template>
  <div class="select_wrap">
    <select
      v-model="selectedValue"
      class="select_box"
      :name="label"
      @change="updatedSelectItem"
    >
      <option value="" />
      <option v-for="(item, index) in itemList" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
    <label
      class="select_label"
      :for="label"
      :class="{ select_label_active: isSelected }"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    itemList: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    itemSelected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isSelected: false,
    }
  },
  computed: {
    selectedValue: {
      get: function () {
        this.judgeLength()
        return this.itemSelected
      },
      set: function (selectItem) {},
    },
  },
  methods: {
    updatedSelectItem(e) {
      this.judgeLength()
      this.$emit('changeSelectedItem', e.target.value)
    },
    judgeLength() {
      if (this.itemSelected.length === 0) {
        this.isSelected = false
      } else {
        this.isSelected = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.select {
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
    top: 4px;
    line-height: 1;
    transition: all 0.2s;
    text-transform: capitalize;
    &_active {
      top: -16px;
      font-size: 1.4rem;
    }
  }
  &_box {
    font-family: 'marukame', 'honokamaru', Roboto, '游ゴシック体', YuGothic,
      '游ゴシック Medium', 'Yu Gothic Medium', '游ゴシック', 'Yu Gothic',
      -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial,
      sans-serif;
    transition: 0.5s;
    color: $main-color;
    display: block;
    cursor: pointer;
    border: 0;
    width: 100%;
    outline: none;
    font-size: 1.8rem;
    padding: 4px 0;
    &:focus + .select_label {
      top: -16px;
      font-size: 1.4rem;
    }
  }
}
</style>
