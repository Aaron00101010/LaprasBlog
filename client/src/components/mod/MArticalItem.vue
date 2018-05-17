<template>
<<<<<<< HEAD
    
</template>
=======
    <div class="artical-item">
        <h2 class="item__tit">{{title}}</h2>
        <h4 class="item__subtit">{{subtit}}</h4>
        <div class="item__date">
            <span v-if='date'>date:2017-08-26 </span>  
            <span v-if='update'>update: 2017-08-25</span>
        </div>
        <section class="item__preview">
            {{preview}}
        </section>
    </div>
</template>
<script>
    const itemData = {
      id: 1,
      title: '哈哈哈哈哈哈啊哈哈',
      subtit: 'the quick brown fox jump over the lazy dog',
      date: '2017-02-03',
      update: '2017-03-06',
      preview:
        '达拉斯的风景阿萨德飞机撒开的房间爱上飞机上的可乐放进来撒打飞机奥斯卡的房间爱上飞机啊速度快解放路口时代峰峻萨克砥砺奋进'
    }
    export default {
      name: 'artical-item',
      data() {
        return itemData
      }
    }
</script>
<style lang="scss" scoped>
    @import "@/css/var.scss";
    .artical-item {
        background-color: #fff;
        padding: 20px 20px;
        box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
        margin-bottom: 10px;
    }
    .item__tit {
        color: $primary-text-color;
        line-height: 1.5;
        font-size: 24px;
        font-weight: normal;
        line-height: 1;
        margin-bottom: 15px;
    }
    .item__subtit {
        color: $secondary-text-color;
        font-size: 18px;
        margin-bottom: 5px;
        font-weight: lighter;
        line-height: 1;
        margin-bottom: 15px;
    }
    .item__date {
        color: $secondary-text-color;
        line-height: 1;
    }
    .item__preview {
        padding: 15px 0 0;
    }
    .item__link {
        color: $primary-color;
    }
</style>
>>>>>>> dev
