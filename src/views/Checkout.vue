<template>
  <section>
    <h1 class="checkout-title">結帳</h1>
    <section class="checkout-content">
      <Stepper />
      <!-- form -->
      <!-- shoppingCart -->
      <!-- buttons -->
    </section>
  </section>
</template>

<script>
import Stepper from '../components/Stepper.vue'

export default {
  name: 'Checkout',
  components: {
    Stepper
  }
}
</script>

<style lang="scss">
@import '../scss/layout/Checkout.scss';
</style>
