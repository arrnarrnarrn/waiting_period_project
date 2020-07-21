<template>
  <footer class="footer">
    <div class="footer_wrap">
      <p class="footer_text">
        <small class="footer_copy">
          <span class="u-inline-block">
            Copyright (C) 2020 ARRN.
          </span>
          <span class="u-inline-block">
            All Rights Reserved.
          </span>
        </small>
      </p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $main-color;
  width: 100%;
  &_wrap {
    line-height: 1.4;
    width: 100%;
    margin: 0 auto;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &_text {
    text-align: center;
  }
  &_copy {
    font-family: 'marukame', 'honokamaru', 'roboto';
    font-size: 1.4rem;
    color: white;
  }
}
</style>
