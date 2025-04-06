import { Route, Routes } from 'react-router';

import * as routes from '~/lib/routes';
import { AppetizersPage } from '~/pages/appetizers-page';
import { DessertsPage } from '~/pages/desserts-page';
import { DrinksPage } from '~/pages/drinks-page';
import { FirstCoursesPage } from '~/pages/first-courses-page';
import { GrillDishesPage } from '~/pages/grill-dishes-page';
import { HomePage } from '~/pages/home-page';
import { JuiciestPage } from '~/pages/juiciest-page';
import { KidsDishesPage } from '~/pages/kids-dishes-page';
import { MainCoursesPage } from '~/pages/main-courses-page';
import { NationalCuisinePage } from '~/pages/national-cuisine-page';
import { NotFoundPage } from '~/pages/not-found-page';
import { PreservesPage } from '~/pages/preserves-page';
import { SaladsPage } from '~/pages/salads-page';
import { SaucesPage } from '~/pages/sauces-page';
import { TherapeuticNutritionPage } from '~/pages/therapeutic-nutrition-page';
import { VeganCuisinePage } from '~/pages/vegan-cuisine-page';

export const AppRouter = () => (
    <Routes>
        <Route path={routes.getHomePageRoute()} element={<HomePage />} />
        <Route path={routes.getSaladsPageRoute({ slug: ':slug' })} element={<SaladsPage />} />
        <Route
            path={routes.getAppetizersPageRoute({ slug: ':slug' })}
            element={<AppetizersPage />}
        />
        <Route
            path={routes.getAppetizersPageRoute({ slug: ':slug' })}
            element={<AppetizersPage />}
        />
        <Route
            path={routes.getFirstCoursesPageRoute({ slug: ':slug' })}
            element={<FirstCoursesPage />}
        />
        <Route
            path={routes.getMainCoursesPageRoute({ slug: ':slug' })}
            element={<MainCoursesPage />}
        />
        <Route
            path={routes.getMainCoursesPageRoute({ slug: ':slug' })}
            element={<MainCoursesPage />}
        />
        <Route
            path={routes.getDessertsAndBakeryPageRoute({ slug: ':slug' })}
            element={<DessertsPage />}
        />
        <Route
            path={routes.getGrillDishesPageRoute({ slug: ':slug' })}
            element={<GrillDishesPage />}
        />
        <Route
            path={routes.getVeganCuisinePageRoute({ slug: ':slug' })}
            element={<VeganCuisinePage />}
        />
        <Route
            path={routes.getKidsDishesPageRoute({ slug: ':slug' })}
            element={<KidsDishesPage />}
        />
        <Route
            path={routes.getTherapeuticNutritionPageRoute({ slug: ':slug' })}
            element={<TherapeuticNutritionPage />}
        />
        <Route
            path={routes.getNationalCuisinePageRoute({ slug: ':slug' })}
            element={<NationalCuisinePage />}
        />
        <Route path={routes.getSaucesPageRoute({ slug: ':slug' })} element={<SaucesPage />} />
        <Route path={routes.getPreservesPageRoute({ slug: ':slug' })} element={<PreservesPage />} />
        <Route path={routes.getDrinksPageRoute({ slug: ':slug' })} element={<DrinksPage />} />
        <Route path={routes.getJuiciestPageRoute()} element={<JuiciestPage />} />
        <Route path='*' element={<NotFoundPage />} />
    </Routes>
);
