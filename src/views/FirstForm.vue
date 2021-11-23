<template>
  <div class="part">
    <p class="part__title">寄送地址</p>
    <div class="part__content first">
      <div class="part__content-row salutation">
        <label for="salutation" class="part__content-row--title"
          >稱謂</label
        >
        <div class="part__content-row--selectWrapper">
          <select
            name="salutation"
            id="salutation"
            class="part__content-row--select"
            v-model="firstFormData.salutation"
          >
            <option value="Mr.">先生</option>
            <option value="Ms.">小姐</option>
          </select>
        </div>
      </div>
      <div class="part__content-row name">
        <label for="name" class="part__content-row--title"
          >姓名</label
        >
        <input
          type="text"
          class="part__content-row--text"
          id="name"
          name="name"
          placeholder="請輸入姓名"
          v-model.trim="firstFormData.name"
          required
          ref="name"
        />
      </div>
      <div class="part__content-row phone">
        <label for="phone" class="part__content-row--title"
          >電話</label
        >
        <input
          type="text"
          class="part__content-row--text"
          id="phone"
          name="phone"
          placeholder="請輸入行動電話"
          v-model.trim="firstFormData.phone"
          required
        />
      </div>
      <div class="part__content-row email">
        <label for="email" class="part__content-row--title"
          >Email</label
        >
        <input
          type="email"
          class="part__content-row--email"
          id="email"
          name="email"
          placeholder="請輸入電子郵件"
          v-model.trim="firstFormData.email"
        />
      </div>
      <div class="part__content-row liveCity">
        <label for="liveCity" class="part__content-row--title"
          >縣市</label
        >
        <div class="part__content-row--selectWrapper">
          <select
            name="liveCity"
            id="liveCity"
            class="part__content-row--select"
            v-model="firstFormData.liveCity"
            required
          >
            <option value="" disabled selected>請選擇縣市</option>
            <option value="keelung">基隆</option>
            <option value="new-taipei">新北</option>
            <option value="taipei">台北</option>
            <option value="taoyuan">桃園</option>
            <option value="hsinchu">新竹</option>
            <option value="miaoli">苗栗</option>
            <option value="taichung">台中</option>
            <option value="changhua">彰化</option>
            <option value="Nantou">南投</option>
            <option value="yunlin">雲林</option>
            <option value="chiayi">嘉義</option>
            <option value="tainan">台南</option>
            <option value="kaohsiung">高雄</option>
            <option value="pingtung">屏東</option>
            <option value="yilan">宜蘭</option>
            <option value="hualien">花蓮</option>
            <option value="taitung">台東</option>
            <option value="" disabled>外島不送</option>
          </select>
        </div>
      </div>
      <div class="part__content-row address">
        <label for="address" class="part__content-row--title"
          >地址</label
        >
        <input
          type="text"
          class="part__content-row--text"
          id="address"
          name="address"
          placeholder="請輸入地址"
          v-model.trim="firstFormData.address"
          required
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstForm',
  data () {
    return {
      firstFormData: {}
    }
  },
  methods: {
    focusInput () {
      this.$refs.name.focus()
    },
    reloadPage () {
      const { salutation, name, phone, email, liveCity, address } = JSON.parse(localStorage.getItem('first-form-data')) || {}
      this.firstFormData = {
        salutation: salutation || 'Mr.',
        name,
        phone,
        email,
        liveCity: liveCity || '',
        address
      }
    }
  },
  watch: {
    firstFormData: {
      handler () {
        localStorage.setItem('first-form-data', JSON.stringify(this.firstFormData))
        this.$emit('update-to-form', this.firstFormData)
      },
      deep: true
    }
  },
  created () {
    this.reloadPage()
  },
  mounted () {
    this.focusInput()
  }
}
</script>

<style lang="scss">
@import '@/scss/components/_Form.scss';

$gridList: salutation, name, phone, email, liveCity, address;
@each $val in $gridList {
  .#{$val} {
    grid-area: $val;
  }
}

.first {
  display: grid;
  grid-template-columns: 4fr 3rem 5fr;
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    "salutation . name"
    "phone phone phone"
    "email email email"
    "liveCity liveCity liveCity"
    "address address address";
  row-gap: 1.6rem;
  @include md {
    grid-template-columns: 5fr 1fr 2fr 1fr 8fr;
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "salutation . name name name"
      "phone phone phone . email"
      "liveCity . address address address";
  }
}
</style>
