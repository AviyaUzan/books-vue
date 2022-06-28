import bookApp from "./views/book-app.cmp.js";
import homePage from "./views/home-page.cmp.js";
import aboutPage from "./views/about-page.cmp.js";
import bookDetails from './views/book-details.cmp.js';
import aboutService from './cmps/about-service.cmp.js';
import aboutTeam from './cmps/about-team.cmp.js';

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage,
        children: [
            {
                path: 'team',
                component: aboutTeam
            },
            {
                path: 'service',
                component: aboutService
            },
        ]
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
  ]
  
  export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
  })
