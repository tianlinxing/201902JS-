<template>
<div class='swiper_box'>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div 
                v-for='(item,index) in list' 
                :key="index" 
                class="swiper-slide" 
                :style="`background-image:url(${item.img})`"></div>
            <!-- <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/img/nature2.jpg)"></div> -->
            <!-- <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/img/nature3.jpg)"></div> -->
            <!-- <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/img/nature4.jpg)"></div> -->
            <!-- <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/img/nature5.jpg)"></div> -->
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
    
</div>
</template>

<script>
import mySwiper from 'swiper'
export default {
    created() {
        if(this.list.length)return;
        // 若vuex中的  bannerList 有数据；说明已经请求过了，不用再去请求了；
        this.$store.dispatch('getBanner')
    },
    mounted() {
        console.log(this.list)
        // 在mounted执行时  this.list还是一个空数组
        // 这时的页面上 没有任何 swiper-slide，此时初始化 swiper
        // 没有我们想要的效果；
        this.init();
    },
    updated() {
        // 可以new 的前提是 页面上已经有了 各个轮播图；
        this.init();
    },
    // 组件中使用vuex数据，基本都是使用 computed
    computed:{
        list(){
            return this.$store.state.bannerList
        }
    },
    methods: {
        init(){
            // 初始化 轮播图
            new mySwiper(".swiper-container", {
                effect: "cube",
                grabCursor: true,
                loop:true,
                cubeEffect: {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                },
                pagination: {
                    el: ".swiper-pagination"
                }
            });
        }
    },
};
</script>

<style lang="less" scoped>
.swiper_box{
    position: relative;
    background: #ccc;
    height: 6rem;
    top: 1rem;
    overflow: hidden;
}
.swiper-container {
  width: 6rem;
  height: 6rem;
  position: absolute;
  left: 50%;
  margin-left: -3rem;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>