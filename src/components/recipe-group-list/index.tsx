import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link as BrowserLink } from 'react-router';

import { getJuiciestPageRoute } from '~/lib/routes';
import { IRecipeCardItem } from '~/types/types';

import { RecipeBody } from '../recipe-body';
import { RecipeCard } from '../recipe-card';
import { RecipeFooter } from '../recipe-footer';
import { RecipeTag } from '../recipe-tag';

export const RecipeGroupList = ({
    title,
    items,
    trigger,
}: {
    title?: string;
    items: IRecipeCardItem[];
    trigger?: ReactNode;
}) => (
    <Box mb={10}>
        {!!title && (
            <Box display='flex' justifyContent='space-between' mb={6}>
                <Heading as='h3' size='2xl' textAlign='center' fontWeight='medium'>
                    {title}
                </Heading>
                <Link
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
            </Box>
        )}

        <Flex flexWrap='wrap' justifyContent='space-between' gap={6}>
            {items.map((item, index) => (
                <RecipeCard
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
        {!!trigger && trigger}
    </Box>
);
