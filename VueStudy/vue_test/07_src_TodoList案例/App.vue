<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"/>
        <MyList :todos="todos"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" :checkAllTodo="checkAllTodo"
          :clearFinishedTodo="clearFinishedTodo"/>
      </div>
    </div>
  </div>
</template>

<script>
    import MyHeader from './components/MyHeader'
    import MyList from './components/MyList'
    import MyFooter from './components/MyFooter'

    export default {
        name:'App',
        data(){
            return {
                todos:[
                    {id:'001',title:'打代码',done:true},
                    {id:'002',title:'睡觉',done:false},
                    {id:'003',title:'吃饭',done:true}
                ]
            };
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
          deleteTodo(id){
            /* this.todos.forEach((todoObj,index)=>{
              if (todoObj.id === id) this.todos.splice(index,1)
            }) */
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