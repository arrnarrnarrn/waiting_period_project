<template>
  <footer class="footer">
    <div class="footer_wrap">
      <p>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &_wrap {
    padding: 24px;
  }
  &_copy {
    font-size: 1.8rem;
    color: white;
  }
}
</style>
