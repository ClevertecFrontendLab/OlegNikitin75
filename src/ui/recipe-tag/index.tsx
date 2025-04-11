import { Box, Flex, Hide, Image, Show } from '@chakra-ui/react';
import { FC } from 'react';

import { CategoryLabel } from '../category-label';

interface IRecipeTagProps {
    iconUrl: string;
    category: string;
    favorites: number | null;
    likes: number | null;
    bgColor?: string;
    isRelevant?: boolean;
}

export const RecipeTag: FC<IRecipeTagProps> = ({
    iconUrl,
    category,
    likes,
    favorites,
    isRelevant,
    bgColor = 'primary',
}) => (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
        {isRelevant && (
            <Show below='tablet'>
                <CategoryLabel iconUrl={iconUrl} category={category} bgColor={bgColor} />
            </Show>
        )}
        <Hide below='tablet'>
            <CategoryLabel iconUrl={iconUrl} category={category} bgColor={bgColor} />
        </Hide>

        <Flex gap={4} alignItems='center'>
            {!!favorites && (
                <Box
                    as='span'
                    display='inline-flex'
                    gap={2}
                    fontSize='12px'
                    fontWeight='semibold'
                    color='textGreen'
                    alignItems='center'
                >
                    <Image src='/icons/bookmarks.svg' w={3} h={3} />
                    {favorites}
                </Box>
            )}
            {!!likes && (
                <Box
                    as='span'
                    display='inline-flex'
                    gap={2}
                    fontSize='12px'
                    fontWeight='semibold'
                    color='textGreen'
                    alignItems='center'
                >
                    <Image src='/icons/likes.svg' w={3} h={3} />
                    {likes}
                </Box>
            )}
        </Flex>
    </Box>
);
