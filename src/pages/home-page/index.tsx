import { Blogs } from '~/components/blogs';
import { PageLayout } from '~/components/layouts/page-layout';
import { RecipeGroupList } from '~/components/recipe-group-list';
import { Relevant } from '~/components/relevant';
import { Slider } from '~/components/slider';
import { RECIPE_ITEMS_SLIDER as sliderItems } from '~/constants/recipe-items';
import { RECIPE_ITEMS_HOME as homeItems } from '~/constants/recipe-items';

export const HomePage = () => (
    <PageLayout heading='Приятного аппетита!'>
        <Slider items={sliderItems} />
        <RecipeGroupList title='Самое сочное' items={homeItems} />
        <Blogs />
        <Relevant
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
    </PageLayout>
);
