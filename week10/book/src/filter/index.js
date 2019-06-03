import Vue from 'vue'
Vue.filter('money',function(val){
    return `￥${(val/100).toFixed(2)}`
})