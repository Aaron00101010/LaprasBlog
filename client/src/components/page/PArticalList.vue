<template>
<<<<<<< HEAD
    <div class='artical-list-box'>
        artical-list1
    </div>
</template>
<script>
    export default {
      name: 'PArticalList'
    }
</script>
<style lang="scss" scoped>
=======
    <div class="content-wrapper">
        <div class='artical-list-box'>
            <m-artical-item></m-artical-item>
            <m-artical-item></m-artical-item>
            <m-artical-item></m-artical-item>
            <div class="pager">
                <a class="pager__btn" href="">PREVIOUS POSTS</a>
                <a class="pager__btn" href="">NEXT POSTS</a>
            </div>
        </div>
        <div class="side-bar-box">
            <m-about-me></m-about-me>
            <div style="height:10px;"></div>
            <m-links></m-links>
        </div>
    </div>
</template>
<script>
    import MArticalItem from '@/components/mod/MArticalItem'
    import MAboutMe from '@/components/mod/MAboutMe'
    import MLinks from '@/components/mod/MLinks'
    export default {
      name: 'PArticalList',
      components: {
        MArticalItem,
        MAboutMe,
        MLinks
      }
    }
</script>
<style lang="scss" scoped>
    @import "@/css/var.scss";
    .content-wrapper {
        width: 100%;
        display: flex;
    }
    .artical-list-box {
        flex-shrink: 1;
    }
    .side-bar-box {
        width: 269px;
        margin-left: 10px;
    }
    .pager {
        display: flex;
        justify-content: space-between;
    }
    .pager__btn {
        display: block;
        line-height: 3;
        background: #fff;
        font-weight: bold;
        width: 150px;
        text-align: center;
        transition: color, background-color 0.3s;
        &:hover {
            color: #fff;
            background-color: $primary-color;
        }
    }
>>>>>>> dev
</style>
