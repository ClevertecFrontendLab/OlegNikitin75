import { RECIPE_ITEMS_SLIDER as sliderItems } from '~/constants/recipe-items';
import { RECIPE_ITEMS_HOME as homeItems } from '~/constants/recipe-items';
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
        <Relevant
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
    </PageLayout>
);
