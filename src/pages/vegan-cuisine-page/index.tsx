import { Box, Button } from '@chakra-ui/react';

import { PageLayout } from '~/components/layouts/page-layout';
import { RecipeGroupList } from '~/components/recipe-group-list';
import { Relevant } from '~/components/relevant';
import { TabList } from '~/components/tab-list';
import { MENU_ITEMS } from '~/constants/menu-items';
import { RECIPE_ITEMS_VEGAN as veganItems } from '~/constants/recipe-items';

export const VeganCuisinePage = () => (
    <PageLayout
        heading='Веганская кухня'
        description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
    >
        <TabList items={MENU_ITEMS[6].subMenuItems} />
        <RecipeGroupList
            items={veganItems}
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
            title='Десерты и выпечка'
            description='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
        />
    </PageLayout>
);
