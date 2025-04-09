import { Box, Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';

import { RecommendationBadge } from '../recommendation-badge';
import { IRecipeCardProps } from './types/types';

export const RecipeCard: FC<IRecipeCardProps> = ({
    imageUrl,
    tag,
    footer,
    body,
    isVertical = false,
    recommended,
}) => (
    <Box
        as='article'
        maxW='668px'
        border='1px'
        borderColor='blackAlpha.200'
        rounded='xl'
        overflow='hidden'
        _hover={{
            shadow: 'lg',
        }}
    >
        <Flex display='flex' flexDir={isVertical ? 'column' : 'row'}>
            {!!imageUrl && (
                <Box position='relative'>
                    <Image src={imageUrl} />
                    {!!recommended && (
                        <RecommendationBadge
                            iconUrl={recommended.author.avatarUrl}
                            firstName={recommended.author.firstName}
                            lastName={recommended.author.lastName}
                        />
                    )}
                </Box>
            )}
            <Box px={6} py={5} display='flex' flexDirection='column' justifyContent='space-between'>
                {!!footer && tag}
                {body}
                {!footer && tag}
                {!!footer && footer}
            </Box>
        </Flex>
    </Box>
);
