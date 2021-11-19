<template>
  <section>
    <h1 class="checkout-title">結帳</h1>
    <form class="form-content" @submit.prevent="handleSubmit">
      <Stepper :initial-current-form="currentForm"/>
      <router-view class="forms"/>
      <ShoppingCart />
      <Buttons @update-form="updateCurrentForm"/>
    </form>
  </section>
</template>

<script>
import Stepper from '@/components/Stepper.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import Buttons from '@/components/Buttons.vue'

export default {
  name: 'Checkout',
  components: {
    Stepper,
    ShoppingCart,
    Buttons
  },
  data () {
    return {
      currentForm: 1
    }
  },
  methods: {
    updateCurrentForm (num) {
      this.currentForm = num
    },
    handleSubmit () {
      console.log('I am in Checkout')
    }
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

.forms {
  grid-area: forms;
}

.form-content {
  display: grid;
  grid-template-rows: auto 2.4rem auto 3.2rem auto 3.2rem auto;
  grid-template-areas:
    "stepper"
    "."
    "forms"
    "."
    "cart"
    "."
    "buttons";
  @include md {
    grid-template-columns: 17fr 4fr 14fr;
    grid-template-rows: auto 6.4rem auto 4.8rem auto;
    grid-template-areas:
      "stepper . cart"
      ". . cart"
      "forms . cart"
      ". . cart"
      "buttons . cart";
  }
}
</style>
