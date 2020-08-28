import TheSns from '@/components/sp/molecules/TheSns.vue'

export default {
  title: 'sp/molecules/TheSns',
  component: { TheSns },
}

export const Default = () => ({
  components: { TheSns },
  template: `
    <the-sns />
  `,
  // TODO: 画像が表示されない
})
