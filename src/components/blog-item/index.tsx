import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { UserCard } from '../user-card';
import { IBlogItemProps } from './types';

export const BlogItem: FC<IBlogItemProps> = ({ item }) => (
    <Box as='article' bg='white' w='426px' h='184px' rounded={4} p={6}>
        <UserCard
            imageUrl={item.imageUrl}
            firstName={item.author.firstName}
            lastName={item.author.lastName}
            nickname={item.author.nickname}
        />
        <Text mt='28px'>{item.description}</Text>
    </Box>
);
