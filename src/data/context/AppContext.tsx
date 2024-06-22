import { createContext, useEffect, useState, ReactNode } from "react";

interface AppContextProps {
    theme: string
    changeTheme: () => void
}

interface AppProviderProps {
    children: ReactNode
}

const AppContext = createContext<AppContextProps>({
    theme: 'dark',
    changeTheme: () => {}
});

export function AppProvider({ children }: AppProviderProps) {
    const [theme, setTema] = useState<string>('dark')

    function changeTheme() {
        const novoTema = theme === 'dark' ? '' : 'dark'
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema') ?? 'dark'
        setTema(temaSalvo)
    }, [])

    return (
        <AppContext.Provider value={{
            theme,
            changeTheme
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
