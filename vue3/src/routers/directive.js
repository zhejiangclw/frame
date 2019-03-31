const directiveRouter = [
    {
        path: '/directives/directives',
        name: 'directive',
        component:  resolve => require(['@/pages/directives/Directives'], resolve),
        meta: {
            isNeedLogin: false,
            title: '自定义指令'
        }
    },
];

export default directiveRouter;
