import TheBasicButtonLink from '@/components/pc/atoms/TheBasicButtonLink.vue'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'pc/atoms/TheBasicButtonLink',
  component: TheBasicButtonLink,
  decorators: [withKnobs],
}

export const Default = () => ({
  components: { TheBasicButtonLink },
  template: `<the-basic-button-link />`,
})

export const ClassWhite = () => ({
  components: { TheBasicButtonLink },
  template: '<the-basic-button-link variation="white" />',
})

export const ChangeLinkTextAndLink = () => ({
  components: { TheBasicButtonLink },
  props: {
    linkText: {
      default: text('text', 'text'),
    },
    link: {
      default: text('link', 'https://waiting-nuxt-book.herokuapp.com'),
    },
  },
  template: '<the-basic-button-link :linkText="linkText" :link="link" />',
})
