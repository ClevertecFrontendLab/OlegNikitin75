import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Hide, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link as BrowserLink } from 'react-router';

import { RecipeCard } from '~/components/recipe-card';
import { getJuiciestPageRoute } from '~/lib/routes';
import { IRecipeCardItem } from '~/types/types';
import { RecipeBody } from '~/ui/recipe-body';
import { RecipeFooter } from '~/ui/recipe-footer';
import { RecipeTag } from '~/ui/recipe-tag';

export const RecipeGroupList = ({
    title,
    items,
    trigger,
    isHomePage,
}: {
    title?: string;
    items: IRecipeCardItem[];
    trigger?: ReactNode;
    isHomePage?: boolean;
}) => (
    <Box mb={{ mobile: 6, tablet: 8, desktop: 10, wide: 10 }}>
        {!!title && (
            <Box display='flex' justifyContent='space-between' mb={6}>
                <Heading
                    as='h3'
                    fontSize={{ mobile: '24px', tablet: '24px', desktop: '36px', wide: '48px' }}
                    textAlign='center'
                    fontWeight='medium'
                >
                    {title}
                </Heading>
                <Hide below='tablet'>
                    <Link
                        data-test-id='juiciest-link'
                        as={BrowserLink}
                        to={getJuiciestPageRoute()}
                        display='flex'
                        alignItems='center'
                        gap={2}
                        bg='secondary'
                        _hover={{ opacity: 0.6 }}
                        fontSize='lg'
                        fontWeight='semibold'
                        px={4}
                        rounded='lg'
                    >
                        Вся подборка <ArrowForwardIcon />
                    </Link>
                </Hide>
            </Box>
        )}

        <Flex
            flexWrap='wrap'
            justifyContent='space-between'
            gap={{ mobile: 3, tablet: 4, desktop: 4, wide: 6 }}
        >
            {items.map((item, index) => (
                <RecipeCard
                    iconUrl={item.iconUrl}
                    category={item.category}
                    bgColor='primary'
                    recommended={item.recommended}
                    key={index}
                    imageUrl={item.imageUrl}
                    tag={
                        <RecipeTag
                            iconUrl={item.iconUrl}
                            category={item.category}
                            favorites={item.favorites}
                            likes={item.likes}
                        />
                    }
                    body={<RecipeBody title={item.title} description={item.description} />}
                    footer={<RecipeFooter />}
                />
            ))}
        </Flex>

        {isHomePage && (
            <Flex justifyContent='center' mt={3}>
                <Link
                    display={{ mobile: 'flex', tablet: 'flex', desktop: 'none', wide: 'none' }}
                    data-test-id='juiciest-link-mobile'
                    as={BrowserLink}
                    to={getJuiciestPageRoute()}
                    alignItems='center'
                    gap={2}
                    bg='secondary'
                    _hover={{ opacity: 0.6 }}
                    fontWeight='semibold'
                    px={4}
                    rounded='lg'
                    h={10}
                    w='167px'
                >
                    Вся подборка <ArrowForwardIcon />
                </Link>
            </Flex>
        )}

        {!!trigger && trigger}
    </Box>
);
