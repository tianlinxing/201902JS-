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
            console.log(obj)
            add(obj)
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