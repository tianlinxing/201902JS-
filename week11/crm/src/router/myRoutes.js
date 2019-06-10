export default [
    {
        path:'/table',
        name:'table',
        // @ 该符号 就代表了 /src 这一级
        component: ()=>import('@/views/list/list.vue')
    },
    {
        path:'/info',
        name:'info',
        meta:{
            level:3,
            til:'dfgd'
        },
        component: ()=>import('@/views/info/info.vue')
    },
    {
        path:'/echarts',
        name:'echarts',
        component: ()=>import('@/views/echarts/echarts.vue')
    }
]