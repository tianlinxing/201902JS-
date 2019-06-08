<template>
    <div class='info_box'>
        <!-- <el-row> -->
            <!-- <el-col :span="12"> -->
                <div class="block">
                    <el-date-picker
                        v-model="date"
                        type="date"
                        format="yyyy / MM / dd"
                        value-format="yyyy-MM-dd"
                        @change= 'fn'
                        placeholder="选择日期">
                    </el-date-picker><br>
                    <el-input style='width:220px;margin-top:10px' v-model="name" placeholder="请输入姓名"></el-input><br>
                    <el-input style='width:220px;margin-top:10px' v-model="province" placeholder="请输入省份"></el-input><br>
                    <el-input style='width:220px;margin-top:10px' v-model="city" placeholder="请输入市区"></el-input><br>
                    <el-input style='width:220px;margin-top:10px' v-model="address" placeholder="请输入地址"></el-input><br>
                    <el-input style='width:220px;margin-top:10px' v-model="zip" placeholder="请输入邮编"></el-input><br>
                    <el-button style='width:220px;margin-top:10px' autofocus type="primary" round @click='submit'>提交</el-button>
                </div>
            <!-- </el-col> -->
        <!-- </el-row> -->
        
    </div>
</template>

<script>
import {add} from '@/api/getData.js'
export default {
  data() {
    return {
      date: "",
      name: "",
      province: "",
      city: "",
      address: "",
      zip: ""
    };
  },
  created() {
      console.log(this.$route.query);
      // 获取到 query上的数据之后 判断是否有数据，有的话就赋给 data中对应的属性
      let obj = this.$route.query;
      if(obj.id != undefined){
          for(let k in obj){
              if(k!='id'){
                  //data中是没有 id这个属性的
                  this[k]=obj[k]
              }
          }
      }
  },
  methods: {
    fn() {
      console.log(arguments);
    },
    submit(){
        let {date,name,province,city,zip,address} = this;
        // console.log(date)
        if(!date||!name||!province||!city||!zip||!address){
            this.$message({
                message: '所有输入框不能为空',
                type: 'warning'
            });
        }else{
            // 发送请求
            let obj = {
                date,name,province,city,zip,address
            }
            // 对于 obj来说  若有存在ID 就是编辑
            if(this.$route.query.id != undefined){
                obj.id = this.$route.query.id
            }

            // console.log(obj)
            // 若添加（编辑）成功 就跳转到table页；否则提示用户 添加（编辑）失败
            add(obj).then((data)=>{
                //若 errorCode 为0 则代表 添加成功
                if(data.errorCode == 0){
                    this.$router.push('/table')
                }else{
                    let str = obj.id === undefined ? '失败' : '编辑失败'
                    this.$message.error(str)
                }
            })
        }
        
    }
  }
};
</script>

<style lang="less" scoped>
.info_box {
  line-height: 40px;
}
</style>