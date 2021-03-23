<template>
    <div class="select">
        <input type="text">

        <div class="btn">
            <button>登录</button>
        </div>
    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Select',
    components: {
        HelloWorld
    }
}
</script>

<style scoped lang="stylus">

button:active, button:active:focus {
    border none
    outline: 0;
    border-color: transparent;
    box-shadow:none;
}

.select
    margin: 50px;

    input
        width: 480px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #E9E9E9;
        border-radius: 4px;

        &:focus {
            outline: 0;
            //border: 1px solid #5076F4;
            //box-shadow: 0 0 10px 0 #5076F4;
        }
    .btn {
        margin-top 50px


        button {
            width: 400px;
            height: 40px;
            background: #5076F4;
            border none
            border-radius: 4px;
        }

    }


</style>
