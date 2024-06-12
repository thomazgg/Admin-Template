interface TitleProps {
    titulo: string
    subtitulo: string
}

export default function Title(props: TitleProps) {
    return (
        <div className={`
            text-gray-800 dark:text-white
        `}>
            <h1 className="headlines-h1">
                {props.titulo}
            </h1>
            <h2 className="text-regular-r5">
                {props.subtitulo}
            </h2>
        </div>
    )
}