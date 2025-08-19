export const authRoutes =[
    {
        path: 'forgot-password',
        loadComponent: () => import('./views/ForgotPassword'),
    },
    {
        path: 'reset-password/:id',
        loadComponent: () => import('./views/ResetPassword'),
    },
    {
        path: 'login', loadComponent: () => import('./views/Login')
    },
    {
        path: 'register', loadComponent: () => import('./views/Register'),
    }
]

export default authRoutes;