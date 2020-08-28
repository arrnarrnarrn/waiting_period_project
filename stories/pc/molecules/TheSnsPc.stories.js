import TheSns from '@/components/pc/molecules/TheSns.vue'

export default {
  title: 'pc/molecules/TheSns',
  component: { TheSns },
}

export const Default = () => ({
  components: { TheSns },
  template: `
    <the-sns />
  `,
  // TODO: 画像が表示されない
})
