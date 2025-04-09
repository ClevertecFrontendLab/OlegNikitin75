import { Box, Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface IRecipeTagProps {
    iconUrl: string;
    category: string;
    favorites: number | null;
    likes: number | null;
    bgColor?: string;
}

export const RecipeTag: FC<IRecipeTagProps> = ({
    iconUrl,
    category,
    likes,
    favorites,
    bgColor = 'primary',
}) => (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box
            as='span'
            display='inline-flex'
            alignItems='center'
            gap={2}
            fontSize='sm'
            bg={bgColor}
            px={2}
            py='2px'
            rounded='sm'
        >
            <Image src={iconUrl} w={4} h={4} />
            {category}
        </Box>
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
