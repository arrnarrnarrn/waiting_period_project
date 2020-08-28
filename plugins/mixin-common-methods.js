import Vue from 'vue'

Vue.mixin({
  methods: {
    replacedAmp(url) {
      const replacedURL = url.replace(/&amp;/g, '&')
      return replacedURL
    },
    truncate(str, length) {
      str = String(str)
      return str.length <= length ? str : str.substr(0, length) + '...'
    },
  },
})
