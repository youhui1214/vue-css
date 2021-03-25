<template>
    <div class="select">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model.number="ruleForm.name">
                    <i slot="prefix" class="account"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

import { isvalidPass, isvalidUsername } from '@/utils/validate'

export default {
    data() {
        var checkName = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入用户名"));
            } else if (!isvalidUsername(value)) {
                callback(
                    new Error(
                        "用户名要求数字、字母、下划线的组合 数字和字母必须存在 长度为4-15个字符"
                    )
                );
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if (!isvalidPass(value)) {
                callback(
                    new Error("密码以字母开头 长度在8~18之间 只能包含字母、数字和下划线")
                );
            } else {
                if (this.ruleForm.pass !== "") {
                    this.$refs.ruleForm.validateField("pass");
                }
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '',
                name: ''
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                name: [
                    { validator: checkName, trigger: 'blur' }
                ]
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

<style scoped lang="stylus">

.select >>> .el-input__inner {
    height: 50px;
    line-height: 50px;

}

.account {
   /* height: 100%;
    width: 25px;
    text-align: center;
    transition: all .3s;
    line-height: 40px;*/
    width 20px
    height 20px
    background url("../assets/account.png") center  no-repeat
    //background-size 100% 100%
    background-size cover

}
.account:before{
    content: "替";
    font-size: 16px;
    visibility: hidden;
}

.select
    margin: 20px;
    width 400px



</style>
