<template>
    <div class="home">
        <div class="text" :class="{active: isActive}" @click="changeC">
            home
        </div>
        <div class="img" :class="{imgT: !isImg, imgC: isImg}" @click="changeI"></div>
    </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data() {
        return {
            isActive: false,
            isImg: false,

        }
    },
    methods: {
        changeC(){
            this.isActive = true;
            this.isImg = false;
        },
        changeI() {
            this.isActive = false;
            this.isImg = true;
        }

    }
}
</script>

<style scoped lang="stylus">

.active {
    color: #21a467;
}
.imgC {
    background url("../assets/down.png") no-repeat
    background-size 100% 100%
}
.imgT {
    background url("../assets/logo.png") no-repeat
    background-size 100% 100%

}

.home
    display flex
    background-color antiquewhite
    width: 100%;
    height 100%
    flex-direction column
    padding 50px
    box-sizing border-box

    .text
        font-size: 26px;
        font-weight bold
    .text:hover
        color: #a42121;

    .text:active
        color: #21a467;

    .img
        margin-top 20px

        width: 100px;
        height 100px
    .img:hover
        background url("../assets/down.png") no-repeat
        background-size 100% 100%





</style>
