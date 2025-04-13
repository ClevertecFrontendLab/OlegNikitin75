import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Hide } from '@chakra-ui/react';

import { SliderRecipeCard } from '~/components/slider-recipe-card';
import { IRecipeCardItem } from '~/types/types';
import { RecipeTag } from '~/ui/recipe-tag';
import { SliderRecipeBody } from '~/ui/slider-recipe-body';

export const Slider = ({ items }: { items: IRecipeCardItem[] }) => (
    <Box mb={{ mobile: 6, tablet: 8, desktop: 10, wide: 10 }} position='relative' mt={4}>
        <Hide below='tablet'>
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
                <Button
                    w={{ mobile: '0', tablet: '0', desktop: '40px', wide: '48px' }}
                    h={{ mobile: '0', tablet: '0', desktop: '40px', wide: '48px' }}
                    bg='black'
                    _hover={{ bg: 'blackAlpha.800' }}
                >
                    <ArrowBackIcon color='primary' />
                </Button>
                <Button
                    w={{ mobile: '0', tablet: '0', desktop: '40px', wide: '48px' }}
                    h={{ mobile: '0', tablet: '0', desktop: '40px', wide: '48px' }}
                    bg='black'
                    _hover={{ bg: 'blackAlpha.800' }}
                >
                    <ArrowForwardIcon color='primary' />
                </Button>
            </Box>
        </Hide>

        <Heading
            as='h3'
            fontSize={{ mobile: '24px', tablet: '24px', desktop: '36px', wide: '48px' }}
            fontWeight='medium'
            mb={{ mobile: 3, tablet: 3, desktop: 6, wide: 6 }}
        >
            Новые рецепты
        </Heading>
        <Box
            position='relative'
            overflow={{
                mobile: 'visible',
                tablet: 'hidden',
                desktop: 'hidden',
                wide: 'hidden',
            }}
            h={{ mobile: '220px', tablet: '220px', desktop: '402px', wide: '414px' }}
        >
            <Flex
                position='absolute'
                gap={{ mobile: 2, tablet: 3, desktop: 3, wide: 6 }}
                style={{
                    width: 'calc(100% + 24px)',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    scrollbarWidth: 'none',
                    paddingLeft: '12px',
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        flex={{
                            mobile: '0 0 40%',
                            tablet: '0 0 10%',
                        }}
                        style={{ scrollSnapAlign: 'start' }}
                    >
                        <SliderRecipeCard
                            imageUrl={item.imageUrl}
                            iconUrl={item.iconUrl}
                            category={item.category}
                            bgColor='secondary'
                            tag={
                                <RecipeTag
                                    iconUrl={item.iconUrl}
                                    category={item.category}
                                    bgColor='secondary'
                                    favorites={item.favorites}
                                    likes={item.likes}
                                />
                            }
                            body={
                                <SliderRecipeBody
                                    title={item.title}
                                    description={item.description}
                                />
                            }
                        />
                    </Box>
                ))}
            </Flex>
        </Box>
    </Box>
);
