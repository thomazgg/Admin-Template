import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // Importar classNames para lidar com classes condicionais
import styles from '@/styles/MenuItem.module.css';

interface MenuItemProps {
    url: string;
    icon: React.ReactNode;
    text: string;
    active?: boolean;
    color?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ url, text, icon, active, color }) => {
    const menuItemClasses = classNames(styles.menuItem, {
        [styles.active]: active, // Adiciona a classe "active" se a propriedade "active" for verdadeira
    });

    const bgClass = color ? color : 'rgba(255, 255, 255, 0)';

    return (
        <div className={styles.menuItemWrapper}>
            <a href={url} className={styles.menuLink}>
                <div className={`${menuItemClasses} ${bgClass}`}> {/* Aplicar a cor de fundo aqui */}
                    <div className={styles.iconWrapper}>{icon}</div>
                </div>
            </a>
            <span className={styles.tooltipText}>{text}</span>
        </div>
    );
};

MenuItem.propTypes = {
    url: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool, // Definir PropTypes para a propriedade "active"
    color: PropTypes.string, // Definir PropTypes para a propriedade "color"
};

export default MenuItem;
