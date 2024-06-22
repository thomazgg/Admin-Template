import { useData } from "@/data/hook/useAppData"
import Logo from "../icons/logo"
import Content from "./Content"
import Sidebar from "./Sidebar"
import Title from "./Title"
import AvatarUser from "./AvatarUser"
import ForceAuthentication from "../auth/ForceAuthentication"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {

    const { theme, changeTheme } = useData();

    return (
        <ForceAuthentication>
            <div className={`${theme} flex h-screen w-screen`}>
                <Sidebar/>
                <div className={`
                    flex flex-col w-full p-5
                    bg-base-white dark:bg-gray-900
                `}>
                    <div className={`flex`}>
                        <div className={`flex flex-col w-full pb-8`}>
                            <Logo></Logo>
                        </div>
                        <div className={`flex flex-grow justify-end items-center`}>
                            <AvatarUser />
                        </div>
                    </div>
                    <Title 
                        title={props.title} 
                        subtitle={props.subtitle}>
                    </Title>
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>           
        </ForceAuthentication>
    )
}