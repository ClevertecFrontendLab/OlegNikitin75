import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { UserCard } from '../user-card';
import { IBlogItemProps } from './types';

export const BlogItem: FC<IBlogItemProps> = ({ item }) => (
    <Box
        as='article'
        bg='white'
        w={{ mobile: '100%', tablet: '226px', desktop: '266px', wide: '426px' }}
        h={{ mobile: '152px', tablet: '152px', desktop: '160px', wide: '184px' }}
        rounded='8px'
        p={{ mobile: '16px', tablet: '16px', desktop: '16px', wide: '24px' }}
        _hover={{
            shadow: '0px 2px 4px -1px #207E000F, 0px 4px 6px -1px #207E001A',
        }}
    >
        <UserCard
            imageUrl={item.imageUrl}
            firstName={item.author.firstName}
            lastName={item.author.lastName}
            nickname={item.author.nickname}
        />
        <Text
            noOfLines={3}
            mt={{ mobile: 2, tablet: 2, desktop: 2, wide: 6 }}
            fontSize={{ mobile: '14px', tablet: '14px', desktop: '16px', wide: '16px' }}
        >
            {item.description}
        </Text>
    </Box>
);
