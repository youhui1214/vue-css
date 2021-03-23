<template>
    <div class="about">
        <div class="change">
            <div class="loginMain">

                <div class="login">密码登录</div>
                <div class="lineT"></div>
            </div>

            <div class="Main">

                <div class="login">短信登录</div>
                <div class="lineT"></div>
            </div>

        </div>
    </div>
</template>

<style lang="stylus" scoped>
.about
    //background-color aqua
    .change
        //display inline-block
        .loginMain
            display: inline-block
            //background-color antiquewhite
            width: 80px;
            //height 100%
            .login
                width: 80px;
                height: 18px;
                font-size: 20px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #333333;

            .lineT
                margin-top 10px
                width: 80px;
                height: 2px;
                background: #5076F4;
                border-radius: 1px;

        .Main
            display inline-block
            margin-left 20px

            //background-color #282726
            //width: 80px;
            //height 100%

            .login
                width: 80px;
                height: 18px;
                font-size: 20px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #333333;

            .lineT
                margin-top 10px
                width: 80px;
                height: 2px;
                background: #5076F4;
                border-radius: 1px;

</style>
