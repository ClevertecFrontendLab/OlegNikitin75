import { RECIPE_ITEMS_SLIDER as sliderItems } from '~/constants/recipe-items';
import { RECIPE_ITEMS_HOME as homeItems } from '~/constants/recipe-items';
import { RELEVANT_RECIPE_ITEMS as relevantItems } from '~/constants/relevant-recipe-items';
import { PageLayout } from '~/layouts/page-layout';
import { Blogs } from '~/modules/blogs';
import { RecipeGroupList } from '~/modules/recipe-group-list';
import { Relevant } from '~/modules/relevant';
import { Slider } from '~/modules/slider';

export const HomePage = () => (
    <PageLayout heading='Приятного аппетита!'>
        <Slider items={sliderItems} />
        <RecipeGroupList title='Самое сочное' items={homeItems} isHomePage />
        <Blogs />
        <Relevant data={relevantItems[0]} />
    </PageLayout>
);
