<template>
    <div class='item_box'>
        <div class="img_box">
            <img :src="item.bookCover" alt="">
        </div>
        <div class="content_box">
            <h2 class="title">{{item.bookName}}</h2>
            <p class="desc">{{item.bookInfo}}</p>
            <div class="price_box">{{item.bookPrice | money}}</div>
            <div class="btn_box">
                <!-- 点击删除按钮 吧该条数据从 vuex中删除 -->
                <button class="del" @click='remove'>删除</button>
                <button class="collect" @click='add' v-if="isShowCollect">收藏</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // props:['item'],
        props:{
            item:{
                default(){
                    // 对象或者数组 必须是函数
                    return {}
                }
            },
            isShowCollect:{
                default:true
            }
        },
        methods: {
            remove() {
                // 改变 vuex中的数据, 只能通过mutations中的函数；
                // 触发 mutations 中的函数 用 commit
                // 触发 actions 中的函数  用  dispatch
                // this.$store.commit('removeList',this.item)

                this.$emit('mydel',this.item)
            },
            add(){
                // 向收藏列表添加数据
                this.$store.commit('addCollect',this.item)
            }
        },
    }
</script>

<style lang="less" scoped>
    .item_box{
        display: flex;
        .img_box{
            width: 2.5rem;
            img{
                width: 100%;
            }
        }
        .content_box{
            flex: 1;
            .title{
                font-size: .4rem;
            }
            .desc{
                font-size: 0.3rem;
            }
            .price_box{
                color: red;
                font-size: 0.3rem;
            }
            .btn_box{
                display: flex;
                justify-content: space-around;
                button{
                    width: 1.2rem;
                }
            }
        }
    }
</style>