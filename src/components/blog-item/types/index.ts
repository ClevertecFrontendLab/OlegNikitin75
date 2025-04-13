export interface IBlogItemProps {
    item: {
        description: string;
        imageUrl: string;
        author: {
            firstName: string;
            lastName: string;
            nickname: string;
        };
    };
}
