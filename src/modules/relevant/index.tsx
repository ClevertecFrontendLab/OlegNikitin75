import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { RecipeCardSimple } from '~/components/recipe-card-simple';
import { RelevantRecipeCard } from '~/components/relevant-recipe-card';
import { RecipeTag } from '~/ui/recipe-tag';
import { RelevantRecipeBody } from '~/ui/relevant-recipe-body';

type RelevantProps = {
    data: {
        title: string;
        description: string;
        items: {
            title: string;
            description: string;
        }[];
    };
};

export const Relevant = ({ data }: RelevantProps) => (
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
                w={{ mobile: '328px', tablet: '100%', desktop: '270px', wide: '450px' }}
                fontWeight='medium'
                flexShrink={0}
            >
                {data.title}
            </Heading>
            <Text
                w={{ mobile: '320px', tablet: '100%', desktop: '578px', wide: '668px' }}
                fontWeight='medium'
                fontSize={{ mobile: '14px', tablet: '14px', desktop: '16px', wide: '16px' }}
                opacity={0.64}
                pr={{ mobile: 6, tablet: 6, desktop: 14, wide: '60px' }}
            >
                {data.description}
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
                        <RelevantRecipeBody
                            isRelevant
                            title={data.items[0].title}
                            description={data.items[0].description}
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
                        <RelevantRecipeBody
                            isRelevant
                            title={data.items[1].title}
                            description={data.items[1].description}
                        />
                    }
                />
            </Flex>
            <Flex
                flexDirection='column'
                gap={{ mobile: '12px', tablet: '6px', desktop: '13px' }}
                w={{ mobile: '100%', tablet: '240px', desktop: '100%', wide: '100%' }}
            >
                <RecipeCardSimple iconUrl='/icons/4.svg' title='Стейк для вегетарианцев' />
                <RecipeCardSimple iconUrl='/icons/4.svg' title='Котлеты из гречки и фасоли' />
                <RecipeCardSimple iconUrl='/icons/3.svg' title='Сырный суп с лапшой и брокколи' />
            </Flex>
        </Box>
    </Box>
);
