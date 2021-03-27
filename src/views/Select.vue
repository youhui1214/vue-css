<template>
    <div class="select">
        <el-button @click="tabFrom" type="primary" style="margin:20px;">主要按钮</el-button>
        <div v-show="isShow" class="one">
            <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name">
                        <i slot="prefix" class="account"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="ruleForm.pass">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div v-show="!isShow" class="two">
            <el-form ref="rulePhone" :model="rulePhone" status-icon :rules="rulesPhone" label-width="100px" class="demo-ruleForm">
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="rulePhone.phone">
                        <i slot="prefix" class="account"></i>
                    </el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input type="text" v-model="rulePhone.code">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

import { isvalidPass, isvalidUsername } from '@/utils/validate'

export default {
    data() {
        var checkName = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入用户名"));
            } /*else if (!isvalidUsername(value)) {
                callback(
                    new Error(
                        "用户名要求数字、字母、下划线的组合 数字和字母必须存在 长度为4-15个字符"
                    )
                );
            }*/
            callback();
        };
        var checkNa = (rule, value, callback) => {


            if (value === "") {
                callback(new Error("请输入phone"));
            } /*else if (!isvalidUsername(value)) {
                callback(
                    new Error(
                        "用户名要求数字、字母、下划线的组合 数字和字母必须存在 长度为4-15个字符"
                    )
                );
            }*/
            callback();
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } /*else if (!isvalidPass(value)) {
                callback(
                    new Error("密码以字母开头 长度在8~18之间 只能包含字母、数字和下划线")
                );
            } else {
                if (this.ruleForm.pass !== "") {
                    this.$refs.ruleForm.validateField("pass");
                }
                callback();
            }*/
            callback();
        };
        return {
            isShow: true,
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
            },
            rulePhone: {
                phone: '',
                code: ''
            },
            rulesPhone: {
                code: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                phone: [
                    { validator: checkNa, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        tabFrom() {
            this.isShow = !this.isShow;
        },
        submitForm(formName) {
            if (this.isShow) {
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        alert('ruleForm!');
                    } else {
                        console.log('error ruleForm!!');
                        return false;
                    }
                });
            } else {
                this.$refs['rulePhone'].validate((valid) => {
                    if (valid) {
                        alert('rulePhone!');
                    } else {
                        console.log('error rulePhone!!');
                        return false;
                    }
                });
            }



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
