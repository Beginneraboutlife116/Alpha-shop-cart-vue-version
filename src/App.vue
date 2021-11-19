<template>
  <div id="app">
    <main class="main">
      <Header />
      <router-view @show-result="showResult"/>
    </main>
    <Footer />
    <div class="modal" :class="{disappear: notShow}" @click.stop.prevent="stopShowResult">
      <pre class="modal-content"> {{checkoutResult}} </pre>
    </div>
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
  },
  data () {
    return {
      checkoutResult: '',
      notShow: true
    }
  },
  methods: {
    showResult (payload) {
      this.checkoutResult = payload[0]
      this.notShow = payload[1]
    },
    stopShowResult () {
      this.notShow = !this.notShow
    }
  }
}
</script>

<style lang="scss">
.main {
  position: relative;
  padding-inline: 1.5rem;
  @include lg {
    padding-inline: 12%;
  }
}

.modal {
  position: absolute;
  display: grid;
  place-items: center;
  top: 4em;
  left: 0;
  right: 0;
  bottom: -4em;
  background-color: hsla(0, 0, 0, 0.05);
  &-content {
    z-index: 99;
    width: max-content;
    height: max-content;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0 0 5px 2px $main-button-color;
    background-color: var(--body-bg);
    color: var(--basic-color);
  }
}

.disappear {
  display: none;
}
</style>
