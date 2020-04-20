<template>
  <div>{{ book }}</div>
</template>

<script>
export default {
  asyncData({ params }) {
    return { id: params.id, book: params.bookDetail }
  },
}
</script>

<style lang="scss" scoped></style>
