const getRouteParams = <T extends Record<string, boolean>>(object: T) =>
    Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<
        keyof T,
        string
    >;

//Главная
export const getHomePageRoute = () => '/';

//Салаты
export const saladsPageRouteParams = getRouteParams({ slug: true });
export type SaladsPageRouteParams = typeof saladsPageRouteParams;
export const getSaladsPageRoute = ({ slug }: SaladsPageRouteParams) => `/salads/${slug}`;

//Закуски
export const appetizersPageRouteParams = getRouteParams({ slug: true });
export type AppetizersPageRouteParams = typeof appetizersPageRouteParams;
export const getAppetizersPageRoute = ({ slug }: AppetizersPageRouteParams) =>
    `/appetizers/${slug}`;

//Первые блюда
export const firstCoursesPageRouteParams = getRouteParams({ slug: true });
export type FirstCoursesPageRouteParams = typeof firstCoursesPageRouteParams;
export const getFirstCoursesPageRoute = ({ slug }: FirstCoursesPageRouteParams) => `/soups/${slug}`;

//Вторые блюда
export const mainCoursesPageRouteParams = getRouteParams({ slug: true });
export type MainCoursesPageRouteParams = typeof mainCoursesPageRouteParams;
export const getMainCoursesPageRoute = ({ slug }: FirstCoursesPageRouteParams) =>
    `/main-courses/${slug}`;

//Десерты и выпечка
export const dessertsAndBakeryPageRouteParams = getRouteParams({ slug: true });
export type DessertsAndBakeryPageRouteParams = typeof dessertsAndBakeryPageRouteParams;
export const getDessertsAndBakeryPageRoute = ({ slug }: DessertsAndBakeryPageRouteParams) =>
    `/desserts/${slug}`;

//Гриль
export const grillDishesPageRouteParams = getRouteParams({ slug: true });
export type GrillDishesPageRouteParams = typeof grillDishesPageRouteParams;
export const getGrillDishesPageRoute = ({ slug }: GrillDishesPageRouteParams) => `/grill/${slug}`;

//Веганская кухня
export const veganCuisinePageRouteParams = getRouteParams({ slug: true });
export type VeganCuisinePageRouteParam = typeof veganCuisinePageRouteParams;
export const getVeganPageRoute = ({ slug }: VeganCuisinePageRouteParam) => `/vegan/${slug}`;

//Детская кухня
export const kidsDishesPageRouteParams = getRouteParams({ slug: true });
export type KidsDishesPageRouteParams = typeof kidsDishesPageRouteParams;
export const getKidsDishesPageRoute = ({ slug }: KidsDishesPageRouteParams) => `/kids/${slug}`;

//Лечебное питание
export const therapeuticNutritionPageRouteParams = getRouteParams({ slug: true });
export type TherapeuticNutritionPageRouteParams = typeof therapeuticNutritionPageRouteParams;
export const getTherapeuticNutritionPageRoute = ({ slug }: TherapeuticNutritionPageRouteParams) =>
    `/diet/${slug}`;

//Национальная кухня
export const nationalCuisinePageRouteParams = getRouteParams({ slug: true });
export type NationalCuisinePageRouteParams = typeof nationalCuisinePageRouteParams;
export const getNationalCuisinePageRoute = ({ slug }: NationalCuisinePageRouteParams) =>
    `/national/${slug}`;

//Соусы
export const saucesPageRouteParams = getRouteParams({ slug: true });
export type SaucesPageRouteParams = typeof saucesPageRouteParams;
export const getSaucesPageRoute = ({ slug }: SaucesPageRouteParams) => `/sauces/${slug}`;

//Заготовки
export const preservesPageRouteParams = getRouteParams({ slug: true });
export type PreservesPageRouteParams = typeof preservesPageRouteParams;
export const getPreservesPageRoute = ({ slug }: PreservesPageRouteParams) => `/preserves/${slug}`;

//Напитки
export const drinksPageRouteParams = getRouteParams({ slug: true });
export type DrinksPageRouteParams = typeof drinksPageRouteParams;
export const getDrinksPageRoute = ({ slug }: DrinksPageRouteParams) => `/drinks/${slug}`;

//Самое сочное
export const getJuiciestPageRoute = () => '/juiciest';
