import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';

import { IRecipeCardItem } from '~/types/types';

import { RecipeBody } from '../recipe-body';
import { RecipeCard } from '../recipe-card';
import { RecipeTag } from '../recipe-tag';

export const Slider = ({ items }: { items: IRecipeCardItem[] }) => (
    <Box mb={10} position='relative' mt={4}>
        <Box
            position='absolute'
            w='102%'
            mx='auto'
            display='flex'
            left={-3}
            justifyContent='space-between'
            mb={6}
            top='45%'
            zIndex={10}
        >
            <Button w={12} h={12} bg='black' _hover={{ bg: 'blackAlpha.800' }}>
                <ArrowBackIcon color='white' />
            </Button>
            <Button w={12} h={12} bg='black' _hover={{ bg: 'blackAlpha.800' }}>
                <ArrowForwardIcon color='white' />
            </Button>
        </Box>
        <Heading as='h3' size='2xl' fontWeight='medium' mb={6}>
            Новые рецепты
        </Heading>
        <Flex justifyContent='space-between' gap={6}>
            {items.map((item, index) => (
                <RecipeCard
                    key={index}
                    imageUrl={item.imageUrl}
                    tag={
                        <RecipeTag
                            iconUrl={item.iconUrl}
                            category={item.category}
                            bgColor='secondary'
                            favorites={item.favorites}
                            likes={item.likes}
                        />
                    }
                    body={<RecipeBody title={item.title} description={item.description} />}
                    isVertical
                />
            ))}
        </Flex>
    </Box>
);
