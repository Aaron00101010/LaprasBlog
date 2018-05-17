<template>
    <div class="wrapper">
        <div class="nav-con">
            <div class="logo">
                <i class="logo__icon"></i>
                <h3 class="logo__title">Aaron's Blog</h3>
            </div>
            <div class='menu'>
                <router-link v-for="item in menuList" :key="item.index" :to="item.link">
                    <span class="menu__link" :class="{'menu__link_active':activeIndex===item.index}" @click='setIndex(item.index)'>
                        {{item.name}}
                    </span>
                </router-link>
            </div>
            <div class="menu-mobile">
                <div class="menu-mobile__btn" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="menu-mobile__list" :class="{'menu-mobile__list_active':mobileMenuActive}">
                    <router-link v-for="item in menuList" :key="item.index" :to="item.link">
                        <span class="list__link" :class="{'list__link_active':activeIndex===item.index}" @click.self='setIndex(item.index)||toggleMenu()'>
                            {{item.name}}
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const menuList = [
      {
        name: 'Home',
        index: 0,
        link: { name: 'articalList' }
      },
      {
        name: 'Archive',
        index: 1,
        link: { name: 'archive' }
      },
      {
        name: 'Tags',
        index: 2,
        link: { name: 'tags' }
      },
      {
        name: 'About',
        index: 3,
        link: { name: 'about' }
      }
    ]

    export default {
      name: 'c-menu',
      data: function() {
        return {
          activeIndex: 0,
          mobileMenuActive: false,
          menuList
        }
      },
      methods: {
        setIndex(index) {
          this.activeIndex = index
        },
        toggleMenu() {
          this.mobileMenuActive = !this.mobileMenuActive
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
        font-size: 16px;
        font-weight: bold;
        display: block;
        cursor: pointer;
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
        user-select: none;
        &:active {
          background-color: lighten($divider-color, 10%);
        }
      }
      .menu-mobile__list {
        position: absolute;
        right: 5px;
        top: 30px;
        background-color: $primary-color;
        border-radius: 5px;
        display: none;
        height: 0;
        width: 0;
        transition: height, width 0.3s;
        overflow: hidden;
        z-index: 9999;
        .list__link {
          color: $primary-color-text;
          display: block;
          width: 100px;
          text-align: center;
          line-height: 2;
          transition: background-color 0.15s;
          cursor: pointer;
          &:active {
            background-color: $primary-color-dark;
          }
        }
      }
      .menu-mobile__list_active {
        display: block;
        width: 100px;
        height: auto;
      }
      .menu-mobile__btn {
        height: 18px;
        width: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        & > span {
          height: 2px;
          background-color: $primary-text-color;
          width: 100%;
        }
      }
    }
</style>


