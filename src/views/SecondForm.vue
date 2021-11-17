<template>
  <div class="part">
    <p class="part__title">運送方式</p>
    <div class="part__content second">
      <label for="std" class="delivery std" :class="{checked: deliveryWay === 'std'}">
        <input
          type="radio"
          id="std"
          name="delivery"
          class="delivery--radio"
          v-model="deliveryWay"
          value="std"
        />
        <div class="delivery__info">
          <p class="delivery__info-detail">
            <span>標準運送</span
            >
            <span>免費</span
            >
          </p>
          <p class="delivery__info-detail">
            <span class="delivery__info-detail--time"
              >約 3~7 個工作天</span
            >
          </p>
        </div>
      </label>
      <label for="dhl" class="delivery dhl" :class="{checked: deliveryWay === 'dhl'}">
        <input
          type="radio"
          id="dhl"
          name="delivery"
          class="delivery--radio"
          v-model="deliveryWay"
          value="dhl"
        />
        <div class="delivery__info">
          <p class="delivery__info-detail">
            <span>DHL貨運</span
            >
            <span>$500</span
            >
          </p>
          <p class="delivery__info-detail">
            <span class="delivery__info-detail--time"
              >48小時內送達</span
            >
          </p>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondForm',
  data () {
    return {
      deliveryWay: 'std'
    }
  }
}
</script>

<style lang="scss">
.part__title {
  margin-bottom: 2.4rem;
  font-size: 2.4rem;
  color: var(--basic-color);
}

.delivery {
  height: 6rem;
  @include flexArrange(flex-start);
  padding: 1rem 2rem;
  border: 1px solid var(--delivery-unchecked-border-color);
  border-radius: 0.4rem;
  cursor: pointer;
  &:first-child {
    margin-bottom: 2.4rem;
  }
  &--radio {
    appearance: none;
    flex-basis: 2rem;
    height: 2rem;
    margin-right: 2rem;
    border: 1px solid #333;
    border-radius: 50%;
    background-color: var(--delivery-radio-unchecked-bg-color);
    &:checked {
      background-color: white;
      border-width: 0.6rem;
    }
  }
  &__info {
    flex: 1;
    color: var(-basic-color);
    &-detail {
      @include flexArrange(space-between);
      font-size: 1.4rem;
      &--time {
        font-size: 1.2rem;
        color: var(--delivery-time-description);
      }
    }
  }
  @include md {
    margin-bottom: 9.6rem;
  }
}
.checked {
  border-color: var(--delivery-radio-checked-border-color);
}
</style>
