<template>
    <div class="wrapper">
        <div class="nav-con">
            <div class="logo">
                <i class="logo__icon"></i>
                <h3 class="logo__title">Aaron's Blog</h3>
            </div>
            <div class='menu'>
                <router-link :to='{name:"articalList"}'>
                    <span class="menu__link" :class="{'menu__link_active':activeIndex===0}" @click='setIndex(0)'>Home</span>
                </router-link>
                <router-link :to='{name:"archive"}'>
                    <span class="menu__link" :class="{'menu__link_active':activeIndex===1}" @click='setIndex(1)'>Archive</span>
                </router-link>
                <router-link :to='{name:"tags"}'>
                    <span class="menu__link" :class="{'menu__link_active':activeIndex===2}" @click='setIndex(2)'>Tags</span>
                </router-link>
                <router-link :to='{name:"about",params:{id:2}}'>
                    <span class="menu__link" :class="{'menu__link_active':activeIndex===3}" @click='setIndex(3)'>About</span>
                </router-link>
            </div>
            <div class="menu-mobile">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" />
                    <path fill="none" d="M0 0h24v24H0V0z" />
                </svg>
                <div class="menu-mobile__list">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'c-menu',
      data: function() {
        return { activeIndex: 0 }
      },
      methods: {
        setIndex(index) {
          this.activeIndex = index
        }
      }
    }
</script>

<style lang="scss" scoped>
    @import '@/css/var.scss';
    .wrapper {
      box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
      background-color: $primary-color-text;
    }
    .nav-con {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      max-width: $page-max-width;
      padding: 0 15px;
      height: 44px;
    }
    .logo {
    }
    .logo__title {
      color: $primary-text-color;
    }

    .menu {
      display: flex;
      .menu__link {
        font-size: 14px;
        display: block;
        color: $secondary-text-color;
        padding: 10px 15px;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
        transition: color, border-bottom-color 0.2s;
      }
      .menu__link:hover {
        color: $primary-color;
      }
      .menu__link_active {
        border-bottom-color: $primary-color;
        color: $primary-color;
      }
    }

    .menu-mobile {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      .menu {
        display: none;
      }
      .menu-mobile {
        display: block;
        cursor: pointer;
        position: relative;
        height: 30px;
        width: 30px;
        transition: background-color 0.2s;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select:none;
        &:active {
          background-color: lighten($divider-color, 10%);
        }
      }
    }
</style>


