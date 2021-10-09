// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// Vue.prototype.x = {x:1,y:2}
/* const Demo = Vue.extend({});
let d = new Demo();
Vue.prototype.x = d; */

// 创建vm
new Vue({
    el:'#app',
    render:h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})