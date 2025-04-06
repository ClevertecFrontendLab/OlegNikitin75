import { NAME_MATCHER } from '~/constants/name-matcher';

export const getBreadcrumbsItems = (location: { pathname: string }) => {
    const path = location.pathname;
    const breadcrumbs: { name: string; href: string }[] = [{ name: 'Главная', href: '/' }];

    const brokenPath = location.pathname.split('/');

    if (path in NAME_MATCHER) {
        const transcriptPath = NAME_MATCHER[path as keyof typeof NAME_MATCHER];

        const currentCategoryPath = `/${brokenPath[1]}`;

        const transcriptCurrentCategoryPath =
            NAME_MATCHER[currentCategoryPath as keyof typeof NAME_MATCHER];

        brokenPath.forEach((item, index) => {
            if (item) {
                if (index === 1) {
                    const allKeys = Object.keys(NAME_MATCHER);
                    const currentIndex = allKeys.indexOf(currentCategoryPath);
                    const nextIndex = currentIndex + 1;
                    const defaultPathCurrentCategoryItem = allKeys[nextIndex];

                    breadcrumbs.push({
                        name: transcriptCurrentCategoryPath,
                        href: defaultPathCurrentCategoryItem,
                    });
                } else {
                    breadcrumbs.push({
                        name: transcriptPath,
                        href: brokenPath.slice(0, index + 1).join('/'),
                    });
                }
            }
        });
    }

    return breadcrumbs;
};
