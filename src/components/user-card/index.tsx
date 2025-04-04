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
            <Box>
                <Image src={imageUrl} alt='user-card' />
            </Box>
            <Box>
                <Flex alignItems='center' gap={1}>
                    <Text fontSize='lg' fontWeight='medium'>
                        {firstName}
                    </Text>
                    <Text fontSize='lg' fontWeight='medium'>
                        {lastName}
                    </Text>
                </Flex>
                <Text color='black' fontSize='sm' opacity={0.6}>
                    {nickname}
                </Text>
            </Box>
        </Flex>
    </Box>
);
