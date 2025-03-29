import { CryptoContextProvider } from './context/context';
import AppLayout from './components/layout/AppLayout';

export default function App() {
    return (
        <CryptoContextProvider>
            <AppLayout />
        </CryptoContextProvider>

    )
}
