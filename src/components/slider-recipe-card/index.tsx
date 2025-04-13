import { Box, Flex, Image, Show } from '@chakra-ui/react';
import { FC } from 'react';

import { CategoryLabel } from '~/ui/category-label';

import { ISliderRecipeCardProps } from './types/types';

export const SliderRecipeCard: FC<ISliderRecipeCardProps> = ({
    imageUrl,
    tag,
    iconUrl,
    category,
    bgColor,
    body,
}) => (
    <Box
        as='article'
        w={{ mobile: '158px', tablet: '158px', desktop: '277px', wide: '322px' }}
        h={{ mobile: '220px', tablet: '220px', desktop: '402px', wide: '414px' }}
        border='1px'
        borderColor='blackAlpha.200'
        rounded='xl'
        overflow='hidden'
        _hover={{
            shadow: '0px 2px 4px -1px #207E000F, 0px 4px 6px -1px #207E001A',
        }}
        flexShrink={0}
    >
        <Flex display='flex' flexDir='column' h='100%'>
            <Box position='relative'>
                <Image
                    src={imageUrl}
                    w='100%'
                    h={{ mobile: '128px', tablet: '128px', desktop: '230px', wide: '230px' }}
                />
                <Show below='tablet'>
                    <Box position='absolute' left={2} top={2}>
                        <CategoryLabel iconUrl={iconUrl} category={category} bgColor={bgColor} />
                    </Box>
                </Show>
            </Box>

            <Box
                px={{ mobile: '8px', tablet: '8px', desktop: '12px', wide: '24px' }}
                py={{ mobile: '6px', tablet: '6px', desktop: '12px', wide: '20px' }}
                display='flex'
                flex='1'
                flexDirection='column'
                justifyContent='space-between'
            >
                {body}
                {tag}
            </Box>
        </Flex>
    </Box>
);
