import Vue from 'vue'
import VueRoute from 'vue-router'
import Vuex from 'vuex'
import el from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import validator from 'validator'


import app from './app.vue'
import page1 from './page1/index.vue'
import page2 from './page2/index.vue'
import page3 from './page3/index.vue'
import 'clipboard'

Vue.use(el)
Vue.use(Vuex);
Vue.use(VueRoute);


const routes = [
    { path: '/', component: page1 },
    { path: '/page2', component: page2 },
    { path: '/page3', component: page3 }
]
const router = new VueRoute({
    routes
})

Vue.prototype.$validator = validator

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

new Vue({
    el: '#app',
    render: h => h(app),
    router,
    store
});