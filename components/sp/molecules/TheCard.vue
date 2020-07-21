<template>
  <div class="card_item">
    <a href="/" class="card_link">
      <figure class="card_figure">
        <img src="~/assets/images/dance.png" alt="dance" class="card_img" />
      </figure>
      <article class="card_textArea">
        <h1 class="card_title">title</h1>
        <p class="card_subTitle">subTitle</p>
      </article>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card {
  &_item {
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;
  }
  &_link {
    display: block;
    color: rbga(0, 0, 0, 0.77);
    transition: 0.2s ease-out;
    cursor: pointer;
    &:hover {
      text-decoration: none;
      color: rbga(0, 0, 0, 0.77);
    }
  }
  &_figure {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: calc((100vw - 20px) * 0.55);
    transition: 0.2 ease-out;
  }
}
</style>
