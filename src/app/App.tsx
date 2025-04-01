import { MainLayout } from '~/components/layouts/main-layout.tsx';

import { AppRouter } from './router';

function App() {
    return (
        <MainLayout>
            <AppRouter />
        </MainLayout>
    );
}
export default App;
