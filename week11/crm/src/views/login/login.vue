<template>
    <div class='bg'>
        <div class='login_box'>
            <el-input class='mg-20' v-model="name" placeholder="请输入用户名"></el-input>
            <el-input class='mg-20' v-model="password" placeholder="请输入密码" show-password></el-input>
            <el-button class='mg-20' type="primary" @click='fn'>登录</el-button>
        </div>
    </div>
</template>

<script>
// 导出 login 函数；
import {login} from '@/api/getData.js'
export default {
  data() {
    return {
      input: "",
      name: "",
      password: ""
    };
  },
  methods: {
      fn() {
          // 点击登录按钮 把用户名和密码都发给后台
          // 后台验证通过之后 会给前端一个对应的字段
          login({name:this.name,psd:this.password}).then((data)=>{
              console.log(data);
              if(data.errorCode == 0){
                  //成功 就跳转
                  this.$router.push('/table')
              }else{
                  //失败 就弹出
                  this.$message({
                      type:'error',
                      message:'用户名密码错误'
                  })
              }
          })
          // name 或者 psd 这两个属性名 是后台规定的
        //   this.$router.push('/table')
      }
  },
};
</script>

<style lang="less" scoped>
    .bg{
        position: absolute;
        width: 100%;
        height: 100%;
        background: sandybrown;
        .login_box{
            width: 200px;
            // height: 200px;
            text-align: center;
            padding: 20px;
            border: 1px solid #ccc;
            background: #fff;
            margin:  60px auto; 
            .mg-20{
                margin: 20px auto;
            }
        }
    }
</style>