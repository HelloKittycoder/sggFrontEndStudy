<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
    // 引入Vue
    import Vue from 'vue'
    export default {
        name:'School',
        data(){
            return {
                name:'尚硅谷',
                address:'北京'
            }
        },
        mounted() {
            // console.log(Vue.prototype)
            // console.log(this.x.__proto__.__proto__ === Vue.prototype, this.x.__proto__, Vue.prototype) // true
            // console.log("this.x.$on====" + this.x.$on);
            /* this.x.$on('hello', data=>{
                console.log("我是School组件，收到了数据", data)
            }) */
            this.$bus.$on('hello', data=>{
                console.log("我是School组件，收到了数据", data)
            })
        },
        beforeDestroy() {
            this.$bus.$off('hello')
        },
    }
</script>

<style scoped>
    .school{
        padding: 5px;
        margin-top: 30px;
        background-color: skyblue;
    }
</style>