import Vue from "vue"
import App from "./components/App.vue"
import Buefy from 'buefy'
import "buefy/lib/buefy.css"

Vue.use(Buefy)
Vue.config.debug = true
Vue.config.devtools = true

new Vue({
    el: '#vuejs',
    components: { App },
})
