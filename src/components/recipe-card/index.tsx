import { Box, Flex, Hide, Image, Show } from '@chakra-ui/react';
import { FC } from 'react';

import { CategoryLabel } from '~/ui/category-label';

import { RecommendationBadge } from '../recommendation-badge';
import { IRecipeCardProps } from './types/types';

export const RecipeCard: FC<IRecipeCardProps> = ({
    imageUrl,
    tag,
    footer,
    body,
    iconUrl,
    category,
    bgColor,
    isVertical = false,
    recommended,
}) => (
    <Box
        as='article'
        w={{ mobile: '100%', tablet: '356px', desktop: '100%', wide: '668px' }}
        maxW={isVertical ? '232px' : 'auto'}
        border='1px'
        borderColor='blackAlpha.200'
        rounded='xl'
        overflow='hidden'
        _hover={{
            shadow: '0px 2px 4px -1px #207E000F, 0px 4px 6px -1px #207E001A',
        }}
    >
        <Flex display='flex' flexDir={isVertical ? 'column' : 'row'}>
            {!!imageUrl && (
                <Box position='relative'>
                    <Image
                        src={imageUrl}
                        w={{ mobile: '158px', tablet: '158px', desktop: '346px', wide: '346px' }}
                        h={{ mobile: '132px', tablet: '132px', desktop: '256px', wide: '248px' }}
                        objectFit='cover'
                    />
                    <Show below='tablet'>
                        <Box position='absolute' left={2} top={2}>
                            <CategoryLabel
                                iconUrl={iconUrl}
                                category={category}
                                bgColor={bgColor}
                            />
                        </Box>
                    </Show>
                    <Hide below='tablet'>
                        {!!recommended && (
                            <RecommendationBadge
                                iconUrl={recommended.author.avatarUrl}
                                firstName={recommended.author.firstName}
                                lastName={recommended.author.lastName}
                            />
                        )}
                    </Hide>
                </Box>
            )}
            <Box
                px={{ mobile: '8px', tablet: '8px', desktop: '20px', wide: '24px' }}
                py={{ mobile: '6px', tablet: '6px', desktop: '24px', wide: '20px' }}
                display='flex'
                flex='1'
                flexDirection='column'
                justifyContent='space-between'
            >
                <Flex
                    flexDirection='column'
                    gap={{ mobile: '6px', tablet: '6px', desktop: 6, wide: 6 }}
                >
                    {!!footer && tag}
                    {body}
                </Flex>

                {!footer && tag}
                {!!footer && footer}
            </Box>
        </Flex>
    </Box>
);
