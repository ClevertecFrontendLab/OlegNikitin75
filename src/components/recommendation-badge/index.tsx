import { Box, Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface Iindex {
    iconUrl: string;
    firstName: string;
    lastName: string;
}

export const RecommendationBadge: FC<Iindex> = ({
    iconUrl = '/image/user-avatar.png',
    firstName = 'Екатерина',
    lastName = 'Константинопольская',
}) => (
    <Flex
        position='absolute'
        bottom={4}
        left={4}
        bg='avocado'
        px={2}
        py={1}
        w='fit-content'
        gap={2}
        alignItems='center'
        rounded='md'
        fontSize='sm'
    >
        <Box w={4} h={4} rounded='100%' overflow='hidden'>
            <Image w={4} h={4} src={iconUrl} alt={`${firstName} ${lastName}`} />
        </Box>
        <Box>{`${firstName} ${lastName}`}</Box>
        рекомендует
    </Flex>
);
