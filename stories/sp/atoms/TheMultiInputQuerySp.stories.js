import TheMultiInputQuery from '@/components/sp/atoms/TheMultiInputQuery.vue'
import { withKnobs, text, array } from '@storybook/addon-knobs'

export default {
  title: 'sp/atoms/TheMultiInputQuery',
  component: TheMultiInputQuery,
  decorators: [withKnobs],
}

export const Default = () => ({
  components: { TheMultiInputQuery },
  data() {
    return {
      country_selected: '',
    }
  },
  props: {
    label: {
      default: text('label', 'label'),
    },
    countryList: {
      default: array('list', ['JP', 'USA', 'EU']),
    },
  },
  template: `
    <the-multi-input-query
      :label="label"
      :item-selected="country_selected"
      :item-list="countryList"
      @changeSelectedItem="changeSelectedCountry"
    />`,
  methods: {
    changeSelectedCountry(item) {
      this.country_selected = item
    },
  },
})
