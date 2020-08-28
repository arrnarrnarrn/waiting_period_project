import TheHeader from '@/components/sp/organism/TheHeader.vue'

export default {
  title: 'sp/organism/TheHeader',
  components: { TheHeader },
}

export const Default = () => ({
  components: { TheHeader },
  template: `
    <the-header />
  `,
})
