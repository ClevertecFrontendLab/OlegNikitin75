import { Box, Hide, Show } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { MENU_ITEMS as menuItems } from '~/constants/menu-items';
import { Footer } from '~/modules/footer';
import { Header } from '~/modules/header';
import { Navbar } from '~/modules/navbar';
import { Sidebar } from '~/modules/sidebar';

interface IMainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => (
    <Box h='100vh'>
        <Header />

        <Hide below='tablet'>
            <Navbar items={menuItems} />
            <Sidebar />
        </Hide>
        <Box
            as='main'
            maxW={{ mobile: '100%', tablet: '100%', desktop: '880px', wide: '1360px' }}
            mx='auto'
        >
            {children}
        </Box>
        <Show below='tablet'>
            <Footer />
        </Show>
    </Box>
);
