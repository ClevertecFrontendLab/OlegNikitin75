import { Box, Button, Heading, Image } from '@chakra-ui/react';
import { FC } from 'react';

import { IRecipeCardSimpleProps } from './types/types';

export const RecipeCardSimple: FC<IRecipeCardSimpleProps> = ({ iconUrl, title }) => (
    <Box
        rounded='xl'
        border='1px'
        borderColor='blackAlpha.200'
        display='flex'
        gap={3}
        justifyContent='space-between'
        py={{ mobile: '10px', tablet: '10px', desktop: '10px', wide: '12px' }}
        px={{ mobile: '12px', tablet: '12px', desktop: '12px', wide: '24px' }}
        _hover={{
            shadow: '0px 2px 4px -1px #207E000F, 0px 4px 6px -1px #207E001A',
        }}
    >
        <Box fontSize='20px' fontWeight='medium' display='flex' gap={2} alignItems='center'>
            <Image src={iconUrl} w={6} h={6} />
            <Heading
                noOfLines={1}
                wordBreak='break-all'
                maxW={{ mobile: '194px', tablet: '100%', desktop: '100%', wide: '100%' }}
                as='h4'
                fontSize={{ mobile: '16px', tablet: '16px', desktop: '18px', wide: '20px' }}
                fontWeight='medium'
            >
                {title}
            </Heading>
        </Box>
        <Button
            flexShrink={0}
            w={{ mobile: '70px', tablet: '70px', desktop: '70px', wide: '87px' }}
            h='32px'
            rounded='md'
            fontSize={{ mobile: '12px', tablet: '12px', desktop: '12px', wide: '14px' }}
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
