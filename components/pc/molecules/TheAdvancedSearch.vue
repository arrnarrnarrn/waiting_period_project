<template>
  <section class="advancedSearch">
    <div class="advancedSearch_wrap">
      <h1 class="advancedSearch_title">Advanced Search</h1>
      <ul class="advancedSearch_list">
        <li class="advancedSearch_item">
          <the-input-query
            label="title"
            :query="title_query"
            @changeQuery="changeInputTitle"
          />
        </li>
        <li class="advancedSearch_item">
          <the-input-query
            label="author"
            :query="author_query"
            @changeQuery="changeInputAuthor"
          />
        </li>
        <li class="advancedSearch_item">
          <the-input-query
            label="ISBN"
            :query="isbn_query"
            @changeQuery="changeInputISBN"
          />
        </li>
        <li class="advancedSearch_item">
          <the-multi-input-query
            label="category"
            :item-selected="category_selected"
            :item-list="categoryList"
            @changeSelectedItem="changeSelectedCategory"
          />
        </li>
        <li class="advancedSearch_item">
          <the-multi-input-query
            label="country"
            :item-selected="country_selected"
            :item-list="countryList"
            @changeSelectedItem="changeSelectedCountry"
          />
        </li>
      </ul>
      <div class="advancedSearch_btns">
        <the-basic-button
          class="advancedSearch_btn"
          btn-text="Search"
          @clickEvent="querySubmit"
        />
        <the-basic-button
          class="advancedSearch_btn"
          btn-text="Clear"
          variation="white"
          @clickEvent="clearQuery"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TheInputQuery from '@/components/pc/atoms/TheInputQuery.vue'
import TheMultiInputQuery from '@/components/pc/atoms/TheMultiInputQuery.vue'
import TheBasicButton from '@/components/pc/atoms/TheBasicButton.vue'
export default {
  components: {
    TheInputQuery,
    TheMultiInputQuery,
    TheBasicButton,
  },
  props: {
    queryString: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      title_query: '',
      author_query: '',
      isbn_query: '',
      category_selected: '',
      country_selected: '',
      categoryList: [
        'Novels',
        'Programming',
        'Mistery',
        'Cooking',
        'Computer science',
      ],
      countryList: ['JP', 'USA', 'EU'],
    }
  },
  computed: {
    titleQueryString() {
      if (this.title_query.length != 0) return `title:${this.title_query}+`
      else return ''
    },
    authorQueryString() {
      if (this.author_query.length != 0) return `authors:${this.author_query}+`
      else return ''
    },
    isbnQueryString() {
      if (this.isbn_query.length != 0) return `isbn:${this.isbn_query}+`
      else return ''
    },
    categorySelectedString() {
      if (this.category_selected.length != 0)
        return `category:${this.category_selected}+`
      else return ''
    },
    countrySelectedString() {
      if (this.country_selected.length != 0)
        return `country:${this.country_selected}+`
      else return ''
    },
    queryConnect() {
      let queryString = `${this.titleQueryString}${this.authorQueryString}${this.isbnQueryString}${this.categorySelectedString}${this.countrySelectedString}`
      if (queryString.length != 0) {
        queryString = queryString.slice(0, -1)
      }
      return queryString
    },
  },
  methods: {
    changeInputTitle(query) {
      this.title_query = query
    },
    changeInputAuthor(query) {
      this.author_query = query
    },
    changeInputISBN(query) {
      this.isbn_query = query
    },
    changeSelectedCategory(item) {
      this.category_selected = item
    },
    changeSelectedCountry(item) {
      this.country_selected = item
    },
    querySubmit() {
      this.$emit('submittedQuery', this.queryConnect)
    },
    clearQuery() {
      this.title_query = ''
      this.author_query = ''
      this.isbn_query = ''
      this.category_selected = ''
      this.country_selected = ''
    },
  },
}
</script>

<style lang="scss" scoped>
.advancedSearch {
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  &_title {
    font-family: 'marukame', 'honokamaru', 'roboto';
    font-size: 2.4rem;
    font-weight: bold;
    color: $main-color;
  }
  &_wrap {
    padding: 24px 32px;
    border: 2px solid $main-color;
    border-radius: 4px;
  }
  &_list {
    display: flex;
    justify-content: left;
    list-style-type: none;
    flex-wrap: wrap;
  }
  &_item {
    margin-right: 40px;
    margin-top: 8px;
    &:nth-child(3n) {
      margin-right: 0;
    }
  }
  &_btns {
    display: flex;
    justify-content: flex-start;
    margin-top: 24px;
  }
  &_btn {
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
