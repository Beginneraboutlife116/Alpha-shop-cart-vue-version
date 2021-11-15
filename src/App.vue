<template>
  <div id="app">
    <main class="main">
      <Header />
      <router-view/>
    </main>
    <footer class="footer">
      <!-- logo -->
      <!-- footer content -->
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import './scss/layout/App.scss';
</style>
