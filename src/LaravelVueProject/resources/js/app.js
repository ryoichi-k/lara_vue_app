import './bootstrap';
import '../css/app.css';

//import { createApp } from 'vue';
//import Vue from 'vue'
//import App from './App.vue';

// const app = createApp(APP);//miss point


// const app = new Vue({
//     el: '#app',
// })
import { createApp } from 'vue'
// ルートコンポーネントを単一ファイルコンポーネントからインポートする
import App from './App.vue'
const app = createApp(App)
app.mount('#app');
