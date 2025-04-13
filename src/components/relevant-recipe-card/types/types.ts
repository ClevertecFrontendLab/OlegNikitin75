import { ReactNode } from 'react';

export interface IRecipeCardProps {
    isVertical?: boolean;
    imageUrl?: string;
    tag: ReactNode;
    body: ReactNode;
    footer?: ReactNode;
    recommended?: {
        author: {
            firstName: string;
            lastName: string;
            avatarUrl: string;
        };
    } | null;
}
