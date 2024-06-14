import { createContext, ReactNode, useState } from "react";

type Tema = 'dark' | '';

interface AppContextProps {
    theme: Tema;
    changeTheme: () => void;
}

const AppContext = createContext<AppContextProps>({
    theme: '',
    changeTheme: () => {}
});

interface AppProviderProps {
    children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    const [theme, setTheme] = useState<Tema>('');

    const changeTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? '' : 'dark'));
    };

    return (
        <AppContext.Provider value={{ theme, changeTheme }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;