<template>
  <div>
    <div v-if="$device.isDesktop">
      <the-header-pc />
      <nuxt />
      <the-sns-pc />
      <the-footer-pc />
    </div>
    <div v-else>
      <the-header-sp />
      <nuxt />
      <the-sns-sp />
      <the-footer-sp />
    </div>
  </div>
</template>
<script>
import TheHeaderPc from '@/components/pc/organism/TheHeader.vue'
import TheSnsPc from '@/components/pc/molecules/TheSns.vue'
import TheFooterPc from '@/components/pc/organism/TheFooter.vue'
import TheHeaderSp from '@/components/sp/organism/TheHeader.vue'
import TheSnsSp from '@/components/sp/molecules/TheSns.vue'
import TheFooterSp from '@/components/sp/organism/TheFooter.vue'

export default {
  components: {
    TheHeaderPc,
    TheSnsPc,
    TheFooterPc,
    TheHeaderSp,
    TheSnsSp,
    TheFooterSp,
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
