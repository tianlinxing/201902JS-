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
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</div>    
</template>

<script>
import {getList} from '@/api/getData.js'
export default {
  created() {
    let p = getList();
    p.then((data)=>{
      console.log(data);
      this.tableData = data.data.data
    })
  },
  methods: {
    handleClick(row) {
        // row是点击的那一行的数据；
        console.log(row);
    },
    del(row){
        this.dialogVisible = true;
    }
  },

  data() {
    return {
      tableData: [],
      dialogVisible:false
    };
  }
};
</script>
<style lang="less" scoped>
    .table_box,.list_box{
        line-height: 40px;
    }
</style>
