import { Route, Routes } from 'react-router';

import * as routes from '~/lib/routes';
import { HomePage } from '~/pages/home-page';
import { JuiciestPage } from '~/pages/juiciest-page';
import { NotFoundPage } from '~/pages/not-found-page';
import { VeganCuisinePage } from '~/pages/vegan-cuisine-page';

export const AppRouter = () => (
    <Routes>
        <Route path={routes.getHomePageRoute()} element={<HomePage />} />
        <Route path={routes.getVeganCuisinePageRoute()} element={<VeganCuisinePage />} />
        <Route path={routes.getJuiciestPageRoute()} element={<JuiciestPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
);
