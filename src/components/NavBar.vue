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
import NavBarIcons from '@/components/NavBarIcons.vue'

export default {
  name: 'NavBar',
  components: {
    NavBarIcons
  }
}
</script>

<style lang="scss">
.nav {
  position: relative;
  width: 100%;
  height: 100%;
  @include flexArrange(false, center);
}

.toggleBox {
  @include flexArrange(false, center);
  cursor: pointer;
  @include lg {
    display: none;
  }
}

#toggleBox {
  display: none;
  &:checked + .menu {
    transform: scaleY(1);
  }
}

.menu {
  position: absolute;
  top: calc(100% - 1.6rem);
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  z-index: 1;
  transform: scaleY(0);
  transition: transform 0.2s;
  transform-origin: top;
  background-color: var(--body-bg);
  & ul {
    padding: 0;
    @include lg {
      width: 33%;
      @include flexArrange(space-between);
    }
  }
  &__list {
    padding-block: 2.4rem;
    border-bottom: 2px solid var(--nav-menu-list-bottom-border);
    text-align: center;
    &-link {
      text-decoration: none;
      color: var(--basic-color);
      &:hover {
        color: $main-button-color;
      }
    }
    @include lg {
      font-size: 1.4rem;
      border-bottom: none;
      @include xl {
        font-size: 1.6rem;
      }
    }
  }
  @include lg {
    position: relative;
    top: 0;
    height: 100%;
    transform: scaleY(1);
    @include flexArrange(space-between, center);
  }
}
</style>
