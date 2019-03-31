const extendRouter = [
    {
        path: '/extend/extend',
        name: 'extend',
        component:  resolve => require(['@/pages/extend/Extend'], resolve),
        meta: {
            isNeedLogin: false,
            title: '拓展组件'
        }
    },
];

export default extendRouter;
