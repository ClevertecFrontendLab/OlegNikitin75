import { ReactNode } from 'react';

export interface IRecipeCardProps {
    isVertical?: boolean;
    imageUrl?: string;
    tag: ReactNode;
    body: ReactNode;
    footer?: ReactNode;
    iconUrl: string;
    category: string;
    bgColor: string;
    recommended?: {
        author: {
            firstName: string;
            lastName: string;
            avatarUrl: string;
        };
    } | null;
}
