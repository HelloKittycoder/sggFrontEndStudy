<template>
    <div class="todo-footer" v-show="totalNum">
        <label>
        <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
        <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
        <span>已完成{{doneNum}}</span> / 全部{{totalNum}}
        </span>
        <button class="btn btn-danger" @click="clearFinished">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'MyFooter',
        // props:["todos","checkAllTodo","clearFinishedTodo"],
        props:["todos"],
        computed:{
            totalNum(){
                return this.todos.length
            },
            doneNum(){
                // return this.todos.filter(todo=>todo.done).length
                /* const x = this.todos.reduce((pre,current)=>{
                    console.log('@',pre,current)
                    return pre + (current.done ? 1 : 0)
                }) */
                return this.todos.reduce((pre,todo)=>pre + (todo.done ? 1 : 0), 0)
            },
            /* isAll(){
                // console.log(111)
                // return this.totalNum > 0 && this.todos.every(todo=>todo.done)
                return this.doneNum === this.totalNum && this.totalNum > 0
            } */
            isAll:{
                get(){
                    return this.doneNum === this.totalNum && this.totalNum > 0
                },
                set(value){
                    this.$emit('checkAllTodo',value)
                    // this.checkAllTodo(value)
                }
            }
        },
        methods: {
            /* checkAll(e){
                this.checkAllTodo(e.target.checked)
            }, */
            clearFinished(){
                this.$emit('clearFinishedTodo')
                // this.clearFinishedTodo()
            }
        },
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>