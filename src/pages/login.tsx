import AuthInput from "@/components/auth/AuthInput"
import { IconDanger } from "@/components/icons"
import useAuth from "@/data/hook/useAuth"
import { useState } from "react"

export default function Authentication() {
    const { cadastrar, login, loginGoogle } = useAuth()

    const [erro, setErro] = useState<string | null>(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function exibirErro(msg: string, tempoEmSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    async function submeter() {
        try {
            if (modo === 'login' && login) {
                await login(email, senha)
            } else if (modo === 'cadastro' && cadastrar) {
                await cadastrar(email, senha);
            }
        } catch (e: any) {
            exibirErro(e?.message ?? 'Erro desconhecido!')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img
                    src="/imgs/cat.gif"
                    alt="Imagem da Tela de Autenticação"
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className="headlines-h1 text-gray-800 dark:text-white">
                    {modo === 'login' ? 'Bem-vindo de volta!' : 'Cadastre-se na Plataforma'}
                </h1>

                {erro && (
                    <div className="
                        flex items-center
                        bg-orange-100 text-base-dark p-3 my-2
                        border border-orange-500 rounded-lg
                    ">
                        <IconDanger />
                        <span className="ml-2">{erro}</span>
                    </div>
                )}

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
                <button onClick={submeter} className="
                    w-full bg-brand-primary-500 hover:bg-brand-primary-400
                    text-base-white rounded-lg px-4 py-3 mt-6
                ">
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full" />

                <button onClick={loginGoogle} className="
                    w-full border-2 border-gray-300 hover:bg-gray-200
                    text-base-dark rounded-lg px-4 py-3
                ">
                    Entrar com Google
                </button>

                {modo === 'login' ? (
                    <p className="mt-8 text-base-dark">
                        Novo por aqui?
                        <a onClick={() => setModo('cadastro')} className="
                            text-brand-primary-500 hover:text-brand-primary-700 text-semibold-sb5
                            cursor-pointer
                        "> Crie um Conta Gratuitamente</a>
                    </p>
                ) : (
                    <p className="mt-8 text-base-dark">
                        Já faz parte da nossa comunidade?
                        <a onClick={() => setModo('login')} className="
                            text-brand-primary-500 hover:text-brand-primary-700 text-semibold-sb5
                            cursor-pointer
                        "> Entre com a suas Credenciais</a>
                    </p>
                )}
            </div>
        </div>
    )
}
