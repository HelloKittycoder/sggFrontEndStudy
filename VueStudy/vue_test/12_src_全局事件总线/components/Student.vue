<template>
  <div class="student">
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                name:'张三',
                sex:'男',
            }
        },
        mounted() {
            // console.log(this);
        },
        methods: {
            sendStudentName(){
                // this.x.$emit('hello',666)
                this.$bus.$emit('hello',this.name)
            }
        },
    }
</script>

<style lang="less" scoped>
    .student{
        padding: 5px;
        margin-top: 30px;
        background-color: pink;
    }
</style>