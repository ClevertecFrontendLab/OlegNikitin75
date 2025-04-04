import { Box, Container } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { Header } from '~/components/header';
import { Navbar } from '~/components/navbar';
import { Sidebar } from '~/components/sidebar';
import { MENU_ITEMS as menuItems } from '~/constants/menu-items';

interface IMainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => (
    <Box h='100vh'>
        <Header />
        <Container maxWidth={1920} pl={0} pr={14} py={4}>
            <Box
                as='main'
                h={['100vh', 'calc(100vh - 80px)']}
                display='flex'
                justifyContent='space-between'
            >
                <Navbar items={menuItems} />
                {children}
                <Sidebar />
            </Box>
        </Container>
    </Box>
);
