<template>
  <div id="app">
    <main class="main">
      <Header />
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
.main {
  padding-inline: 1.5rem;
  @include lg {
    padding-inline: 12%;
  }
}
</style>
