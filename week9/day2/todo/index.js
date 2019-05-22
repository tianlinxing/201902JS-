Vue.directive('focus',function(el){
    // 获取焦点的自定义指令
    setTimeout(() => {
        el.focus();
    }, 20);
})
let vm = new Vue({
    el:'#app',
    data:{
        ary:[],// {text:'你好',isSelect:false,isShow:true} isShow:true 展示input
        count:0,
        todo:'',
        myhash:'#/all'
    },
    created(){
        // 初始化ary;
        // 初次使用todoAry ;localStorage中不存在该数据
        // 那么我们获取到的就是null,这时我们给this.ary一个空数组
        // 若不是null 之后 我们获取到的就是一个JSON字符串,
        // 需要我们转成 JSON对象 然后赋给 this.ary
        let str = localStorage.getItem('todoAry');
        this.ary = str ? JSON.parse(str) : [];


        // 初始化hash值,若刚进来时没有hash;则 给一个初始值 #/all
        this.myhash = location.hash || '#/all'
        window.onhashchange = ()=>{
            console.log(location.hash)
            this.myhash = location.hash;
        }
    },
    computed: {
        todoAry(){
            // 根据不同的 hash ;筛选出不同的数组
            console.log(222)
            localStorage.setItem('todoAry',JSON.stringify(this.ary))
            this.count = this.ary.filter(item=>!item.isSelect).length;//更新count
            switch (this.myhash) {
                case '#/all':
                    return this.ary.map(item=>{
                        // item.isSelect;// 就是为了用一下isSelect 让他有依赖关系
                        return item
                    })
                    break;
                case "#/finished":
                    //筛选出 isSelect是true的项
                    return this.ary.filter(item=>item.isSelect)
                    break;
                default:
                    //筛选出 isSelect是false的项;
                    return this.ary.filter(item=>!item.isSelect)
                    break;
            }
        }
    },
    methods: {
        add(){
            // 添加要做的事;
            if(this.todo.length==0)return;//防止空值出现
            let obj = {
                text:this.todo,
                isSelect:false,
                isShow:false,
                id:Math.random()
            }
            this.ary.unshift(obj);
            this.todo = '';// 清空input
        },
        change(item){
            
            item.isShow = !item.isShow;// 让该条数据的input展示出来
        },
        del(item){
            // 过滤出去 item 这一项; item 是一个地址;
            this.ary = this.ary.filter(val=>val!=item);
        }
    },
});

/*
    1.首先根据需求 确定大致逻辑 和 数据结构(显示文本  显示是否被勾中的  是否显示input)
    2.添加  按回车添加  按照刚才的数据结构 向数组中添加新数据
    3.把数组循环展示到页面上;
    4.双击时,我们让 input显示出来  让文本消失;失去焦点的时候让 input消失 文本显示;
    5.删除 点击删除的时候  我们把当前的这条数据删除即可
    6.点击实现底部的选项卡功能
    7.点击选项卡时, 展示不同的内容,全部 就展示整个数组
                                未完成 就是数组中isSelect是false的项
                                已完成 就展示数组中isSelect是true的项;
*/