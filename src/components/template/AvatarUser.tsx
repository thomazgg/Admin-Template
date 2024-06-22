import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarUserProps {
    className?: string
}

export default function AvatarUser(props: AvatarUserProps) {
    const { usuario } = useAuth()
    return (
        <Link href="/profile">
            <img
                src={usuario?.imagemUrl ?? '/imgs/avatar.svg'}
                alt="Avatar do Usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
            />
        </Link>
    )
}