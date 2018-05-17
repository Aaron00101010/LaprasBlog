<template>
    <div class="archive">
        <h2 class="archive__tit">归档</h2>
        <div class="archive__year">
            <h2 class="year">2018</h2>
            <div class="archive__month">
                <h3 class="month">5月</h3>
                <ul class="artical__list">
                    <li class="tit">
                        <router-link to='/artical/1'>
                            dfasdfasdfasdfasd
                        </router-link>
                    </li>
                </ul>
            </div>

        </div>
        <!-- <div class="no-data">
            空空如也
        </div> -->
    </div>
</template>

<script>
export default {
  name: 'PArchive'
}
</script>
<style lang="scss" scoped>
@import '@/css/var.scss';
@import '@/css/mixin.scss';

.archive {
  background: #fff;
  @include cardShadow();
  padding: 20px;
}
.archive__tit {
  line-height: 1;
  margin-bottom: 20px;
}
.year {
  color: $secondary-text-color;
}
</style>
