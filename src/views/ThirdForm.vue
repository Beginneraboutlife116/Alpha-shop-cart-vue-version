<template>
  <div class="form__part">
    <p class="form__part-title">付款資訊</p>
    <div class="form__part-content form__third">
      <div class="form__part-content--row cardOwner">
        <label for="cardOwner" class="form__part-content--row--title"
          >持卡人姓名</label
        >
        <input
          type="text"
          id="cardOwner"
          name="cardOwner"
          class="form__part-content--row--text"
          placeholder="John Doe"
        />
      </div>
      <div class="form__part-content--row cardNum">
        <label for="cardNum" class="form__part-content--row--title"
          >卡號</label
        >
        <input
          type="text"
          id="cardNum"
          name="cardNum"
          class="form__part-content--row--text"
          placeholder="1111 2222 3333 4444"
        />
      </div>
      <div class="form__part-content--row cardDate">
        <label for="cardDate" class="form__part-content--row--title"
          >有效期限</label
        >
        <input
          type="date"
          id="cardDate"
          name="cardDate"
          class="form__part-content--row--date"
        />
      </div>
      <div class="form__part-content--row cardCVC-CCV">
        <label
          for="cardCVC-CCV"
          class="form__part-content--row--title"
          >CVC/CCV</label
        >
        <input
          type="text"
          id="cardCVC-CCV"
          class="form__part-content--row--number"
          maxlength="3"
          placeholder="123"
          name="cardCVC-CCV"
        />
      </div>
    </div>
  </div>
</template>
