import { Box, Button, Heading, Image } from '@chakra-ui/react';
import { FC } from 'react';

import { IRecipeCardSimpleProps } from './types/types';

export const RecipeCardSimple: FC<IRecipeCardSimpleProps> = ({ iconUrl, title }) => (
    <Box
        rounded='xl'
        border='1px'
        borderColor='blackAlpha.200'
        display='flex'
        justifyContent='space-between'
        px={6}
        py='14px'
        _hover={{
            shadow: 'lg',
        }}
    >
        <Box fontSize='20px' fontWeight='medium' display='flex' gap={2} alignItems='center'>
            <Image src={iconUrl} w={6} h={6} />
            <Heading noOfLines={1} as='h4' fontSize='20px' fontWeight='medium'>
                {title}
            </Heading>
        </Box>
        <Button
            w='87px'
            h='32px'
            rounded='md'
            fontSize='14px'
            fontWeight='semibold'
            bg='transparent'
            border='1px'
            borderColor='textGreen'
            color='textGreen'
            _hover={{ bg: 'textGreen', color: 'white' }}
        >
            Готовить
        </Button>
    </Box>
);
