export interface IMenuItem {
    title: string;
    iconUrl: string;
    subMenuItems: {
        name: string;
        link: string;
    }[];
}
