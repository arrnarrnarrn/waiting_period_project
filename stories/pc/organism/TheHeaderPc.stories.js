import TheHeader from '@/components/pc/organism/TheHeader.vue'

export default {
  title: 'pc/organism/TheHeader',
  components: { TheHeader },
}

export const Default = () => ({
  components: { TheHeader },
  template: `
    <the-header />
  `,
})
