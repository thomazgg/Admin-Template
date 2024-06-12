import React from 'react';
import classNames from 'classnames';
import styles from '@/styles/MenuItem.module.css';
import Link from 'next/link';

interface MenuItemProps {
    url?: string;
    icon: React.ReactElement;
    text: string;
    active?: boolean;
    onClick?: (evento: any) => void;
}

export default function MenuItem(props: MenuItemProps) {

    const menuItemClasses = classNames(styles.menuItem, {
        [styles.active]: props.active,
    });

    function renderizar() {
        return (
            <div className={menuItemClasses}>
                <div className={styles.iconWrapper}>
                    {React.cloneElement(props.icon, { color: 'white' })}
                </div>
            </div>
        );
    }

    return (
        <div onClick={props.onClick} className={styles.menuItemWrapper} role="button">
            {props.url ? (
                <Link href={props.url}>
                    {renderizar()}
                </Link>
            ) : (
                renderizar()
            )}
            <span className={styles.tooltipText}>{props.text}</span>
        </div>
    );
}