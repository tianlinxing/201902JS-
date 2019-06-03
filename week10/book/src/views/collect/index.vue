<template>
    <div>
        <mytil>收藏页</mytil>
        <item 
            v-for='item in list' 
            :key='item.bookId' 
            @mydel='fn'
            :isShowCollect='false'
            :item='item'></item>
    </div>
</template>

<script>
import title from '../../common/title.vue'
import item from '../list/item.vue'
    export default {
        components:{
            mytil:title,
            item
        },
        computed: {
            list(){
                // 获取 vuex 中的 collectData
                return this.$store.state.collectData;
            }
        },
        methods: {
            fn(item){
                console.log(item);
                this.$store.commit('removeCollect',item)
            }
        },
    }
</script>

<style lang="less" scoped>

</style>