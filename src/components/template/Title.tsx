import Sidebar from "./Sidebar"

interface TitleProps {
    titulo: string
    subtitulo: string
}

export default function Title(props: TitleProps) {
    return (
        <div>
            <h1 className={`
            `}>
                {props.titulo}
            </h1>
            <h2 className={`
            
            `}>
                {props.subtitulo}
            </h2>
        </div>
    )
}