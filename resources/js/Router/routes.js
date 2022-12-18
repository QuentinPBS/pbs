import auth from './../middlewares/auth';
import noAuth from './../middlewares/noAuth';

const routes = [
    {
        path: '/',
        strict: true,
        component: () => import('../Pages/Dashboard.vue'),
        name: 'Dashboard',
        meta: {
            title: 'Dashboard',
            middleware: [auth],
        }
    },
    {
        path: '/about',
        component: () => import('../Pages/About.vue'),
        name: 'About',
        meta: {
            title: 'About',
            middleware: [auth],
        }
    },
    {
        path: '/login',
        component: () => import('../Pages/Login.vue'),
        name: 'Login',
        meta: {
            title: 'Login',
            middleware: [noAuth],
        }
    },
    {
        path: '/register',
        component: () => import('../Pages/Register.vue'),
        name: 'Register',
        meta: {
            title: 'Register',
            middleware: [noAuth],
        }
    },
    {
        path: '/project/:slug',
        strict: true,
        component: () => import('../Pages/Project.vue'),
        name: 'Project',
        meta: {
            title: 'Project',
            middleware: [auth],
        }
    },
    {
        path: '/project/:slugProject/:slugDevis',
        strict: true,
        component: () => import('../Pages/Devis.vue'),
        name: 'Devis',
        meta: {
            title: 'Devis',
            middleware: [auth],
        }
    },
    {
        path: '/devis',
        strict: true,
        component: () => import('../Pages/DashboardDevis.vue'),
        name: 'DashboardDevis',
        meta: {
            title: 'DashboardDevis',
            middleware: [auth],
        }
    },
    {
        path: '/invite/:projectId/:userId',
        strict: true,
        component: () => import('../Pages/Invite.vue'),
        name: 'Invite',
        meta: {
            title: 'Invite',
            middleware: [auth],
        }
    },
    {
        path: '/reset-password',
        component: () => import('../Pages/ResetPassword.vue'),
        name: 'ResetPassword',
        meta: {
            title: 'ResetPassword',
            middleware: [noAuth],
        }
    },
    {
        path: '/api/password/reset',
        component: () => import('../Pages/ResetFormPassword.vue'),
        name: 'ResetFormPassword',
        meta: {
            title: 'ResetFormPassword',
            middleware: [noAuth],
        }
    },
    {
        path: '/profile',
        component: () => import('../Pages/Profile.vue'),
        name: 'Profile',
        meta: {
            title: 'Profile',
            middleware: [auth],
        }
    },
    {
        path: '/stripe/callback/:accountId',
        component: () => import('../Pages/StripeCallback.vue'),
        name: 'StripeCallback',
        meta: {
            title: 'StripeCallback',
            middleware: [auth],
        }
    }
]

export default routes;
