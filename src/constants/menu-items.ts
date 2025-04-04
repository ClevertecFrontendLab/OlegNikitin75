import { IMenuItem } from './types';

export const MENU_ITEMS: IMenuItem[] = [
    {
        title: 'Салаты',
        iconUrl: '/icons/1.svg',
        subMenuItems: [
            {
                name: 'Мясные салаты',
                link: '/salads/meat',
            },
            {
                name: 'Рыбные салаты',
                link: '/salads/fish',
            },
            {
                name: 'Овощные салаты',
                link: '/salads/vegetable',
            },
            {
                name: 'Теплые салаты',
                link: '/salads/warm',
            },
        ],
    },
    {
        title: 'Закуски',
        iconUrl: '/icons/2.svg',
        subMenuItems: [
            {
                name: 'Мясные закуски',
                link: '/appetizers/meat',
            },
            {
                name: 'Рыбные закуски',
                link: '/appetizers/fish',
            },
            {
                name: 'Овощные закуски',
                link: '/appetizers/vegetable',
            },
            {
                name: 'Теплые закуски',
                link: '/appetizers/warm',
            },
            {
                name: 'Бутерброды',
                link: '/appetizers/sandwiches',
            },
            {
                name: 'Фастфуд',
                link: '/appetizers/fastfood',
            },
        ],
    },
    {
        title: 'Первые блюда',
        iconUrl: '/icons/3.svg',
        subMenuItems: [
            {
                name: 'Мясные супы',
                link: '/soups/meat',
            },
            {
                name: 'Овощные супы',
                link: '/soups/vegetable',
            },
            {
                name: 'Бульоны',
                link: '/soups/broth',
            },
            {
                name: 'Холодные супы',
                link: '/soups/cold',
            },
            {
                name: 'Диетические супы',
                link: '/soups/diet',
            },
        ],
    },
    {
        title: 'Вторые блюда',
        iconUrl: '/icons/4.svg',
        subMenuItems: [
            {
                name: 'Мясные',
                link: '/main-courses/meat',
            },
            {
                name: 'Рыбные',
                link: '/main-courses/fish',
            },
            {
                name: 'Овощные',
                link: '/main-courses/vegetable',
            },
            {
                name: 'Из птицы',
                link: '/main-courses/poultry',
            },
            {
                name: 'Из грибов',
                link: '/main-courses/mushrooms',
            },
            {
                name: 'Из субпродуктов',
                link: '/main-courses/by-products',
            },
            {
                name: 'На пару',
                link: '/main-courses/steamed',
            },
            {
                name: 'Пельмени, вареники',
                link: '/main-courses/dumplings',
            },
            {
                name: 'Мучные гарниры',
                link: '/main-courses/flour-side',
            },
            {
                name: 'Овощные гарниры',
                link: '/main-courses/vegetable-side',
            },
            {
                name: 'Пицца',
                link: '/main-courses/pizza',
            },
            {
                name: 'Суши',
                link: '/main-courses/sushi',
            },
        ],
    },
    {
        title: 'Десерты и выпечка',
        iconUrl: '/icons/5.svg',
        subMenuItems: [
            {
                name: 'Блины и оладьи',
                link: '/desserts/pancakes',
            },
            {
                name: 'Пироги и пончики',
                link: '/desserts/pies',
            },
            {
                name: 'Торты',
                link: '/desserts/cakes',
            },
            {
                name: 'Рулеты',
                link: '/desserts/rolls',
            },
            {
                name: 'Кексы и маффины',
                link: '/desserts/muffins',
            },
            {
                name: 'Сырники и ватрушки',
                link: '/desserts/cheesecakes',
            },
            {
                name: 'Из слоеного теста',
                link: '/desserts/puff-pastry',
            },
            {
                name: 'Из заварного теста',
                link: '/desserts/choux-pastry',
            },
            {
                name: 'Из дрожжевого теста',
                link: '/desserts/yeast-dough',
            },
            {
                name: 'Булочки и сдоба',
                link: '/desserts/buns',
            },
            {
                name: 'Хлеб',
                link: '/desserts/bread',
            },
            {
                name: 'Тесто на пиццу',
                link: '/desserts/pizza-dough',
            },
            {
                name: 'Кремы',
                link: '/desserts/creams',
            },
        ],
    },
    {
        title: 'Блюда на гриле',
        iconUrl: '/icons/6.svg',
        subMenuItems: [
            {
                name: 'Говядина',
                link: '/grill/beef',
            },
            {
                name: 'Свинина',
                link: '/grill/pork',
            },
            {
                name: 'Птица',
                link: '/grill/poultry',
            },
            {
                name: 'Рыба',
                link: '/grill/fish',
            },
            {
                name: 'Грибы',
                link: '/grill/mushrooms',
            },
            {
                name: 'Овощи',
                link: '/grill/vegetables',
            },
        ],
    },
    {
        title: 'Веганская кухня',
        iconUrl: '/icons/7.svg',
        subMenuItems: [
            {
                name: 'Закуски',
                link: '/vegan/appetizers',
            },
            {
                name: 'Первые блюда',
                link: '/vegan/soups',
            },
            {
                name: 'Вторые блюда',
                link: '/vegan/main-courses',
            },
            {
                name: 'Гарниры',
                link: '/vegan/side-dishes',
            },
            {
                name: 'Десерты',
                link: '/vegan/desserts',
            },
            {
                name: 'Выпечка',
                link: '/vegan/bakery',
            },
            {
                name: 'Сыроедческие блюда',
                link: '/vegan/raw-food',
            },
            {
                name: 'Напитки',
                link: '/vegan/drinks',
            },
        ],
    },
    {
        title: 'Детские блюда',
        iconUrl: '/icons/8.svg',
        subMenuItems: [
            {
                name: 'Первые блюда',
                link: '/kids/soups',
            },
            {
                name: 'Вторые блюда',
                link: '/kids/main-courses',
            },
            {
                name: 'Гарниры',
                link: '/kids/side-dishes',
            },
            {
                name: 'Выпечка',
                link: '/kids/bakery',
            },
            {
                name: 'Без глютена',
                link: '/kids/gluten-free',
            },
            {
                name: 'Без сахара',
                link: '/kids/sugar-free',
            },
            {
                name: 'Без аллергенов',
                link: '/kids/allergen-free',
            },
            {
                name: 'Блюда для прикорма',
                link: '/kids/first-foods',
            },
        ],
    },
    {
        title: 'Лечебное питание',
        iconUrl: '/icons/9.svg',
        subMenuItems: [
            {
                name: 'Детская диета',
                link: '/diet/diet-kids',
            },
            {
                name: 'Диета №1',
                link: '/diet/diet-1',
            },
            {
                name: 'Диета №2',
                link: '/diet/diet-2',
            },
            {
                name: 'Диета №3',
                link: '/diet/diet-3',
            },
            {
                name: 'Диета №5',
                link: '/diet/diet-5',
            },
            {
                name: 'Диета №6',
                link: '/diet/diet-6',
            },
            {
                name: 'Диета №7',
                link: '/diet/diet-7',
            },
            {
                name: 'Диета №8',
                link: '/diet/diet-8',
            },
            {
                name: 'Диета №9',
                link: '/diet/diet-9',
            },
            {
                name: 'Диета №10',
                link: '/diet/diet-10',
            },
            {
                name: 'Диета №11',
                link: '/diet/diet-11',
            },
            {
                name: 'Диета №12',
                link: '/diet/diet-12',
            },
            {
                name: 'Диета №13',
                link: '/diet/diet-13',
            },
            {
                name: 'Диета №14',
                link: '/diet/diet-14',
            },
            {
                name: 'Без глютена',
                link: '/diet/gluten-free',
            },
            {
                name: 'Без аллергенов',
                link: '/diet/allergen-free',
            },
        ],
    },
    {
        title: 'Национальные',
        iconUrl: '/icons/10.svg',
        subMenuItems: [
            {
                name: 'Американская кухня',
                link: '/national/american',
            },
            {
                name: 'Армянская кухня',
                link: '/national/armenian',
            },
            {
                name: 'Греческая кухня',
                link: '/national/greek',
            },
            {
                name: 'Грузинская кухня',
                link: '/national/georgian',
            },
            {
                name: 'Итальянская кухня',
                link: '/national/italian',
            },
            {
                name: 'Испанская кухня',
                link: '/national/spanish',
            },
            {
                name: 'Китайская кухня',
                link: '/national/chinese',
            },
            {
                name: 'Мексиканская кухня',
                link: '/national/mexican',
            },
            {
                name: 'Паназиатская кухня',
                link: '/national/pan-asian',
            },
            {
                name: 'Русская кухня',
                link: '/national/russian',
            },
            {
                name: 'Турецкая кухня',
                link: '/national/turkish',
            },
            {
                name: 'Французская кухня',
                link: '/national/french',
            },
            {
                name: 'Шведская кухня',
                link: '/national/swedish',
            },
            {
                name: 'Японская кухня',
                link: '/national/japanese',
            },
            {
                name: 'Другая кухня',
                link: '/national/other',
            },
        ],
    },
    {
        title: 'Соусы',
        iconUrl: '/icons/11.svg',
        subMenuItems: [
            {
                name: 'Соусы мясные',
                link: '/sauces/meat',
            },
            {
                name: 'Соусы сырные',
                link: '/sauces/cheese',
            },
            {
                name: 'Маринады',
                link: '/sauces/marinades',
            },
        ],
    },
    {
        title: 'Заготовки',
        iconUrl: '/icons/13.svg',
        subMenuItems: [
            {
                name: 'Мясные заготовки',
                link: '/preserves/meat',
            },
            {
                name: 'Рыбные заготовки',
                link: '/preserves/fish',
            },
            {
                name: 'Из огурцов',
                link: '/preserves/cucumbers',
            },
            {
                name: 'Из томатов',
                link: '/preserves/tomatoes',
            },
            {
                name: 'Из грибов',
                link: '/preserves/mushrooms',
            },
            {
                name: 'Овощные заготовки',
                link: '/preserves/vegetables',
            },
            {
                name: 'Салаты, икра',
                link: '/preserves/salads',
            },
            {
                name: 'Из фруктов и ягод',
                link: '/preserves/fruits',
            },
        ],
    },
    {
        title: 'Напитки',
        iconUrl: '/icons/12.svg',
        subMenuItems: [
            {
                name: 'Соки и фреши',
                link: '/drinks/juices',
            },
            {
                name: 'Смузи',
                link: '/drinks/smoothies',
            },
            {
                name: 'Компоты',
                link: '/drinks/compotes',
            },
            {
                name: 'Кисели',
                link: '/drinks/kissels',
            },
            {
                name: 'Кофе',
                link: '/drinks/coffee',
            },
            {
                name: 'Лечебный чай',
                link: '/drinks/tea',
            },
            {
                name: 'Квас',
                link: '/drinks/kvass',
            },
            {
                name: 'Коктейли',
                link: '/drinks/cocktails',
            },
            {
                name: 'Алкогольные',
                link: '/drinks/alcohol',
            },
        ],
    },
];
