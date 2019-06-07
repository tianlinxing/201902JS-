<template>
    <div class="nav_height">
        <el-row class="tac nav_height">
            <el-col :span="24" class='nav_height'>
                <!-- :span 是规定该栏的宽度 :24 代表宽100% -->
                <el-menu
                
                class="nav_height"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                :collapse='flag'
                >
                <router-link to='/table'>
                    <el-menu-item index="/table">
                        <i class="el-icon-menu"></i>
                        <span slot="title">人物列表</span>
                    </el-menu-item>
                </router-link>
                <router-link to="/info">
                    <el-menu-item index="/info">
                        <i class="el-icon-document"></i>
                        <span slot="title">人物管理</span>
                    </el-menu-item>
                </router-link>
                
                </el-menu>
            </el-col>
        </el-row>
        <button @click='flag=!flag'>eee</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag:false
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style lang="less" scoped>
.nav_height{
    height: 100%;
}
a{
    text-decoration: none
}
.tac .is-active{
    color:#333;
    i{
        color:#999
    }
}
.tac .router-link-active {
    .el-menu-item,i{
        color:sandybrown ;
    }
}
</style>