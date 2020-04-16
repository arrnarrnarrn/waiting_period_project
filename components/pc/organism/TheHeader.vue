<template>
  <header class="header">
    <div class="header_wrap">
      <a class="header_link" href="/">
        <h1 class="header_logo">Nuxt Search Books</h1>
      </a>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
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
