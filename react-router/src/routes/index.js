import HomePage from '../pages/HomePage'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

import Products from '../pages/Products'

const routes = [
    {
        path: "/",
        exact: true,
        component: () => <HomePage />
    },
    {
        path: "/about",
        exact: false,
        component: () => <About />
    },
    {
        path: "/contact",
        exact: false,
        component: () => <Contact />
    },
    {
        path: "/products",
        exact: false,
        component: () => <Products  />
    },
    {
        path: "*",
        exact: false,
        component: () => <NotFound />
    }
]

export default routes