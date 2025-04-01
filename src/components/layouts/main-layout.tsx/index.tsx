import { FC, ReactNode } from 'react';

import { Header } from '~/components/header';
import { Navbar } from '~/components/navbar';
import { Sidebar } from '~/components/sidebar';

import styles from './main-layout.module.css';

interface IMainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => (
    <div>
        <Header />
        <main className={styles.main}>
            <Navbar />
            {children}
            <Sidebar />
        </main>
    </div>
);
