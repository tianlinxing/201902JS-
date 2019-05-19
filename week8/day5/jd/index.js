// 全局过滤器
Vue.filter('money',function(val,n=2){
    return '￥'+(val/100).toFixed(n);
})
let vm = new Vue({
    el:'#app',
    data:{
        ary:[],
        all:true,
        total:0
    },
    created() {
        // 一进页面 就获取数据
        this.getData();
    },
    methods: {
        getData(){
            axios.get('./data.json').then((data)=>{
                //data.data 是我们要使用的数据
                this.ary = data.data;
                this.checkone();// 初始化 all 的值
            }).catch((err)=>{

            })
        },
        changeCount(item,e){
            // count 必须是正整数
            // item.count = (item.count+'').replace(/[^\d]*/g,'')
            // console.log(item.count,e.target)
            let str = (item.count+'').replace(/[^\d]*/g,'');
            str = str.replace(/^0/,'');
            item.count = str;
            this.compileTotal();
        },
        del(n){
            this.ary.splice(n,1);// 删除指定项
            this.checkone();// 删除没被勾中的项时  重置 all
        },
        clear(){
            // 清空购物车
            this.ary = [];
            this.compileTotal();
        },
        checkAll(){
            // 根据 this.all 来判断是否全选
            this.ary.forEach(item=>{
                item.isSelect = this.all;
            })
            this.compileTotal();
        },
        checkone(){
            // 所有数据的 isSelect 是ture  this.all 才是true;
            this.all = this.ary.every((item)=>{
                return item.isSelect;
            })
            this.compileTotal();
        },
        compileTotal(){
            this.total = this.ary.reduce((prev,next)=>{
                // prev 上一个回调的返回值
                // next 数组中的当前项
                // 根据该条数的 isSelect来决定进行累加
                if(next.isSelect){
                    return prev + next.price*next.count
                    //   上一次的和  再去 加  当前的 价格*数量
                }
                return prev;
            },0)
        }
    },
})
// 1、从后台获取数据  渲染到页面上