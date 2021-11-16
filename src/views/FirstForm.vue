<template>
  <div class="form__part">
    <p class="form__part-title">寄送地址</p>
    <div class="form__part-content form__first">
      <div class="form__part-content--row mrms">
        <label for="mrms" class="form__part-content--row--title"
          >稱謂</label
        >
        <div class="form__part-content--row--selectWrapper">
          <select
            name="mrms"
            id="mrms"
            class="form__part-content--row--select"
          >
            <option value="Mr.">先生</option>
            <option value="Ms.">小姐</option>
          </select>
        </div>
      </div>
      <div class="form__part-content--row name">
        <label for="name" class="form__part-content--row--title"
          >姓名</label
        >
        <input
          type="text"
          class="form__part-content--row--text"
          id="name"
          name="name"
          placeholder="請輸入姓名"
          required
        />
      </div>
      <div class="form__part-content--row phone">
        <label for="phone" class="form__part-content--row--title"
          >電話</label
        >
        <input
          type="text"
          class="form__part-content--row--text"
          id="phone"
          name="phone"
          placeholder="請輸入行動電話"
          required
        />
      </div>
      <div class="form__part-content--row email">
        <label for="email" class="form__part-content--row--title"
          >Email</label
        >
        <input
          type="email"
          class="form__part-content--row--email"
          id="email"
          name="email"
          placeholder="請輸入電子郵件"
        />
      </div>
      <div class="form__part-content--row liveCity">
        <label for="liveCity" class="form__part-content--row--title"
          >縣市</label
        >
        <div class="form__part-content--row--selectWrapper">
          <select
            name="liveCity"
            id="liveCity"
            class="form__part-content--row--select"
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
      <div class="form__part-content--row address">
        <label for="address" class="form__part-content--row--title"
          >地址</label
        >
        <input
          type="text"
          class="form__part-content--row--text"
          id="address"
          name="address"
          placeholder="請輸入地址"
        />
      </div>
    </div>
  </div>
</template>
