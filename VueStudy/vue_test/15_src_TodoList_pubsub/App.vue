<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <MyList :todos="todos"/>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo"
          @clearFinishedTodo="clearFinishedTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    import MyHeader from './components/MyHeader'
    import MyList from './components/MyList'
    import MyFooter from './components/MyFooter'

    export default {
        name:'App',
        data(){
            return {
                todos:JSON.parse(localStorage.getItem("todos")) || []
            };
        },
        watch:{
          todos:{
            deep:true,
            handler(newValue) {
              localStorage.setItem("todos", JSON.stringify(newValue))
            }
          }
        },
        components:{MyHeader,MyList,MyFooter},
        methods: {
          // 勾选or取消勾选
          checkTodo(id){
            // console.log("调用checkTodo了");
            this.todos.forEach(todoObj=>{
              if (todoObj.id === id) todoObj.done = !todoObj.done
            })
          },
          // 添加一个todo
          addTodo(todoObj){
            this.todos.unshift(todoObj)
            // console.log('我是App组件，我收到了数据：', todoObj)
          },
          // 删除一个todo
          deleteTodo(_,id){
            // 上面第一个变量的名字用下划线表示，只是占个位
            /* this.todos.forEach((todoObj,index)=>{
              if (todoObj.id === id) this.todos.splice(index,1)
            }) */
            console.log('调用deleteTodo方法',id)
            this.todos = this.todos.filter(todo=>todo.id !== id)
          },
          // 全选or取消全选
          checkAllTodo(done){
            this.todos.forEach(todo=>{
              todo.done = done;
            })
          },
          // 清除已完成任务
          clearFinishedTodo(){
            this.todos = this.todos.filter(todo=>!todo.done)
          }
        },
        mounted() {
          this.$bus.$on('checkTodo',this.checkTodo)
          // this.$bus.$on('deleteTodo',this.deleteTodo)
          this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)
        },
        beforeDestroy() {
          this.$bus.$off('checkTodo')
          // this.$bus.$off('deleteTodo')
          pubsub.unsubscribe(this.pubId)
        },
    }
</script>

<style>
    /*base*/
    body {
      background: #fff;
    }

    .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }

    .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
    }

    .btn:focus {
      outline: none;
    }

    .todo-container {
      width: 600px;
      margin: 0 auto;
    }
    .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
</style>