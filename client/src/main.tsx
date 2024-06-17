import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalStyles from './components/GlobalStyles';
import { SearchContextProvider } from './context/SearchContext.tsx';
import { AuthContextProvider } from './context/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthContextProvider>
            <SearchContextProvider>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </SearchContextProvider>
        </AuthContextProvider>
    </React.StrictMode>,
);
