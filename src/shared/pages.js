import { Home, Users, CloudDrizzle, Calendar, List, DollarSign, LogIn } from 'react-feather'

const pages = {
    front: [
        {
            id: 1,
            label: 'Home',
            icon: Home,
            details: "12 New Updates",
            url: '/',
            subItems: false,
        },
        {
            id: 10,
            label: 'About Us',
            icon: Home,
            details: "12 New Updates",
            url: '/about',
            subItems: false
        }
    ],
    admin: [
        {
            id: 2,
            label: 'Login',
            sidebar: false,
            icon: List,
            details: false,
            url: '/login',
            subItems: false
        },
        {
            id: 1,
            label: 'Home',
            sidebar: true,
            icon: Home,
            details: "12 New Updates",
            url: '/feed',
            subItems: false
        },
        {
            id: 22,
            label: 'Recipes',
            sidebar: true,
            icon: List,
            details: false,
            url: '/recipes',
            subItems: [
                { 
                    label: 'Recipes',
                    url: '/recipes/',
                },
                { 
                    label: 'Create Recipe',
                    url: '/recipes/create/',
                }
            ]
        },
        {
            id: 3,
            label: 'Sales',
            sidebar: true,
            icon: DollarSign,
            details: false,
            url: '/sales',
            subItems: false
        },
        {
            id: 4,
            label: 'Events',
            sidebar: true,
            icon: Calendar,
            details: false,
            url: '/events',
            subItems: [
                { 
                    label: 'Events List',
                    url: '/forecast/',
                },
                { 
                    label: 'Calendar',
                    url: '/forecast/calendar',
                },
            ]
        },
        {
            id: 5,
            label: 'Clients',
            sidebar: true,
            icon: Users,
            details: false,
            url: '/clients',
            subItems: false
        },
        {
            id: 6,
            label: 'Forecast',
            sidebar: true,
            icon: CloudDrizzle,
            details: false,
            url: '/forecast',
            subItems: false
        }
    ]
};

export default pages;
  