<template>
  <div id="app">
    <main class="main">
      <Header />
      <router-view/>
    </main>
    <footer class="footer">
      <!-- footer content -->
    </footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
