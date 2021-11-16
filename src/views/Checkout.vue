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
import Stepper from '@/components/Stepper.vue'

export default {
  name: 'Checkout',
  components: {
    Stepper
  }
}
</script>

<style lang="scss">
.checkout-title {
  margin-block: 1.6rem 2.4rem;
  font-size: 2.4rem;
  color: var(--basic-color);
  @include md {
    font-size: 3.2rem;
    margin-block: 8rem 4.8rem;
  }
}
</style>
