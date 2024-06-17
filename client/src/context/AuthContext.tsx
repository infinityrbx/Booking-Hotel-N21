import { createContext, useReducer, ReactNode, Dispatch, useEffect } from 'react';

interface User {
    _id: string;
    email: string;
}

interface State {
    user: User | null;
    loading: boolean;
    error: { message?: string } | null;
}

interface Action {
    type: 'LOGIN_START' | 'LOGIN_SUCCESS' | 'LOGIN_FAILURE' | 'LOGOUT';
    payload?: User | { message?: string } | null;
}

const INITIAL_STATE: State = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null,
    loading: false,
    error: null,
};

export const AuthContext = createContext<{
    user: User | null;
    loading: boolean;
    error: { message?: string } | null;
    dispatch: Dispatch<Action>;
}>({
    ...INITIAL_STATE,
    dispatch: () => {
        throw new Error('dispatch function must be overridden');
    },
});

function AuthReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                loading: true,
                error: null,
            };
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload as User,
                loading: false,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                user: null,
                loading: false,
                error: action.payload as { message?: string },
            };
        case 'LOGOUT':
            return {
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
