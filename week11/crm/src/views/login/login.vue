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
          this.$router.push('/table')
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