<template>
  <section>
    <h1 class="checkout-title">結帳</h1>
    <form class="form-content" @submit.prevent="handleSubmit">
      <Stepper :current-form="currentForm"/>
      <router-view class="forms"/>
      <ShoppingCart :initial-items="items"/>
      <Buttons :initial-current-form="currentForm" @update-form="updateCurrentForm"/>
    </form>
  </section>
</template>

<script>
import Stepper from '@/components/Stepper.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import Buttons from '@/components/Buttons.vue'

const dummyItemsData = [
  {
    id: 1,
    image: '/pants-1.png',
    name: '破壞補丁修身牛仔褲',
    price: 3999,
    numbers: 1
  },
  {
    id: 2,
    image: '/pants-2.png',
    name: '刷色直筒牛仔褲',
    price: 1299,
    numbers: 1
  }
]

export default {
  name: 'Checkout',
  components: {
    Stepper,
    ShoppingCart,
    Buttons
  },
  data () {
    return {
      currentForm: 1,
      items: []
    }
  },
  methods: {
    fetchItems () {
      this.items = [...dummyItemsData]
    },
    updateCurrentForm (num) {
      this.currentForm = num
    },
    handleSubmit () {
      console.log('I am in Checkout')
    },
    getCurrForm () {
      const fullPath = this.$route.fullPath
      const num = parseInt(fullPath[fullPath.length - 1])
      this.currentForm = num
    }
  },
  created () {
    this.fetchItems()
    this.getCurrForm()
  },
  updated () {
    this.getCurrForm()
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
