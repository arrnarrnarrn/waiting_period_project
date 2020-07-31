<template>
  <div class="simpleSearch">
    <input
      v-model="query"
      class="simpleSearch_input"
      type="text"
      placeholder="input keywords, title, author..."
    />
    <button type="button" class="simpleSearch_btn" @click="querySubmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    }
  },
  methods: {
    querySubmit() {
      this.$emit('submittedQuery', this.query)
    },
  },
}
</script>

<style lang="scss" scoped>
.simpleSearch {
  display: flex;
  &_input {
    border: 2px solid $main-color;
    border-right: none;
    border-radius: 2px 0 0 2px;
    flex: 1;
    height: 32px;
    font-size: 1.4rem;
    color: $main-color;
    padding: 0 8px;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::placeholder {
      font-size: 1.4rem;
      color: $main-color;
      opacity: 0.8;
    }
  }
  &_btn {
    width: 32px;
    height: 32px;
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0 2px 2px 0;
    background: $main-color;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('~assets/images/search.png');
    background-size: 16px 16px;
  }
}
</style>
