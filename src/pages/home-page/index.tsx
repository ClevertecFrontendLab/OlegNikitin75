import { Blogs } from '~/components/blogs';
import { PageLayout } from '~/components/layouts/page-layout';

export const HomePage = () => (
    <PageLayout heading='Приятного аппетита!'>
        <Blogs />
    </PageLayout>
);
