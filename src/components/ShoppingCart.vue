<template>
  <div class="cart">
    <p class="cart__title">購物籃</p>
    <div class="cart__item" v-for="item of items" :key="item.id">
      <img
        :src="item.image"
        :alt="item.name"
        class="cart__item-picture"
      />
      <div class="cart__item-content">
        <p class="cart__item-content-name"> {{item.name}} </p>
        <div class="cart__item-content-amout">
          <input type="button" value="-" class="cart__item-content-amout--btn minus" @click="reduceAmout(item.id)">
          <input type="number" step="1" max="99" name="quantity" class="cart__item-content-amout--number" v-model="item.numbers">
          <input type="button" value="+" class="cart__item-content-amout--btn plus" @click="increaseAmout(item.id)">
        </div>
        <p class="cart__item-content-price"> {{item.price.toLocaleString()}} </p>
      </div>
    </div>
    <div class="cart__deliveryFee">
      <span class="cart__deliveryFee--fee">運費</span>
      <span class="cart__deliveryFee--price">免費</span>
    </div>
    <div class="cart__price">
      <span class="cart__price--total">小計</span>
      <span class="cart__price--price"> {{total}} </span>
    </div>
  </div>
</template>

<script>
const dummyData = [
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
  name: 'ShoppingCart',
  data () {
    return {
      items: []
      // TODO: 傳入shipping的資料
    }
  },
  methods: {
    fetchItems () {
      this.items = [...dummyData]
    },
    reduceAmout (id) {
      this.items = this.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            numbers: !item.numbers ? 0 : (item.numbers - 1)
          }
        } else {
          return {
            ...item
          }
        }
      })
    },
    increaseAmout (id) {
      this.items = this.items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            numbers: item.numbers + 1
          }
        } else {
          return {
            ...item
          }
        }
      })
    }
  },
  created () {
    this.fetchItems()
  },
  computed: {
    total () {
      // TODO: 還沒有加入shipping的值
      let total = 0
      this.items.forEach(item => {
        total += parseInt(item.numbers) * parseInt(item.price)
      })
      return `$ ${total.toLocaleString()}`
    }
  }
}
</script>

<style lang="scss">
.cart {
  grid-area: cart;
  min-height: 35.8rem;
  max-height: 49.2rem;
  padding: 1.6rem;
  border: 1px solid var(--cart-border);
  border-radius: 0.8rem;
  color: var(--basic-color);
  background-color: var(--cart-bg);
  &__title {
    display: none;
  }
  &__item {
    @include flexArrange(space-between);
    margin-bottom: 1.6rem;
    &-picture {
      width: 10rem;
      height: 10rem;
    }
    &-content {
      @include flexArrange(space-between, flex-end);
      flex-direction: column;
      &-amout {
        width: 11.6rem;
        height: 2.7rem;
        @include flexArrange(space-between);
        &--btn {
          height: 100%;
          aspect-ratio: 1;
          cursor: pointer;
        }
        & .minus,
        & .plus {
          padding: 0;
          border-radius: 50%;
          border: none;
          font-weight: bold;
          font-size: 2.4rem;
          line-height: 100%;
          background-color: var(--cart-btn-bg);
        }
        &--number {
          border: none;
          text-align: center;
          width: 3ch;
          background-color: transparent;
          color: var(--basic-color);
          -moz-appearance: textfield;
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            appearance: none;
            margin: 0;
          }
        }
      }
      @include xl {
        flex: 1;
        display: grid;
        grid-template-columns: max-content max-content;
        grid-template-rows: 1fr 2fr;
        grid-auto-flow: column;
        align-items: flex-start;
        margin-left: 2.1rem;
      }
    }
  }
  &__deliveryFee,
  &__price {
    @include flexArrange(space-between);
    padding: 1.6rem;
    border-top: 1px solid var(--cart-info-divider);
  }
  &__price {
    padding-bottom: 0;
  }
  @include md {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.4rem;
    &__title {
      display: block;
      margin-top: 0.8rem;
      font-size: 1.8rem;
      font-weight: bold;
      color: var(--basic-color);
    }
    &__price {
      padding-bottom: 1.6rem;
    }
  }
}
</style>
