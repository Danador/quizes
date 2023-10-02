import Routing from './index.vue';

export const routes = [
    { path: '/', component: async () => await import('./quiz') },
    { path: '/quiz/create', component: async () => await import('./quiz/create.vue')},
    { path: '/quiz/edit', component: async () => await import('./quiz/edit.vue')},
    { path: '/templates', component: async () => await import('./templates') },
    { path: '/quiz/start-page', component: async () => await import('./start-page') },
    { path: '/quiz/questions', component: async () => await import('./questions') },
    { path: '/quiz/questions/create',component: async () => await import('./questions/create.vue'),},
    { path: '/quiz/questions/edit', component: async () => await import('./questions/edit.vue'),},
    { path: '/quiz/result', component: async () => await import('./result') },
    { path: '/quiz/result/create', component: async () => await import('./result/create.vue'),},
    { path: '/quiz/result/edit', component: async () => await import('./result/edit.vue') },
    { path: '/quiz/contacts', component: async () => await import('./contacts') },
    { path: '/quiz/contacts/create', component: async () => await import('./contacts/create.vue'),},
    { path: '/quiz/contacts/edit', component: async () => await import('./contacts/edit.vue'),},
    { path: '/quiz/setup', component: async () => await import('./setup') },
    { path: '/quiz/design', component: async () => await import('./design') },
    { path: '/quiz/settings', component: async () => await import('./settings') },
    { path: '/quiz/integrations', component: async () => await import('./integrations') },
];

export { Routing };
