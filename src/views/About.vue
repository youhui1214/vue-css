<template>
    <div class="send_code">
        <input placeholder="请输入验证码" v-model="userPhone">
        <button @click="sendCode"  v-show="isShow" style="background-color: red">发送验证码</button>
        <button disabled="false" v-show="!isShow" style="background-color: lightgrey">{{secondsCount}}秒后重发</button>
    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data(){
        return{
            userPhone:'',
            secondsCount:0,//倒计秒数初始化定义
            isShow:true  //是否显示发送验证码按钮
        }
    },
    methods: {
        sendCode(){
            if(this.userPhone==''){
                alert("手机号不能为空");
                return false
            }
            const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
            if(!reg.test(this.userPhone)){
                alert("请输入正确的手机号");
                return false
            }else{
                //发送短信验证
                this.$http.get("/ips/pass/sendSms/"+this.userPhone+".json").then(res=>{
                    //倒计时
                    let that = this;
                    console.log(that);
                    that.secondsCount=60;
                    //切换倒计时按钮
                    that.isShow=false;
                    //倒计时函数
                    let timer=setInterval(function () {
                        console.log(this);
                        that.secondsCount--;
                        if(that.secondsCount<=0){
                            clearInterval(timer);
                            that.isShow=true;
                        }
                    },1000)
                })
            }
        },

    }
}
</script>

<style lang="stylus" scoped>

</style>
