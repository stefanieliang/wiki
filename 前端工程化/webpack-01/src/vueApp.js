import Vue from 'vue'
import Todos from './components/Todos.vue'

new Vue({
    el: '#vue-container',
    render: h => h(
        Todos
    )
})