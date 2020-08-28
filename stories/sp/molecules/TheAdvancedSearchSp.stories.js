import TheAdvancedSearch from '@/components/sp/molecules/TheAdvancedSearch.vue'

export default {
  title: 'sp/molecules/TheAdvancedSearch',
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
    <div>
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
