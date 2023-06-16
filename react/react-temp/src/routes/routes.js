import Home from '../pages/home/home'
import PageA from '../pages/pageA/pageA'
import PageB from '../pages/pageB/pageB'

export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/page-a',
        element: <PageA />
    },
    {
        path: '/page-b',
        element: <PageB />
    },

]