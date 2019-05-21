// 全局过滤器
Vue.filter('money',function(val,n=2){
    return '￥'+(val/100).toFixed(n);
})
let vm = new Vue({
    el:'#app',
    data:{
        ary:[],
        // all:true,
        // total:0
    },
    computed: {
        // 把data中的 all 挪到 计算属性中
        // all(){
        //     // all 只有当下边的项 都是被选中时  才被选中；
        //     return this.ary.every(item=>item.isSelect)
        // }
        myall:{
            get(){
                console.log(this.ary)
                return this.ary.every(item=>item.isSelect)
            },
            set(val){
                // val 是当 checkbox 被选中 或者 取消选中时; 赋给的 true或者 false;
                // val 是 true；我们就要让所有的 isSelect 都是true
                this.ary.forEach(item=>item.isSelect = val);
            }
        },
        total(){
            return this.ary.reduce((prev,next)=>{
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
    created() {
        // 一进页面 就获取数据
        this.getData();
    },
    methods: {
        getData(){
            axios.get('./data.json').then((data)=>{
                //data.data 是我们要使用的数据
                this.ary = data.data;
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
        },
        del(n){
            axios.get("删除的接口",{params:{id:'12313113'}}).then((data)=>{
                this.ary.splice(n,1);// 删除指定项
            }).catch((err)=>{
                alert('删除失败')
            })
        },
        clear(){
            // 清空购物车
            this.ary = [];
        },
        
    },
})
// 1、从后台获取数据  渲染到页面上