<template>
    <div>
        <!-- 首页
        当前数字是{{count}}
        <button @click='add'>增加</button>
        <button @click='remove'>减少</button>

        <button @click='add2'>异步增加</button> -->
        <mytil>首页</mytil>
        <my-swiper></my-swiper>
        <hotbook></hotbook>
    </div>
</template>

<script>
import title from '../../common/title.vue'
import mySwiper from './swiper.vue'
import hotbook from './hotbook.vue'
    export default {
        data() {
            return {
                name123: '珠峰'
            }
        },
        components:{
            mytil:title,
            'my-swiper':mySwiper,
            hotbook
        },
        computed: {
            count() {
                return this.$store.state.count;
                // 调用 vuex中的公用数据
            }
        },
        methods: {
            add() {
                // 调用 mutations中的add 函数
                this.$store.commit('add');
            },
            remove() {
                // 调用 mutations中的remove 函数
                this.$store.commit('remove');
            },
            add2(){
                // 调用 actions中的 addFn 函数
                this.$store.dispatch('addFn')
            }
        },
    }
</script>

<style lang="less" scoped>

</style>