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
    border-radius: 4px 0 0 4px;
    flex: 1;
    height: 56px;
    font-size: 2.4rem;
    color: $main-color;
    padding: 0 12px;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::placeholder {
      font-size: 2.4rem;
      color: $main-color;
      opacity: 0.8;
    }
  }
  &_btn {
    width: 56px;
    height: 56px;
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0 4px 4px 0;
    background: $main-color;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url('~assets/images/search.png');
    background-size: 32px 32px;
  }
}
</style>
