import {patch} from "axios";

export const renterRoutes = [
    {
        path: '/renter',
        component: () => import('./components/Renter.vue'),
        children: [
            {
                path: 'home', component: () => import( './components/Home.vue'), meta: { title: 'Home' }
            },
            {
                path: 'map', component: () => import('./components/Map.vue'), meta: { title: 'Map' }
            },
            {
                path: 'profile', component: () => import('./components/Profile.vue'), meta: { title: 'Profile' }
            },
            {
                path: 'support', component: () => import('./components/Support.vue'), meta: { title: 'Support' }
            },
            {
                path: '', component: () => import('./components/Users/Profile.vue'), meta: { title: 'Home' }
            }
        ]
    }
]

export default renterRoutes;