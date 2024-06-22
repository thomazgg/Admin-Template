import AvatarUser from "./AvatarUser"
import Title from "./Title"

interface NavbarProps {
    titutitilelo: string
    subtitle: string
}

export default function Navbar(props: NavbarProps) {
    return (
        <div>
            <Title title={props.subtitle} subtitle={props.subtitle}/>
        </div>
    )
}