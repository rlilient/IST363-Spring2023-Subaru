import { useState } from 'react';

import Button from './Button';
import ButtonUI from './ButtonUI';
import Logo from './Logo';
import NavDesktop from './NavDesktop';
import NavOverlay from './NavOverlay';
import Link from 'next/link';

import styles from './header.module.scss';

const Header = () => {
    const [isMenuVisible, setMenuVibsible] = useState (false);
    return <header className={styles.header}>
        <Link href="/">
            <Logo />
        </Link>
        <ButtonUI 
            icon="menu" 
            clickHandler={() => {
                setMenuVibsible(true);
            }}
        />
        <NavDesktop />
        {isMenuVisible && 
        <NavOverlay 
            closeHandler={() => {
                setMenuVibsible(false);
            }}
        />
    }
        </header>
}
export default Header