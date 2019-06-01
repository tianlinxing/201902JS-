<template>
  <div class='views'>
    <router-view></router-view>
    <div class="nav">
      <router-link to="/home" >
        <div class='iconfont icon-home'></div>
        <div>首页</div>
      </router-link> 
      <router-link to="/list">
        <div class='iconfont icon-list'></div>
        <div>列表页</div>
      </router-link>
      <router-link to="/collect">
        <div class='iconfont icon-shoucang'></div>
        <div>收藏页</div>
      </router-link>
      <router-link to="/add">
        <div class='iconfont icon-tianjia'></div>
        <div>添加页</div>
      </router-link>
    </div>
  </div>
</template>


<style lang="less" scoped>
// scoped  有该行内属性的 style; 那么 其中的样式 只对 当前组件起作用
  .nav{
    position: fixed;
    bottom:0;
    background: #fff;
    left:0;
    width: 100%;
    height: 1rem;
    font-size: 0.4rem;
    display: flex;
    align-items: center;
    box-shadow: 0px -0.02rem 0.1rem 0px #ccc;
    a{
      flex: 1;
      text-align: center;
      &.current{
        color:aquamarine;
      }
    }

  }
</style>
