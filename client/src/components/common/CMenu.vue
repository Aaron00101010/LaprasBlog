<template>
    <div class="wrapper">
        <div class="nav-con">
            <div class="logo">
                <i class="logo__icon"></i>
                <h3 class="logo__title">Aaron's Blog</h3>
            </div>
            <div class='menu'>
<<<<<<< HEAD
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

=======
                <router-link 
                    v-for="item in menuList" 
                    :key="item.index"  
                    :to="item.link"
                >
                    <span class="menu__link" 
                      :class="{'menu__link_active':activeIndex===item.index}" 
                      @click='setIndex(item.index)'>
                      {{item.name}}
                    </span>  
                </router-link>
            </div>
            <div class="menu-mobile" >
                <div class="menu-mobile__btn" @click.self="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="menu-mobile__list" :class="{'menu-mobile__list_active':mobileMenuActive}">
                    <router-link 
                        v-for="item in menuList" 
                        :key="item.index"  
                        :to="item.link">
                        <span class="list__link" 
                            :class="{'list__link_active':activeIndex===item.index}" 
                            @click.self='setIndex(item.index)||toggleMenu()'>
                        {{item.name}}
                        </span>  
                    </router-link>
>>>>>>> dev
                </div>
            </div>
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
    export default {
      name: 'c-menu',
      data: function() {
        return { activeIndex: 0 }
=======
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
>>>>>>> dev
      },
      methods: {
        setIndex(index) {
          this.activeIndex = index
<<<<<<< HEAD
=======
        },
        toggleMenu() {
          this.mobileMenuActive = !this.mobileMenuActive
>>>>>>> dev
        }
      }
    }
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
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
=======
    @import "@/css/var.scss";
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
>>>>>>> dev
    }
    .logo {
    }
    .logo__title {
<<<<<<< HEAD
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
=======
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
            height: 15px;
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
>>>>>>> dev
    }
</style>


