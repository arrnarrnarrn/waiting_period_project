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
  line-height: 1.4;
  &_wrap {
    width: 100%;
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
    font-size: 1.8rem;
    color: white;
    &::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 25px;
      background-repeat: no-repeat;
      background-size: contain;
      margin-right: 8px;
      background-image: url('~assets/images/logo.png');
    }
  }
}
</style>
