import Title from "./Title"

interface NavbarProps {
    titulo: string
    subtitulo: string
}

export default function Navbar(props: NavbarProps) {
    return (
        <div>
            <Title titulo={props.titulo} subtitulo={props.subtitulo}/>
        </div>
    )
}