<template>
  <header class="header">
    <div class="header_wrap">
      <n-link class="header_link" to="/">
        <h1 class="header_logo">Nuxt Search Books</h1>
      </n-link>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  min-width: 1040px;
  background: $main-color;
  line-height: 1;
  &_wrap {
    width: 1040px;
    margin: 0 auto;
    padding: 12px 24px;
    display: flex;
    justify-content: center;
  }
  &_link {
    display: inline-block;
    text-decoration: none;
  }
  &_logo {
    display: flex;
    align-items: center;
    font-family: 'marukame', 'honokamaru', 'roboto';
    font-size: 2.4rem;
    color: white;
    &::before {
      content: '';
      display: inline-block;
      width: 31px;
      height: 40px;
      margin-right: 12px;
      background-image: url('~assets/images/logo.png');
    }
  }
}
</style>
