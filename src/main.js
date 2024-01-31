import { createApp } from "vue";
import { createRouter, createWebHashHistory } from 'vue-router'
import "./style.css";
import App from "./App.vue";


import HomePage from "./screens/HomePage.vue";
import AboutUs from "./screens/AboutUs.vue";
import ContactUs from "./screens/ContactUs.vue";
import Shop from "./screens/Shop.vue";
import SignUp from "./screens/SignUp.vue";
import LogIn from "./screens/LogIn.vue";
import Exhibition from "./screens/Exhibition.vue";
import Leaderboard from "./screens/Leaderboard.vue";
import Learn from "./screens/Learn.vue";
import MyProfile from "./screens/MyProfile.vue";
import Categories from "./screens/Categories.vue";
import CraftySupplies from "./screens/CraftySupplies.vue";
import Points from "./screens/Points.vue";
import VIP from "./screens/VIP.vue";

const routes = [
    { path: "/", name:"home", component: HomePage },
    { path: "/about", name:"about", component: AboutUs },
    { path: "/contact", name:"contact", component: ContactUs },
    { path: "/shop", name:"shop", component: Shop },
    { path: "/profile", name:"profile",component: MyProfile },
    { path: "/login", name:"login",component: LogIn },
    { path: "/signup", name:"signup",component: SignUp },
    { path: "/learn", name:"learn",component: Learn },
    { path: "/supplies", name:"supplies",component: CraftySupplies },
    { path: "/exhibition", name:"exhibition",component: Exhibition },
    { path: "/categories", name:"categories",component: Categories },
    { path: "/leaderboard", name:"leaderboard",component: Leaderboard },
    { path: "/vip", name:"vip",component: VIP },
    { path: "/points", name:"points",component: Points }
];


const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
createApp(App).use(router).mount("#app");