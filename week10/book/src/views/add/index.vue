<template>
    <div>
        <mytil>添加页</mytil>
        <div class="inp_box">
            <input type="text" placeholder="书名" v-model='name'><br>
            <input type="text" placeholder="书的信息" v-model='desc'><br>
            <input type="text" placeholder="书的价格" v-model='price'><br>
            <button @click='add'>添加</button>
        </div>
        
    </div>
</template>

<script>
import title from '../../common/title.vue'
    export default {
        components:{
            mytil:title
        },
        data() {
            return {
                name: '',
                desc:'',
                price:0
            }
        },
        methods: {
            add() {
                // 把心数据放入 vuex 中的 listData;
                let obj = {
                    bookName:this.name,
                    bookInfo:this.desc,
                    bookPrice:this.price,
                    bookId:Math.random()
                };
                this.$store.commit('addList',obj);
                // 添加完成之后 跳转到 列表页；
                this.$router.push('/list');
            }
        },
    }
</script>

<style lang="less" scoped>
    .inp_box{
        margin: 1.2rem 0;
        text-align: center;
        input{
            border:1px solid #ccc;
            border-radius: 5px;
            height: 0.6rem;
            width: 60%;
            outline: none
        }
        button{
            font-size: 0.4rem;
        }
    }
</style>