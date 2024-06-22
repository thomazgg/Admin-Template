import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import loading from '../../../public/imgs/loading.gif'
import useAuth from '@/data/hook/useAuth'
import { ReactNode } from 'react'

interface ForceAuthenticationProps {
    children: ReactNode
}

export default function ForceAuthentication({ children }: ForceAuthenticationProps) {
    const { usuario, carregando } = useAuth()
    const router = useRouter()

    function renderizarConteudo() {
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-cod3r-auth")) {
                                    window.location.href = "/login"
                                }
                            `
                        }}
                    />
                </Head>
                {children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className="flex justify-center items-center h-screen">
                <Image src={loading} alt="Carregando" />
            </div>
        )
    }

    if (!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        router.push('/login')
        return null
    }
}
