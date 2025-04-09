import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        primary: '#ffffd3',
        secondary: '#c4ff61',
        activeItem: '#EAFFC7',
        avocado: '#d7ff94',
        textGreen: '#2db100',
        black: '#000',
        white: '#fff',
    },

    breakpoints: {
        mobile: '0px',
        tablet: '768px',
        desktop: '1440px',
        wide: '1920px',
    },
    fonts: {
        body: "'Inter', sans-serif",
    },
});
