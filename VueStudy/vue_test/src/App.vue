<template>
  <div class="app">
      <h1>{{msg}}</h1>

      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName"/>

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on）
      v-on:atguigu.once 或 @atguigu.once 表示只调一次 -->
      <Student @atguigu="getStudentName" @demo="m1"/>

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->   
      <!-- <Student ref="student"/> -->
  </div>
</template>

<script>
    import School from './components/School'
    import Student from './components/Student'

    export default {
        name:'App',
        components:{School,Student},
        data(){
            return {
                msg:'你好啊',
                studentName:''
            }
        },
        methods: {
            getSchoolName(name){
                console.log('App收到了学校名：')
            },
            getStudentName(name,...a){
                console.log('App收到了学生名：', name, a)
            },
            m1(){
                console.log('demo事件被触发了！')
            }
        },
        mounted() {
            // this.$refs.student.$on('atguigu',this.getStudentName) // 绑定自定义事件
            // this.$refs.student.$once('atguigu',this.getStudentName) // 绑定自定义事件（一次性）
        },
    }
</script>

<style scoped>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>