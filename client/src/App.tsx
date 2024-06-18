import { Fragment } from 'react/jsx-runtime';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './routes';
import { AdminLayout } from './layouts';
import { ReactNode, useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
    const ProtectedRoute = ({ children }: { children: ReactNode }) => {
        const { user } = useContext(AuthContext);

        if (!user) {
            return <Navigate to="/login" />;
        } else if (user && user.isAdmin == false) {
            return <Navigate to="/login" />;
        }

        return children;
    };

    return (
        <Router>
            <>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || Fragment;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    Layout == AdminLayout ? (
                                        <ProtectedRoute>
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        </ProtectedRoute>
                                    ) : (
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    )
                                }
                            />
                        );
                    })}
                </Routes>
            </>
        </Router>
    );
}

export default App;
