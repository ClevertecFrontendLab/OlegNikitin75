import { Box, Button } from '@chakra-ui/react';

import { RECIPE_ITEMS_JUICIEST as juisiestItems } from '~/constants/recipe-items';
import { PageLayout } from '~/layouts/page-layout';
import { RecipeGroupList } from '~/modules/recipe-group-list';
import { Relevant } from '~/modules/relevant';

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
