const routes = {
    '/card/full-list': () => import('./demo/cards/common-cards'),
    '/card/paged-list': () => import('./demo/cards/pagied-cards'),
    '/card/managed/full-list': () => import('./demo/cards/managed-common-cards'),
    '/card/managed/paged-list': () => import('./demo/cards/managed-paged-cards'),
    '/data-table/full-list': () => import('./demo/data-table/data-list-table'),
    '/data-table/managed/full-list': () => import('./demo/data-table/managed-list-table'),
    '/data-table/managed/paged-list': () => import('./demo/data-table/managed-dynamic-table')
}

export default routes;