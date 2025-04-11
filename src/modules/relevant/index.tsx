import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { RecipeCardSimple } from '~/components/recipe-card-simple';
import { RelevantRecipeCard } from '~/components/relevant-recipe-card';
import { RecipeBody } from '~/ui/recipe-body';
import { RecipeTag } from '~/ui/recipe-tag';

export const Relevant = ({ title, description }: { title: string; description: string }) => (
    <Box
        display={{ mobile: 'flex' }}
        flexDirection={{ mobile: 'column' }}
        as='section'
        w='100%'
        mt={{ mobile: 10, tablet: 8, desktop: 10, wide: 10 }}
        pt={6}
        borderTop='1px'
        borderColor='blackAlpha.200'
        mb={{ mobile: 4, tablet: 4, desktop: 0, wide: 0 }}
    >
        <Box
            display='flex'
            justifyContent='space-between'
            mb={6}
            flexDirection={{ mobile: 'column', tablet: 'column', desktop: 'row', wide: 'row' }}
            rowGap={3}
        >
            <Heading
                as='h3'
                fontSize={{ mobile: '24px', tablet: '24px', desktop: '36px', wide: '48px' }}
                fontWeight='medium'
                flexShrink={0}
            >
                {title}
            </Heading>
            <Text
                w={{ mobile: '100%', tablet: '100%', desktop: '500px', wide: '668px' }}
                fontWeight='medium'
                fontSize={{ mobile: '14px', tablet: '14px', desktop: '16px', wide: '16px' }}
                opacity={0.64}
                pr={4}
            >
                {description}
            </Text>
        </Box>
        <Box
            display='flex'
            gap={{ mobile: 3, tablet: 3, desktop: 4, wide: 6 }}
            justifyContent='space-between'
            flexDirection={{ mobile: 'column', tablet: 'row', desktop: 'row', wide: 'row' }}
        >
            <Flex
                display='flex'
                gap={{ mobile: 3, tablet: 3, desktop: 4, wide: 6 }}
                flexDirection={{ mobile: 'column', tablet: 'row', desktop: 'row', wide: 'row' }}
            >
                <RelevantRecipeCard
                    isVertical
                    tag={
                        <RecipeTag
                            isRelevant
                            iconUrl='/icons/4.svg'
                            category='Вторые блюда'
                            favorites={1}
                            likes={2}
                        />
                    }
                    body={
                        <RecipeBody
                            isRelevant
                            title='Картошка, тушенная с болгарским перцем и фасолью в томатном соусе'
                            description='Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.'
                        />
                    }
                />
                <RelevantRecipeCard
                    isVertical
                    tag={
                        <RecipeTag
                            isRelevant
                            iconUrl='/icons/4.svg'
                            category='Вторые блюда'
                            favorites={4}
                            likes={8}
                        />
                    }
                    body={
                        <RecipeBody
                            isRelevant
                            title='Капустные котлеты'
                            description='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
                        />
                    }
                />
            </Flex>
            <Stack w={{ mobile: '100%', tablet: '240px', desktop: '100%', wide: '100%' }}>
                <RecipeCardSimple iconUrl='/icons/4.svg' title='Стейк для вегетарианцев' />
                <RecipeCardSimple iconUrl='/icons/4.svg' title='Котлеты из гречки и фасоли' />
                <RecipeCardSimple iconUrl='/icons/3.svg' title='Сырный суп с лапшой и брокколи' />
            </Stack>
        </Box>
    </Box>
);
