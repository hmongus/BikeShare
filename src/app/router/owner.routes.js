
export const ownerRoutes = [
    {
        path: '/owner',
        component: () => import( './components/Users/Users.vue'),
        children: [
            {
                path: 'home', component: () => import( './components/Users/Home.vue'), meta: { title: 'Home' }
            },
            {
                path: 'my-bikes', component: () => import(''), meta: { title: 'Bikes' }
            },
            {
                path: 'reservations', component: () => import(''), meta: { title: 'Reservations' }
            },
            {
                path: 'profile', component: () => import('./components/Users/Profile.vue'), meta: { title: 'Profile' }
            },
            {
              path: 'support', component: () => import('./components/Users/Support.vue'), meta: { title: 'Support' }
            },
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            }

        ]
    }
]

export default ownerRoutes;