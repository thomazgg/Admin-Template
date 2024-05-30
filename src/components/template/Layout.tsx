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
                flex flex-col w-full p-7 
                bg-gray-900
            `}>
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