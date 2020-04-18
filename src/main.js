import Vue from 'vue'
import App from './App.vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

function reloadRefersh() {
    location.reload();
}

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth < 640) {
    window.addEventListener("resize", reloadRefersh);
    console.log('small viewport');
}