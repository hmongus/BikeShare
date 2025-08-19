import {defineStore} from "pinia";
import httpInstance from "@/app/shared/services/http.instance.js";
import useAuthStore from "@/app/shared/auth/stores/auth.store.js";

export const useUserStore = defineStore('user',{
    state: () => ({
        user: {}
    }),
    actions: {
        async register(user) {
            await httpInstance.post(`/register`, {user});
        },
        async getUser(id){
            this.user = { loading: true };
            try {
                this.user = await httpInstance.get(`/user/${id}`);
            }catch (error){
                this.user = {error};
            }
        },
        async update(id, params){
            await httpInstance.put(`/user/${id}`, params);

            //update stored user uwu
            const authStore = useAuthStore();
            if(id === authStore.user.id){
                //update local storage
                const user = { ...authStore.user, ...params };
                localStorage.setItem('user', JSON.stringify(user));

                //update auth user in pinia
                authStore.user = user;
            }
        },
        async delete(id){
            await httpInstance.delete(`/user/${id}`);

            //auto logout
            const authStore = useAuthStore();
            if(id === authStore.user.id){
                authStore.logout();
            }
        }
    }
})