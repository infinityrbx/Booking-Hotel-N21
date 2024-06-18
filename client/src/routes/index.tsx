import { ComponentType } from 'react';
import Home from '../pages/Home'
import Accommodation from '../pages/Accommodation';
import Booking from '../pages/Booking';
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import { AdminLayout, DefaultLayout } from '../layouts';
import config from '../config';
import Destination from '../pages/Destination';
import Users from '../admin/pages/Users';
import Hotels from '../admin/pages/Hotels';
import Rooms from '../admin/pages/Rooms';
import Dashboard from '../admin/pages/Dashboard';

interface IRoute {
    path : string;
    component: ComponentType<any>;
    layout? : ComponentType<any>;
}

const publicRoutes : IRoute[]  = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.accommodation, component: Accommodation, layout: DefaultLayout },
    { path: config.routes.booking, component: Booking, layout: DefaultLayout },
    { path: config.routes.destination, component: Destination, layout: DefaultLayout },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.admin, component: Dashboard, layout: AdminLayout },
    { path: config.routes.users, component: Users, layout: AdminLayout },
    { path: config.routes.hotels, component: Hotels, layout: AdminLayout },
    { path: config.routes.rooms, component: Rooms, layout: AdminLayout },
]

const privateRoutes : IRoute[] = []

export {publicRoutes, privateRoutes}