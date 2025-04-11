import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { IUserCardProps } from './types';

export const UserCard: FC<IUserCardProps> = ({
    imageUrl = '/image/user-avatar.png',
    firstName = 'Екатерина',
    lastName = 'Контстантинопольская',
    nickname = '@bake_and_pie',
}) => (
    <Box>
        <Flex alignItems='center' gap={3}>
            <Box w={12} h={12} rounded='full' overflow='hidden' flexShrink={0}>
                <Image src={imageUrl} alt='user-card' />
            </Box>
            <Box>
                <Box as='span' noOfLines={1}>
                    {firstName} {lastName}
                </Box>

                <Text color='black' fontSize='sm' opacity={0.6}>
                    {nickname}
                </Text>
            </Box>
        </Flex>
    </Box>
);
