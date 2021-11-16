<template>
  <nav class="nav">
    <label class="toggleBox" for="toggleBox">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
        <path d="M0 6.25H15V8.75H0V6.25ZM0 0H20V2.5H0V0ZM0 15H9.04375V12.5H0V15Z" fill="#2A2A2A"/>
      </svg>
    </label>
    <input type="checkbox" id="toggleBox">
    <menu class="menu">
      <ul>
        <li class="menu__list">
          <router-link to='/men' class="menu__list-link">男裝</router-link>
        </li>
        <li class="menu__list">
          <router-link to='/women' class="menu__list-link">女裝</router-link>
        </li>
        <li class="menu__list">
          <router-link to='/news' class="menu__list-link">最新消息</router-link>
        </li>
        <li class="menu__list">
          <router-link to='/customaization' class="menu__list-link">客製商品</router-link>
        </li>
        <li class="menu__list">
          <router-link to='/contactus' class="menu__list-link">聯絡我們</router-link>
        </li>
      </ul>
      <NavBarIcons />
    </menu>
  </nav>
</template>

<script>
import NavBarIcons from './NavBarIcons.vue'

export default {
  name: 'NavBar',
  components: {
    NavBarIcons
  }
}
</script>

<style lang="scss">
@import '../scss/components/NavBar.scss';
</style>
