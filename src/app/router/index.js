import {createRouter, createWebHistory} from "vue-router";
import authRoutes from "@/app/router/login-signup.routes.js";
import ownerRoutes from "@/app/router/owner.routes.js";
import renterRoutes from "@/app/router/renter.routes.js";
import userAlertStore from "@/app/shared/auth/stores/alert.store.js";
import {computed} from "vue";
import useAuthStore from "@/app/shared/auth/stores/auth.store.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        {path: '/', component: 'login'},
        { ...authRoutes},
        { ...ownerRoutes},
        { ...renterRoutes},
        { path: '/:pathMatch(.*)*', redirect: '/'}
    ]
})

router.beforeEach(async (to) => {
    const alertStore = userAlertStore()
    alertStore.clear();

    const publicPages = ['/login', '/register', '/forgot-password'];
    const authRequired = !publicPages.includes(to.path);
    const authStore = useAuthStore();

    if(authRequired && !authStore.user){
        authStore.returnUrl = to.fullPath;
        return '/login';
    }
})

export default router;