<template>
    <div class="wrapper">
        menu
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
  data: function () {
    return {
      activeIndex: 0,
      mobileMenuActive: false,
      menuList
    }
  },
  methods: {
    setIndex (index) {
      this.activeIndex = index
    },
    toggleMenu () {
      this.mobileMenuActive = !this.mobileMenuActive
    }
  }
}
</script>
