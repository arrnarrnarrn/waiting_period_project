import TheAdvancedSearch from '@/components/pc/molecules/TheAdvancedSearch.vue'

export default {
  title: 'pc/molecules/TheAdvancedSearch',
  component: TheAdvancedSearch,
}

export const Default = () => ({
  components: { TheAdvancedSearch },
  data() {
    return {
      searchPath: '',
    }
  },
  template: `
    <div style="width:1040px;padding:32px 24px;margin:0 auto;">
      <the-advanced-search @submittedQuery="submittedQuery" />
      <p>{{ searchPath }}</p>
    </div>
  `,
  methods: {
    submittedQuery(value) {
      this.submitToSearch(value)
    },
    submitToSearch(query) {
      const searchURL = `/search?q=${query}`
      //router.push(searchURL)
      this.searchPath = searchURL
      //ここでルーティングさせたい
    },
  },
})
