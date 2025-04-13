import { Box, Image } from '@chakra-ui/react';

interface IBadgeItem {
    iconUrl: string;
    quantity: number;
}

export const AppBadge = ({ item }: { item: IBadgeItem }) => (
    <Box display='flex' alignItems='center' gap={2} minW={14}>
        <Image src={item.iconUrl} alt={item.iconUrl} w={4} h={4} />
        <Box as='span' fontWeight='bold' color='textGreen'>
            {item.quantity}
        </Box>
    </Box>
);
