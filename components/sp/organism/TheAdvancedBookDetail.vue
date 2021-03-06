<template>
  <section class="bookDetail">
    <div class="bookDetail_wrap">
      <div class="bookDetail_basic">
        <img class="bookDetail_img" :src="thumbnail" alt="" />
        <div class="bookDetail_basic-info">
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
        </div>
      </div>
      <h2 v-if="description" class="bookDetail_description">概要</h2>
      <p v-if="description" class="bookDetail_description-text">
        {{ description }}
      </p>
      <div v-if="buyLink" class="bookDetail_buyLink">
        <the-basic-button-link :link="buyLink" link-text="購入" />
      </div>
    </div>
  </section>
</template>

<script>
import altImg from '~/assets/images/image_not_found.jpg'
import TheBasicButtonLink from '@/components/sp/atoms/TheBasicButtonLink.vue'
export default {
  components: {
    TheBasicButtonLink,
  },
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
      return this.book?.volumeInfo?.imageLinks?.thumbnail
        ? this.replacedAmp(this.book.volumeInfo.imageLinks.thumbnail)
        : this.altSrc
    },
    title() {
      return this.book?.volumeInfo?.title ?? ''
    },
    subTitle() {
      return this.book?.volumeInfo?.subtitle ?? ''
    },
    authors() {
      return this.book?.volumeInfo?.authors ?? ''
    },
    publisher() {
      return this.book?.volumeInfo?.publisher ?? ''
    },
    publishedDate() {
      return this.book?.volumeInfo?.publishedDate ?? ''
    },
    mainCategory() {
      return this.book?.volumeInfo?.mainCategory ?? ''
    },
    categories() {
      return this.book?.volumeInfo?.categories ?? ''
    },
    pageCount() {
      return this.book?.volumeInfo?.pageCount ?? ''
    },
    isbn10() {
      if (!this.book?.volumeInfo?.industryIdentifiers) return ''
      const isbn10 = this.book.volumeInfo.industryIdentifiers.find((obj) => {
        return obj.type === 'ISBN_10'
      })
      return isbn10
    },
    isbn13() {
      if (!this.book?.volumeInfo?.industryIdentifiers) return ''
      const isbn13 = this.book.volumeInfo.industryIdentifiers.find((obj) => {
        return obj.type === 'ISBN_13'
      })
      return isbn13
    },
    country() {
      return this.book?.volumeInfo?.language ?? ''
    },
    description() {
      return this.book?.volumeInfo?.description ?? ''
    },
    buyLink() {
      return this.book?.volumeInfo?.infoLink ?? ''
    },
  },
}
</script>

<style lang="scss" scoped>
.bookDetail {
  width: 100%;
  &_wrap {
    padding: 24px 16px;
    margin: 0 auto;
  }
  &_img {
    width: 160px;
    height: auto;
    margin-bottom: 16px;
  }
  &_basic {
    margin-bottom: 16px;
    &-info {
      flex: 1;
      color: $main-color;
      font-weight: bold;
      font-size: 1.4rem;
      &_title {
        font-size: 1.8rem;
        margin-bottom: 8px;
        &-sub {
          font-size: 1.6rem;
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
    font-size: 1.6rem;
    margin-bottom: 4px;
    &-text {
      color: $main-color;
      font-size: 1.4rem;
      text-align: justify;
      text-justify: inter-ideograph;
    }
  }
  &_buyLink {
    margin-top: 16px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
