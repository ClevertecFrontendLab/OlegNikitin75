import { ReactNode } from 'react';

export interface ISliderRecipeCardProps {
    imageUrl?: string;
    tag: ReactNode;
    body: ReactNode;
    iconUrl: string;
    category: string;
    bgColor: string;
}
