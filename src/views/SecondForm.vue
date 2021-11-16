<template>
  <div class="form__part">
    <p class="form__part-title">運送方式</p>
    <div class="form__part-content form__second">
      <label for="std" class="form__second-delivery std checked">
        <input
          type="radio"
          id="std"
          name="delivery"
          class="form__second-delivery--radio"
          checked
        />
        <div class="form__second-delivery-info">
          <p class="form__second-delivery-info-detail">
            <span class="form__second-delivery-info-detail--way"
              >標準運送</span
            >
            <span class="form__second-delivery-info-detail--fee"
              >免費</span
            >
          </p>
          <p class="form__second-delivery-info-detail">
            <span class="form__second-delivery-info-detail--time"
              >約 3~7 個工作天</span
            >
          </p>
        </div>
      </label>
      <label for="dhl" class="form__second-delivery dhl">
        <input
          type="radio"
          id="dhl"
          name="delivery"
          class="form__second-delivery--radio"
        />
        <div class="form__second-delivery-info">
          <p class="form__second-delivery-info-detail">
            <span class="form__second-delivery-info-detail--way"
              >DHL貨運</span
            >
            <span class="form__second-delivery-info-detail--fee"
              >$500</span
            >
          </p>
          <p class="form__second-delivery-info-detail">
            <span class="form__second-delivery-info-detail--time"
              >48小時內送達</span
            >
          </p>
        </div>
      </label>
    </div>
  </div>
</template>
