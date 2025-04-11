import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { IRecipeCardProps } from './types/types';

export const RelevantRecipeCard: FC<IRecipeCardProps> = ({ tag, footer, body }) => (
    <Box
        as='article'
        w={{ mobile: '100%', tablet: '232px', desktop: '282px', wide: '322px' }}
        border='1px'
        borderColor='blackAlpha.200'
        rounded='xl'
        overflow='hidden'
        _hover={{
            shadow: '0px 2px 4px -1px #207E000F, 0px 4px 6px -1px #207E001A',
        }}
    >
        <Flex display='flex' flexDir='column' h='100%'>
            <Box
                px={{ mobile: '8px', tablet: '8px', desktop: '24px', wide: '24px' }}
                py={{ mobile: '6px', tablet: '6px', desktop: '20px', wide: '20px' }}
                display='flex'
                flex='1'
                flexDirection='column'
                justifyContent='space-between'
            >
                {!!footer && tag}
                {body}
                {!footer && tag}
                {!!footer && footer}
            </Box>
        </Flex>
    </Box>
);
