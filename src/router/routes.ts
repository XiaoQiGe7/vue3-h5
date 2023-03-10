export const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/layout/index.vue'),
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/home.vue'),
                meta: {
                    title: '首页',
                    keepAlive: true,
                },
            },
            {
                path: 'list',
                component: () => import('@/views/list/list.vue'),
                meta: {
                    title: '游戏库',
                    keepAlive: true,
                },
            },
            {
                path: 'cart',
                component: () => import('@/views/cart/cart.vue'),
                meta: {
                    title: '购物车',
                    keepAlive: true,
                },
            },
            {
                path: 'my',
                component: () => import('@/views/my/my.vue'),
                meta: {
                    title: '我的',
                    keepAlive: true,
                },
            },
            {
                path: 'commodity',
                component: () => import('@/views/list/commodity.vue'),
                meta: {
                    title: '商品详情',
                    keepAlive: true,
                },
            },
            {
                path: 'order',
                component: () => import('@/views/list/order.vue'),
                meta: {
                    title: '订单',
                    keepAlive: true,
                },
            },
            {
                path: 'payDetail',
                component: () => import('@/views/list/payDetail.vue'),
                meta: {
                    title: '支付',
                    keepAlive: true,
                },
            },
        ],
    },
];

export default routes;
