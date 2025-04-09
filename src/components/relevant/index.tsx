import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import { RecipeBody } from '../recipe-body';
import { RecipeCard } from '../recipe-card';
import { RecipeCardSimple } from '../recipe-card-simple';
import { RecipeTag } from '../recipe-tag';

export const Relevant = ({ title, description }: { title: string; description: string }) => (
    <Box
        as='section'
        w='100%'
        justifyContent='center'
        mt={10}
        pt={6}
        borderTop='1px'
        borderColor='blackAlpha.200'
    >
        <Box display='flex' justifyContent='space-between' mb={6}>
            <Heading as='h3' size='2xl' textAlign='center' fontWeight='medium'>
                {title}
            </Heading>
            <Text maxW='668px' fontWeight='medium' opacity={0.48} pr={4}>
                {description}
            </Text>
        </Box>
        <Box display='flex' gap={6}>
            <Flex display='flex' gap={6}>
                <RecipeCard
                    isVertical
                    //imageUrl='image'
                    tag={
                        <RecipeTag
                            iconUrl='/icons/4.svg'
                            category='Вторые блюда'
                            favorites={1}
                            likes={2}
                        />
                    }
                    //footer='footer'
                    body={
                        <RecipeBody
                            title='Картошка, тушенная с болгарским перцем и фасолью в томатном соусе'
                            description='Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.'
                        />
                    }
                />
                <RecipeCard
                    isVertical
                    //imageUrl='image'
                    tag={
                        <RecipeTag
                            iconUrl='/icons/4.svg'
                            category='Вторые блюда'
                            favorites={4}
                            likes={8}
                        />
                    }
                    //footer='footer'
                    body={
                        <RecipeBody
                            title='Капустные котлеты'
                            description='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
                        />
                    }
                />
            </Flex>
            <Stack w='100%'>
                <RecipeCardSimple iconUrl='/icons/4.svg' title='Стейк для вегетарианцев' />
                <RecipeCardSimple iconUrl='/icons/4.svg' title='Котлеты из гречки и фасоли' />
                <RecipeCardSimple iconUrl='/icons/3.svg' title='Сырный суп с лапшой и брокколи' />
            </Stack>
        </Box>
    </Box>
);
