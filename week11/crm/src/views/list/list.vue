<template>
<div class='list_box'>
    <el-table
        :data="tableData"
        class='table_box'
        border
        style="width: 100%">
        <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        width="120">
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        width="120">
        </el-table-column>
        <el-table-column
        prop="province"
        label="省份"
        width="120">
        </el-table-column>
        <el-table-column
        prop="city"
        label="市区123"
        width="120">
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址"
        width="300">
        </el-table-column>
        <el-table-column
        prop="zip"
        label="邮编"
        width="120">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="small">编辑</el-button>
            <el-button @click='del(scope.row)'  type="danger" size="small">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%">
        <span>是否确认删除？</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="sureDel">确 定</el-button>
        </span>
    </el-dialog>
</div>    
</template>

<script>
import {getList,del} from '@/api/getData.js'
export default {
  created() {
    this.initList()
  },
  methods: {
    initList(){
        let p = getList();
        p.then((data)=>{
            console.log(data);
            this.tableData = data.data
        })
    },
    handleClick(row) {
        // row是点击的那一行的数据；
        console.log(row);
    },
    del(row){
        // 点击红色删除的时候 我们 把这一条数据赋给 data中的 row;
        this.row = row;
        this.dialogVisible = true;
    },
    sureDel(){
        this.dialogVisible = false;
        // 删除 需要告诉后台删除数据的ID；
        let p = del({id:this.row.id})// 这个del 是 axios的del  不是methods中的del
        // 删除成功就提示用户删除成功； 失败 就提示用户删除失败
        p.then(data=>{
            if(data.errorCode == 0){
                // 删除成功 ，重新请求列表数据
                this.initList();
                this.$message.success('删除成功')
            }else{
                this.$message.error('删除失败')
            }
        })
    }
  },

  data() {
    return {
      tableData: [],
      dialogVisible:false,
      row:null
    };
  }
};
</script>
<style lang="less" scoped>
    .table_box,.list_box{
        line-height: 40px;
    }
</style>
