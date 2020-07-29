<template>
  <section class="sns">
    <div class="sns_wrap">
      <div class="sns_twitter">
        <a :href="twitter" target="_blank" rel="noopener">
          <img
            class="sns_twitter-icon"
            src="~assets/images/twitter.png"
            alt="twitterアイコン"
          />
        </a>
      </div>
      <div class="sns_github">
        <a :href="github" target="_blank" rel="noopener">
          <img
            class="sns_github-icon"
            src="~assets/images/github.png"
            alt="githubアイコン"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    twitter: {
      type: String,
      default: 'https://twitter.com/arrnasd',
    },
    github: {
      type: String,
      default: 'https://github.com/arrnarrnarrn/waiting_period_project',
    },
  },
}
</script>

<style lang="scss" scoped>
.sns {
  width: 100%;
  background: $back-white;
  &_wrap {
    width: 1040px;
    margin: 0 auto;
    padding: 32px 24px;
    display: flex;
    justify-content: center;
  }
  &_twitter {
    margin-right: 88px;
    &-icon {
      width: 80px;
      height: 80px;
    }
  }
  &_github {
    &-icon {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
