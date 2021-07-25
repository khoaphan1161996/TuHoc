import React from 'react'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import ProductListPage from './pages/ProductListPage'
import ProductActionPage from './pages/ProductActionPage'

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <HomePage />,
    },
    {
        path: '/products',
        exact: false,
        component: () => <ProductListPage />,
    },
    {
        path: '/product/add',
        exact: false,
        component: () => <ProductActionPage />,
    },
    {
        path: '/product/:id/edit',
        exact: false,
        component: () => <ProductActionPage />,
    },
    {
        path: '*',
        exact: false,
        component: () => <NotFound />,
    }
]

export default routes