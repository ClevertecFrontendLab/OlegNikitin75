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
