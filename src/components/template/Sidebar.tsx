import React from 'react';
import MenuItem from './MenuItem';
import { IconArchive, IconFIle4, IconHome, IconLayoutLeft, IconLogout, IconSearch, IconSettings1, IconShoppingBag2, IconTruck } from '../icons';
import styles from '@/styles/Sidebar.module.css';
import useAuth from '@/data/hook/useAuth';

export default function Sidebar() {

    const { logout } = useAuth()

    return (
        <aside className="p-5 bg-brand-primary-900 flex flex-col h-screen">
            <ul className="space-y-8 flex-grow">
                <div className="space-y-4">
                    <MenuItem icon={<IconLayoutLeft />} text="Alternar barra lateral"
                        onClick={() => console.log("alterar barra lateral")} />
                    <MenuItem icon={<IconSearch />} text="Pesquisar" active
                        onClick={() => console.log("pesquisar")} />
                </div>
                <div className="space-y-4">
                    <div>
                        <h1 className={`text-regular-r5 ${styles.title}`}>Menu</h1>
                    </div>
                    <div className="space-y-1">
                        <MenuItem url="/" icon={<IconHome />} text="Início" active />
                        <MenuItem url="/" icon={<IconShoppingBag2 />} text="Fluxo de Compra" />
                        <MenuItem url="/" icon={<IconTruck />} text="Fornecedores" />
                        <MenuItem url="/" icon={<IconFIle4 />} text="Contratos" />
                        <MenuItem url="/notification" icon={<IconArchive />} text="Meus Produtos" />
                    </div>
                </div>
            </ul>
            <div className="mt-auto space-y-1">
                <MenuItem url="/settings" icon={<IconSettings1 />} text="Configurações" />
                <MenuItem onClick={logout} icon={<IconLogout />} text="Sair"/>
            </div>
        </aside>
    );
}
