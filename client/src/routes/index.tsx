import { ComponentType } from 'react';
import Home from '../pages/Home'
import Accommodation from '../pages/Accommodation';
import Booking from '../pages/Booking';
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import { DefaultLayout } from '../components/Layout';

interface IRoute {
    path : string;
    component: ComponentType<any>;
    layout? : ComponentType<any>;
}

const publicRoutes : IRoute[]  = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/accommodation', component: Accommodation, layout: DefaultLayout },
    { path: '/accommodation/booking', component: Booking, layout: DefaultLayout },
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]

const privateRoutes : IRoute[] = []

export {publicRoutes, privateRoutes}