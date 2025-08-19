import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useNotificationStore = defineStore('notification', () => {
    const notifications = ref([])

    const unreadCount = computed(() => notifications.value.length)

    function  setNotifications(newNotifications) {
        notifications.value = newNotifications
    }

    function markAllAsRead(){
        notifications.value = []
    }

    function clearNotifications(){
        notifications.value = []
    }

    return {
        notifications,
        unreadCount,
        setNotifications,
        markAllAsRead,
        clearNotifications
    }
})