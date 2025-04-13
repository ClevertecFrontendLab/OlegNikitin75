export interface ITabItemProps {
    name: string;
    link: string;
    tabItemIndex?: number;
    index: number;
    isActive?: boolean;
    onClick: (index: number) => void;
}
