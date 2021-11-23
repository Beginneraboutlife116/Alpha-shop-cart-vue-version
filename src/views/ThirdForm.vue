<template>
  <div class="part">
    <p class="part__title">付款資訊</p>
    <div class="part__content third">
      <div class="part__content--row holder">
        <label for="holder" class="part__content-row--title"
          >持卡人姓名</label
        >
        <input
          type="text"
          id="holder"
          name="holder"
          class="part__content-row--text"
          placeholder="John Doe"
          required
          v-model.trim="thirdFormData.holder"
          ref="holder"
        />
      </div>
      <div class="part__content-row cardNum">
        <label for="cardNum" class="part__content-row--title"
          >卡號</label
        >
        <input
          type="text"
          id="cardNum"
          name="cardNum"
          class="part__content-row--text"
          placeholder="1111 2222 3333 4444"
          required
          v-model.trim="thirdFormData.cardNum"
        />
      </div>
      <div class="part__content-row expiredDate">
        <label for="expiredDate" class="part__content-row--title"
          >有效期限</label
        >
        <input
          type="date"
          id="expiredDate"
          name="expiredDate"
          class="part__content-row--date"
          required
          v-model="thirdFormData.date"
        />
      </div>
      <div class="part__content-row validId">
        <label
          for="validId"
          class="part__content-row--title"
          >CVC/CCV</label
        >
        <input
          type="text"
          id="validId"
          class="part__content-row--number"
          maxlength="3"
          placeholder="123"
          name="validId"
          required
          v-model="thirdFormData.validId"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThirdForm',
  data () {
    return {
      thirdFormData: {
        holder: '',
        cardNum: '',
        date: '',
        validId: ''
      }
    }
  },
  methods: {
    focusInput () {
      this.$refs.holder.focus()
    }
  },
  watch: {
    thirdFormData: {
      handler () {
        localStorage.setItem('third-form-data', JSON.stringify(this.thirdFormData))
      },
      deep: true
    }
  },
  created () {
    const { holder, cardNum, date, validId } = JSON.parse(localStorage.getItem('third-form-data')) || {}
    this.thirdFormData = {
      holder,
      cardNum,
      date,
      validId
    }
  },
  mounted () {
    this.focusInput()
  }
}
</script>

<style lang="scss">
@import '@/scss/components/_Form.scss';

$gridList: holder, cardNum, expiredDate, validId;
@each $val in $gridList {
  .#{$val} {
    grid-area: $val;
  }
}

.third {
  display: grid;
  grid-template-columns: 1fr 3rem 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "holder holder holder"
    "cardNum cardNum cardNum"
    "expiredDate . validId";
  row-gap: 1.6rem;
  @include md {
    grid-template-columns: 8fr 1fr 3fr 5fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
     "holder holder holder ."
     "cardNum cardNum cardNum ."
     "expiredDate . validId validId";
  }
}
</style>
