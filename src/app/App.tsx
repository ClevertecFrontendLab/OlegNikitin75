import { BrowserRouter } from 'react-router';

import { MainLayout } from '~/layouts/main-layout.tsx';

import { AppRouter } from './router';

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <AppRouter />
            </MainLayout>
        </BrowserRouter>
    );
}
export default App;
