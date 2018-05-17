<template>
    <div>
        <div class='tags'>
            <h2>Tags</h2>
            <ul>
                <li>js</li>
                <li>html</li>
                <li>css</li>
            </ul>
        </div>
        <div class='tags'>
            <h2>Artical</h2>
            <ul>
                <li>hello</li>
                <li>world</li>
                <li>hehe</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
      name: 'PTags'
    }
</script>
<style lang="scss" scope>
    @import '@/css/mixin.scss';
    .tags {
      @include cardShadow();
      padding: 20px;
      background: #fff;
      margin-bottom: 10px;
    }
</style>