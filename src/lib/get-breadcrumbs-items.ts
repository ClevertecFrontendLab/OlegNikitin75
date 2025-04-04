//import { NAME_MATCHER } from '~/constants/name-matcher';

export const getBreadcrumbsItems = (location: { pathname: string }) => {
    const brokenPath = location.pathname.split('/');

    const breadcrumbs: { name: string; href: string }[] = [];

    brokenPath.forEach((item, index) => {
        if (item) {
            // const path = location.pathname;
            // const path=NAME_MATCHER[path as keyof typeof NAME_MATCHER]

            breadcrumbs.push({
                name: item,
                href: brokenPath.slice(0, index + 1).join('/'),
            });
        }
    });
    if (breadcrumbs.length === 0) {
        breadcrumbs.push({
            name: 'Главная',
            href: '/',
        });
    }

    return breadcrumbs;
};
