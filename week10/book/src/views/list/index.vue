<template>
    <div>
        <mytil>列表页</mytil>
        <div class="list_box">
            <item 
            v-for='item in list' 
            :key='item.bookId' 
            @mydel='fn'
            :item='item'></item>
        </div>
    </div>
</template>

<script>
import title from '../../common/title.vue'
import item from './item.vue'
    export default {
        methods: {
            fn(item) {
                 this.$store.commit('removeList',item)
            }
        },
        components:{
            mytil:title,
            item
        },
        created() {
            // 触发 actions中的 getListData函数，
            // 去请求 list页中的数据
            if(this.$store.state.isGetList)return;
            // 这个请求需要一个判断。请求过之后就不用再去请求了
            this.$store.dispatch('getListData');
        },
        computed: {
            // 使用计算属性 去使用 state中的 listData
            list(){
                // list 代表的就是后台返回的哪些数据
                return this.$store.state.listData;
            }
        },
    }
</script>

<style lang="less" scoped>
    .list_box{
        margin: 1.2rem 0;
    }
</style>