import TheSimpleSearch from '@/components/pc/molecules/TheSimpleSearch.vue'

export default {
  title: 'pc/molecules/TheSimpleSearch',
  component: TheSimpleSearch,
}

export const Default = () => ({
  components: { TheSimpleSearch },
  data() {
    return {
      searchPath: '',
    }
  },
  template: `
    <div style="width:1040px;margin:0 auto;">
      <the-simple-search @submittedQuery="submittedQuery" />
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
