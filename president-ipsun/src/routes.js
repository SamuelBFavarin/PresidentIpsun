import Home from './components/Home.vue';
import Tool from './components/Tool.vue';
import Supporters from './components/Supporters.vue';



const routes = [
    { path: '/', component: Home },
    { path: '/tool', component: Tool },
    { path: '/supporters', component: Supporters }
];

export default routes;