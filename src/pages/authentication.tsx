import AuthInput from "@/components/auth/AuthInput"
import { useState } from "react"

export default function Autentication () {

    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function submeter() {
        if (modo === 'login') {
            console.log('login')
        } else {
            console.log('cadastrar')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img 
                    src="@/public/imgs/cat.gif"
                    alt="Imagem da Tela de Autenticação"
                    className="h-screen w-full object-cover" />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`headlines-h1 text-gray-800 dark:text-white`}>
                    {modo === 'login' ? 'Bem-vindo de volta!' : 'Cadastre-se na Plataforma'}
                </h1>
                <AuthInput
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail}
                    obrigatorio
                />
                <AuthInput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                    obrigatorio
                />
                <button onClick={submeter} className={`
                    w-full bg-brand-primary-500 hover:bg-brand-primary-400
                    text-base-white rounded-lg px-4 py-3 mt-6
                `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={submeter} className={`
                    w-full border-2 border-gray-300 hover:bg-gray-200
                    text-base-dark rounded-lg px-4 py-3
                `}>
                    Entrar com Google
                </button>
            </div>
        </div>
    )
}