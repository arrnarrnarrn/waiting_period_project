<template>
  <section class="bookDetail">
    <ul class="bookDetail_wrap">
      <div class="bookDetail_basic">
        <img class="bookDetail_img" :src="thumbnail" alt="" />
        <ul class="bookDetail_basic-info">
          <h1 v-if="title" class="bookDetail_basic-info_title">
            {{ title }}
          </h1>
          <h2 v-if="subTitle" class="bookDetail_basic-info_title-sub">
            {{ subTitle }}
          </h2>
          <div v-if="authors" class="bookDetail_basic-info_authors">
            <span class="bookDetail_basic-info_authors-label">著者：</span>
            <div class="bookDetail_basic-info_authors_box">
              <p
                v-for="(author, index) in authors"
                :key="index"
                class="bookDetail_basic-info_author"
              >
                {{ author }}
              </p>
            </div>
          </div>
          <p v-if="publisher" class="bookDetail_basic-info_publisher">
            出版社：{{ publisher }}
          </p>
          <p v-if="publishedDate" class="bookDetail_basic-info_publishedDate">
            出版日：{{ publishedDate }}
          </p>
          <p v-if="pageCount" class="bookDetail_basic-info_page">
            ページ数：{{ pageCount }}
          </p>
          <p v-if="mainCategory" class="bookDetail_basic-info_mainCategory">
            メインカテゴリ：{{ mainCategory }}
          </p>
          <div v-if="categories" class="bookDetail_basic-info_categories">
            <span class="bookDetail_basic-info_categories-label">
              カテゴリ：
            </span>
            <div class="bookDetail_basic-info_categories_box">
              <p
                v-for="(category, index) in categories"
                :key="index"
                class="bookDetail_basic-info_category"
              >
                {{ category }}
              </p>
            </div>
          </div>
          <p v-if="isbn10" class="bookDetail_basic-info_isbn10">
            ISBN10：{{ isbn10.identifier }}
          </p>
          <p v-if="isbn13" class="bookDetail_basic-info_isbn13">
            ISBN13：{{ isbn13.identifier }}
          </p>
          <p v-if="country" class="bookDetail_basic-info_language">
            言語：{{ country }}
          </p>
        </ul>
      </div>
      <h2 v-if="description" class="bookDetail_description">概要</h2>
      <p v-if="description" class="bookDetail_description-text">
        {{ description }}
      </p>
    </ul>
  </section>
</template>

<script>
import altImg from '~/assets/images/image_not_found.jpg'
export default {
  props: {
    book: {
      type: Object,
      default: () => {},
    },
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      altSrc: altImg,
    }
  },
  computed: {
    thumbnail() {
      if (!this.book) return false
      if (!this.book.volumeInfo.imageLinks) {
        return this.altSrc
      }
      return this.book.volumeInfo.imageLinks.thumbnail
    },
    title() {
      if (!this.book) return false
      if (!this.book.volumeInfo.title) {
        return ''
      }
      return this.book.volumeInfo.title
    },
    subTitle() {
      if (!this.book) return false
      if (!this.book.volumeInfo.subtitle) {
        return ''
      }
      return this.book.volumeInfo.subtitle
    },
    authors() {
      if (!this.book) return false
      if (!this.book.volumeInfo.authors) {
        return false
      }
      return this.book.volumeInfo.authors
    },
    publisher() {
      if (!this.book) return false
      if (!this.book.volumeInfo.publisher) {
        return ''
      }
      return this.book.volumeInfo.publisher
    },
    publishedDate() {
      if (!this.book) return false
      if (!this.book.volumeInfo.publishedDate) {
        return ''
      }
      return this.book.volumeInfo.publishedDate
    },
    mainCategory() {
      if (!this.book) return false
      if (!this.book.volumeInfo.mainCategory) {
        return ''
      }
      return this.book.volumeInfo.mainCategory
    },
    categories() {
      if (!this.book) return false
      if (!this.book.volumeInfo.categories) {
        return false
      }
      return this.book.volumeInfo.categories
    },
    pageCount() {
      if (!this.book) return false
      if (!this.book.volumeInfo.pageCount) {
        return ''
      }
      return this.book.volumeInfo.pageCount
    },
    isbn10() {
      if (!this.book) return false
      if (!this.book.volumeInfo.industryIdentifiers) {
        return false
      }
      const isbn10 = this.book.volumeInfo.industryIdentifiers.find((obj) => {
        return obj.type === 'ISBN_10'
      })
      return isbn10
    },
    isbn13() {
      if (!this.book) return false
      if (!this.book.volumeInfo.industryIdentifiers) {
        return false
      }
      const isbn13 = this.book.volumeInfo.industryIdentifiers.find((obj) => {
        return obj.type === 'ISBN_13'
      })
      return isbn13
    },
    country() {
      if (!this.book) return false
      if (!this.book.saleInfo.country) {
        return ''
      }
      return this.book.saleInfo.country
    },
    description() {
      if (!this.book) return false
      if (!this.book.volumeInfo.description) {
        return ''
      }
      return this.book.volumeInfo.description
    },
  },
}
</script>

<style lang="scss" scoped>
.bookDetail {
  width: 100%;
  &_wrap {
    width: 1040px;
    padding: 56px 24px;
    margin: 0 auto;
  }
  &_img {
    width: 240px;
    height: 345px;
  }
  &_basic {
    display: flex;
    margin-bottom: 24px;
    &-info {
      flex: 1;
      margin-left: 32px;
      color: $main-color;
      font-weight: bold;
      font-size: 1.8rem;
      &_title {
        font-size: 2.4rem;
        margin-bottom: 8px;
        &-sub {
          margin-bottom: 8px;
        }
      }
      &_authors {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        &_box {
          flex: 1;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
      }
      &_author {
        &::after {
          content: ',';
          margin-right: 8px;
        }
        &:last-of-type::after {
          content: none;
          margin-right: 0;
        }
      }
      &_publisher {
        margin-bottom: 8px;
      }
      &_publishedDate {
        margin-bottom: 8px;
      }
      &_page {
        margin-bottom: 8px;
      }
      &_mainCategory {
        margin-bottom: 8px;
      }
      &_categories {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        &_box {
          flex: 1;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
      }
      &_category {
        &::after {
          content: ',';
          margin-right: 8px;
        }
        &:last-of-type::after {
          content: none;
          margin-right: 0;
        }
      }
      &_isbn10 {
        margin-bottom: 8px;
      }
      &_isbn13 {
        margin-bottom: 8px;
      }
    }
  }
  &_description {
    color: $main-color;
    font-size: 2.4rem;
    margin-bottom: 4px;
    &-text {
      color: $main-color;
      font-size: 1.8rem;
      text-align: justify;
      text-justify: inter-ideograph;
    }
  }
}
</style>
