import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import TheBasicButton from '@/components/pc/atoms/TheBasicButton.vue'

export default {
  title: 'pc/atoms/TheBasicButton',
  component: TheBasicButton,
  decorators: [withKnobs],
}

export const Default = () => ({
  components: { TheBasicButton },
  template: `<the-basic-button @clickEvent="action" />`,
  methods: { action: action('clickEvent') },
})

export const ChangeText = () => ({
  components: { TheBasicButton },
  props: {
    btnText: {
      default: text('text', 'text'),
    },
  },
  template: '<the-basic-button :btnText="btnText" @clickEvent="action" />',
  methods: { action: action('clicked') },
})

export const ClassWhite = () => ({
  components: { TheBasicButton },
  template: '<the-basic-button variation="white" @clickEvent="action" />',
  methods: { action: action('clicked') },
})
