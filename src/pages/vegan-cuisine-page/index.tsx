import { Box, Button } from '@chakra-ui/react';

import { MENU_ITEMS } from '~/constants/menu-items';
import { RECIPE_ITEMS_VEGAN as veganItems } from '~/constants/recipe-items';
import { RELEVANT_RECIPE_ITEMS as relevantItems } from '~/constants/relevant-recipe-items';
import { PageLayout } from '~/layouts/page-layout';
import { RecipeGroupList } from '~/modules/recipe-group-list';
import { Relevant } from '~/modules/relevant';
import { TabList } from '~/modules/tab-list';

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
        <Relevant data={relevantItems[1]} />
    </PageLayout>
);
