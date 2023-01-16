import TheAll from "./components/TheAll.vue";
import TheSub from "./components/TheSub.vue";
import TheIndex from "./components/TheIndex.vue";
import NotFound from "./components/NotFound.vue";


export default [
    {
        name: "TheIndex",
        path: '/',
        component: TheIndex
    },
    {
        name: "TheSub",
        path: '/thesub',
        component: TheSub,
    },
    {
        name: "TheAll",
        path: '/theall/:slug0',
        component: TheAll,
    },
    {
        name: "NotFound",
        path: '*',
        component: NotFound,
    }
]