import { Box, Button } from '@chakra-ui/react';

import { PageLayout } from '~/components/layouts/page-layout';
import { RecipeGroupList } from '~/components/recipe-group-list';
import { Relevant } from '~/components/relevant';
import { RECIPE_ITEMS_JUICIEST as juisiestItems } from '~/constants/recipe-items';

export const JuiciestPage = () => (
    <PageLayout heading='Самое сочное'>
        <RecipeGroupList
            items={juisiestItems}
            trigger={
                <Box mt={4} textAlign='center'>
                    <Button
                        bg='secondary'
                        _hover={{ opacity: 0.6 }}
                        fontWeight='semibold'
                        px={4}
                        h={10}
                    >
                        Загрузить еще
                    </Button>
                </Box>
            }
        />
        <Relevant
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
    </PageLayout>
);
