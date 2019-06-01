<template>
<div class='swiper_box'>
    {{list}}
    <div class="swiper-container">
        <div class="swiper-wrapper">
                <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/img/nature1.jpg)"></div>
                <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/img/nature2.jpg)"></div>
                <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/img/nature3.jpg)"></div>
                <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/img/nature4.jpg)"></div>
                <div class="swiper-slide" style="background-image:url(https://www.swiper.com.cn/demo/img/nature5.jpg)"></div>
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
        this.$store.dispatch('getBanner')
    },
    mounted() {
        new mySwiper(".swiper-container", {
        effect: "cube",
        grabCursor: true,
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
    },
    // 组件中使用vuex数据，基本都是使用 computed
    computed:{
        list(){
            return this.$store.state.bannerList
        }
    }
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