<template>
  <div>
    <the-header />
    <nuxt />
    <the-sns />
    <the-footer />
  </div>
</template>
<script>
import TheHeader from '@/components/pc/organism/TheHeader.vue'
import TheSns from '@/components/pc/molecules/TheSns.vue'
import TheFooter from '@/components/pc/organism/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheSns,
    TheFooter,
  },
}
</script>

<style>
html {
  font-family: 'roboto', '游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic',
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
  min-width: 1040px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
