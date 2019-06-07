<template>
  <div class="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container class='content_box'>
        <el-aside >
          <my-nav></my-nav>
          <!-- 导航部分 -->
        </el-aside>
        <el-main>
          <router-view></router-view>
          <!-- 导航对应显示的组件 -->
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>

      <router-link to="/table">table</router-link>
      <router-link to="/info">info</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import nav from './nav/nav.vue'
export default {
  name: "home",
  components: {
    'my-nav':nav
  }
};
</script>
<style lang="less">
.content_box{
  min-height: 600px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

