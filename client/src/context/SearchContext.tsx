import { createContext, useReducer, ReactNode, Dispatch } from 'react';
import { Range } from 'react-date-range';

// Định nghĩa các kiểu dữ liệu
interface Options {
    adult?: number;
    children?: number;
    room?: number;
}

interface State {
    destination?: string;
    dates: Range[];
    options: Options;
}

interface Action {
    type: 'NEW_SEARCH' | 'RESET_SEARCH';
    payload?: State;
}

// Khởi tạo trạng thái ban đầu
const INITIAL_STATE: State = {
    destination: undefined,
    dates: [],
    options: {
        adult: undefined,
        children: undefined,
        room: undefined,
    },
};

// Tạo context với kiểu dữ liệu
export const SearchContext = createContext<{
    destination?: string;
    dates: Range[];
    options: Options;
    dispatch: Dispatch<Action>;
}>({
    ...INITIAL_STATE,
    dispatch: () => { throw new Error('dispatch function must be overridden'); },
});

// Định nghĩa reducer với kiểu dữ liệu
function SearchReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'NEW_SEARCH':
            return action.payload || INITIAL_STATE;
        case 'RESET_SEARCH':
            return INITIAL_STATE;
        default:
            return state;
    }
}

// Định nghĩa provider với kiểu dữ liệu cho children
interface SearchContextProviderProps {
    children: ReactNode;
}

export const SearchContextProvider = ({ children } : SearchContextProviderProps) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider
            value={{
                destination: state.destination,
                dates: state.dates,
                options: state.options,
                dispatch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
