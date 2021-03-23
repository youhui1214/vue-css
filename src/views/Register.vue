<template>
    <div class="register">
        <div class="header"></div>
        <div class="main">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="活动名称" prop="name">
<!--                    <div style="width:480px;">
                        <el-input v-model="ruleForm.name"></el-input>
                    </div>-->
                    <el-input style="width:480px;" v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" prop="region">
                    <el-select style="width:480px;" v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>

        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                name: '',
                region: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],

            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<style lang="stylus" scoped>

.register
    width: 100%;
    height: 100%;
    background-color antiquewhite

    .header
        width: 100%
        height 100px
        background-color #5076F4

    .main
        padding 20px
        width: 800px;
        //height: calc(100% -200px)
        height: 600px
        margin: 0 auto;
        background-color #b0dfd2
    .footer
        width: 100%;
        height 100px
        background-color #2a3148
</style>
