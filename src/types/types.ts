export interface IMenuItem {
    title: string;
    iconUrl: string;
    subMenuItems: {
        name: string;
        link: string;
        slug: string;
        getRoute: () => string;
    }[];
}
export interface IRecipeCardItem {
    title: string;
    imageUrl: string;
    iconUrl: string;
    description: string;
    category: string;
    likes: number | null;
    favorites: number | null;
    recommended: {
        author: {
            firstName: string;
            lastName: string;
            avatarUrl: string;
        };
    } | null;
}
