<template>
    <div class="about-me">
        <h3>ABOUT ME</h3>
        <div class="about-me__avatar">
            <img src="http://placehold.it/140x140" height="140" width="140">
        </div>
        <div class="about-me__bio">
            May Long The Sun Shine!
        </div>
    </div>
</template>
<script>
    export default {
      name: 'MAboutMe'
    }
</script>

<style lang="scss" scoped>
    @import "@/css/var.scss";
    .about-me {
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
</style>

