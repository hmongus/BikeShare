import {defineStore} from "pinia";

export const userAlertStore = defineStore('alert',{
    state: () => ({
        alert: null
    }),
    actions: {
        success(message) {
            this.alert = { message, type: 'alert-success' };
        },
        error(message) {
            this.alert = { message, type: 'alert-danger' };
        },
        clear(){
            this.alert = null;
        }
    }
})

export default userAlertStore;