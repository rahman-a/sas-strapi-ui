import React, { FunctionComponent, useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from './Header.module.scss'
import Navbar from './Navbar/Navbar'
import DropdownMenu from './Dropdown-Menu/Dropdown-Menu'
import HeaderOption from './Header-Option/Header-Option'
import { Breadcrumbs } from '../ui'
import { HeaderContext } from '@context/Header-Context'
import { Menu } from '@customTypes/Menu'
import Logo from './Logo/Logo'
import navigation from '@data/navigation.json'

interface HeaderProps {
  menu: Menu
}

const Header: FunctionComponent<HeaderProps> = ({ menu }) => {
  const { subNavType, isOpen, setMenu, isDropdownOpen } =
    useContext(HeaderContext)
  const router = useRouter()
  const headerClasses = classNames(styles.header, {
    [styles.header__separator]: isOpen,
    [styles.header__overlay]: isOpen && subNavType === 'search',
    [styles.header__dropdown]: isDropdownOpen,
  })

  useEffect(() => {
    if (menu?.length > 0) {
      setMenu(menu)
    }
  }, [])

  return (
    <>
      <header className={headerClasses}>
        <div className='container'>
          <div className={styles.header__wrapper}>
            <Logo />
            <Navbar />
            <HeaderOption />
          </div>
        </div>
        <DropdownMenu />
      </header>
      {router.pathname !== '/' && <Breadcrumbs isOpen={isOpen} />}
    </>
  )
}

export default Header
