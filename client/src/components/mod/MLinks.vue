<template>
    <div class="links">
        <h3>LINKS</h3>
        <div class="link__list">
            <a class="list__item" href="">年轮粉分</a>
            <a class="list__item" href="">年轮粉丝的积分</a>
            <a class="list__item" href="">年轮粉丝的积分</a>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'MLinks'
    }
</script>

<style lang="scss" scoped>
    @import "@/css/var.scss";
    .links {
        box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
        background-color: #fff;
        padding: 20px;
        color: $secondary-text-color;
        line-height: 1;
    }
    .about-me__avatar {
        margin: 20px 0;
        & > img {
            display: block;
            border-radius: 10px;
        }
    }
    .link__list {
        padding: 20px 0 0;
    }
    .list__item {
        line-height: 2;
        word-break: keep-all;
        color: $secondary-text-color;
    }
</style>