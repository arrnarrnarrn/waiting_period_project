<template>
  <div class="simpleBook">
    <nuxt-link
      :to="{
        name: 'detail-id',
        params: { id: bookId, bookDetail: book },
      }"
      class="simpleBook_link"
    >
      <img class="simpleBook_img" :src="thumbnail" alt="" />
    </nuxt-link>
    <div>
      <ul class="simpleBook_basic-info">
        <h1 v-if="title" class="simpleBook_basic-info_title">
          {{ title }}
        </h1>
        <h2 v-if="subTitle" class="simpleBook_basic-info_title-sub">
          {{ subTitle }}
        </h2>
        <div v-if="authors" class="simpleBook_basic-info_authors">
          <span class="simpleBook_basic-info_authors-label">著者：</span>
          <div class="simpleBook_basic-info_authors_box">
            <p
              v-for="(author, index) in authors"
              :key="index"
              class="simpleBook_basic-info_author"
            >
              {{ author }}
            </p>
          </div>
        </div>
        <p v-if="publisher" class="simpleBook_basic-info_publisher">
          出版社：{{ publisher }}
        </p>
        <p v-if="publishedDate" class="simpleBook_basic-info_publishedDate">
          出版日：{{ publishedDate }}
        </p>
        <p v-if="mainCategory" class="simpleBook_basic-info_mainCategory">
          メインカテゴリ：{{ mainCategory }}
        </p>
        <div v-if="categories" class="simpleBook_basic-info_categories">
          <span class="simpleBook_basic-info_categories-label">
            カテゴリ：
          </span>
          <div class="simpleBook_basic-info_categories_box">
            <p
              v-for="(category, index) in categories"
              :key="index"
              class="simpleBook_basic-info_category"
            >
              {{ category }}
            </p>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import altImg from '~/assets/images/image_not_found.jpg'
export default {
  props: {
    book: {
      type: Object,
      default: () => {},
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
    bookId() {
      return this.book?.id ?? ''
    },
    title() {
      return this.book?.volumeInfo?.title
        ? this.truncate(this.book.volumeInfo.title, 32)
        : ''
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
  },
}
</script>

<style lang="scss" scoped>
.simpleBook {
  width: 100%;
  display: flex;
  &_img {
    width: 149px;
    height: auto;
    transition: opacity 0.2s ease-out;
    &:hover {
      opacity: 0.7;
    }
  }
  &_basic {
    display: flex;
    margin-bottom: 24px;
    &-info {
      flex: 1;
      margin-left: 16px;
      color: $main-color;
      font-weight: bold;
      font-size: 1.8rem;
      &_title {
        font-size: 2.4rem;
        margin-bottom: 8px;
        &-sub {
          font-size: 1.8rem;
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
    }
  }
}
</style>
