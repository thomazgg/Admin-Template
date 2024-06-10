// Sidebar.js
import React from 'react';
import MenuItem from './MenuItem';
import { IconArchive, IconDotsGrid, IconFIle4, IconHome, IconLayoutLeft, IconSearch, IconSettings1, IconShoppingBag2, IconTruck } from '../icons';
import styles from '@/styles/Sidebar.module.css';

export default function Sidebar() {
    return (
        <aside className="p-5 bg-brand-primary-900 flex flex-col h-screen">
            <ul className="space-y-8 flex-grow">
                <div className="space-y-4">
                    <MenuItem url="/" icon={IconLayoutLeft} text="Alternar barra lateral" />
                    <MenuItem url="/" icon={IconSearch} text="Pesquisar" active />
                </div>
                <div className="space-y-4">
                    <div>
                        <h1 className={`text-regular-r5 ${styles.title}`}>Menu</h1>
                    </div>
                    <div className="space-y-1">
                        <MenuItem url="/" icon={IconHome} text="Início" active />
                        <MenuItem url="/" icon={IconShoppingBag2} text="Fluxo de Compra" />
                        <MenuItem url="/" icon={IconTruck} text="Fornecedores" />
                        <MenuItem url="/" icon={IconFIle4} text="Contratos" />
                        <MenuItem url="/" icon={IconArchive} text="Meus Produtos" />
                    </div>
                </div>
            </ul>
            <div className="mt-auto space-y-1">
                <MenuItem url="/settings" icon={IconSettings1} text="Configurações" />
                <MenuItem url="/" icon={IconDotsGrid} text="E-Procurement" color="bg-brand-primary-500"/>
            </div>
        </aside>
    );
}
