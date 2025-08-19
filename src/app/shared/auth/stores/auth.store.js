import {defineStore} from "pinia";
import httpInstance from "@/app/shared/services/http.instance.js";
import userAlertStore from "@/app/shared/auth/stores/alert.store.js";
import {router} from "@/app/router/index.js";

export const useAuthStore = defineStore('auth',{
    state: () =>({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(email, password){
            try {
                const user = await httpInstance.post(`/authenticate`, {email, password});

                //update pinia state
                this.user = user;
                this.roles = user.roles || [];

                //store jwt and user details for persistence during page refreshes
                localStorage.setItem('user', JSON.stringify(user));

                //redirect based on role
                if(this.roles.includes('admin')){
                    router.push('/admin');
                } else if (this.roles.includes('owner')){
                    router.push('/owner/home');
                } else if( this.roles.includes('renter')){
                    router.push('/renter/home');
                } else{
                    localStorage.removeItem('user');
                    this.user = null;
                    router.push(this.returnUrl || '/login')
                }
            } catch (error) {
                const alertStore = userAlertStore();
                alertStore.error(error);
            }
        }
    }
})

export default useAuthStore;