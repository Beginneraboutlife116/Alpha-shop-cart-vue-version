<template>
  <section class="checkout">
    <h1 class="checkout-title">結帳</h1>
    <form class="form-content" @submit.prevent="handleSubmit">
      <Stepper :current-form="currentForm"/>
      <router-view class="forms" @update-to-form="updateFromFirst" @update-shipping-fee="updateShippingFee"/>
      <ShoppingCart :initial-items="items" :initial-shipping-fee="formResult.shippingFee"   @update-total="updateTotal"/>
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
      items: [],
      formResult: {
        salutation: 'Mr.',
        username: '',
        phone: '',
        email: '',
        city: '',
        addr: '',
        shippingFee: 'std',
        ccname: '',
        cardnumber: '',
        expdate: '',
        cvv: '',
        totalPrice: ''
      }
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
      const form = event.target
      const formData = new FormData(form)
      const thirdFormData = [...formData.values()]
      this.formResult = {
        ...this.formResult,
        ccname: thirdFormData[0],
        cardnumber: thirdFormData[1],
        expdate: thirdFormData[2],
        cvv: thirdFormData[3]
      }
      for (const key in this.formResult) {
        console.log(`${key}: ${this.formResult[key]}`)
      }
      this.$emit('show-result', [this.formResult, false])
    },
    updateFromFirst (payload) {
      const { address, email, liveCity, name, phone, salutation } = payload
      this.formResult = {
        ...this.formResult,
        salutation,
        username: name || '',
        phone: phone || '',
        email: email || '',
        city: liveCity || '',
        addr: address || ''
      }
    },
    updateShippingFee (payload) {
      this.formResult.shippingFee = payload
    },
    updateTotal (payload) {
      this.formResult.totalPrice = payload
    }
  },
  computed: {
    currentForm: {
      get () {
        const fullPath = this.$route.fullPath
        const num = parseInt(fullPath[fullPath.length - 1])
        return num
      },
      set (fullPath) {
        fullPath = this.$route.fullPath
        const num = parseInt(fullPath[fullPath.length - 1])
        return num
      }
    }
  },
  created () {
    this.fetchItems()
    const { salutation, name, phone, email, liveCity, address } = JSON.parse(localStorage.getItem('first-form-data')) || {}
    const { deliveryWay } = JSON.parse(localStorage.getItem('second-form-data')) || {}
    this.formResult = {
      ...this.formResult,
      salutation,
      username: name || '',
      phone: phone || '',
      email: email || '',
      city: liveCity || '',
      addr: address || '',
      shippingFee: deliveryWay || 'std'
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
