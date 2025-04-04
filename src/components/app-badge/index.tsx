import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';

import { IBadgeItem } from './types';

interface Props {
    item: IBadgeItem;
}

export const AppBadge: FC<Props> = ({ item }) => (
    <Box display='flex' alignItems='center' gap={2} minW={14}>
        <Image src={item.iconUrl} alt={item.iconUrl} w={4} h={4} />
        <Box as='span' fontWeight='bold' color='textGreen'>
            {item.quantity}
        </Box>
    </Box>
);
