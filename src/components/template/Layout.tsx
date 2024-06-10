import Logo from "../icons/logo"
import Content from "./Content"
import Sidebar from "./Sidebar"
import Title from "./Title"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex h-screen w-screen`}>
            <Sidebar/>
            <div className={`
                flex flex-col w-full p-5
                bg-white dark:bg-gray-800
            `}>
                <Logo></Logo>
                <Title 
                    titulo={props.titulo} 
                    subtitulo={props.subtitulo}>
                </Title>
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
}