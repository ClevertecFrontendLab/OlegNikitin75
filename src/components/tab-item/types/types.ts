export interface ITabItemProps {
    name: string;
    link: string;
    tabItemIndex?: number;
    index: number;
    onClick: (index: number) => void;
}
