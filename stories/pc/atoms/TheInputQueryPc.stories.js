import TheInputQuery from '@/components/pc/atoms/TheInputQuery.vue'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'pc/atoms/TheInputQuery',
  component: TheInputQuery,
  decorators: [withKnobs],
}

// export const Default = () => ({
//   components: { TheInputQuery },
//   computed: {
//     isInputText() {
//       if (this.query.length === 0) return false
//       else return true
//     },
//   },
//   template: `<the-input-query />`,
// })

export const Default = () => ({
  components: { TheInputQuery },
  data() {
    return {
      inputed_query: '',
    }
  },
  props: {
    label: {
      default: text('label', 'category'),
    },
  },
  template: `
    <the-input-query :label="label" :query="inputed_query" @changeQuery="changeInput"/>
  `,
  methods: {
    changeInput(query) {
      this.inputed_query = query
    },
  },
})
