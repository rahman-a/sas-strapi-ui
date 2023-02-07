import React, { useState, useContext, useEffect } from 'react'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import styles from './Navbar.module.scss'
import { HeaderContext } from '@context/Header-Context'
import { RightArrow } from '@components/icons'

interface MenuItem {
  _id: string
  text: string
}

interface NavbarProps {
  isMobile?: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isMobile }) => {
  const {
    isOpen,
    setIsOpen,
    setSubNavType,
    subNavType,
    menu,
    setSubMenuLevel,
  } = useContext(HeaderContext)
  const [selectedElement, setSelectedElement] = useState<HTMLAnchorElement>()
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  const showSubNav = (e: React.SyntheticEvent, type: string): void => {
    if (
      isOpen &&
      !isMobile &&
      (e.target as HTMLAnchorElement).dataset.type === subNavType
    ) {
      setSubNavType('')
      setSelectedElement(undefined)
      setIsOpen(false)
      return
    }
    setIsOpen(true)
    setSubNavType(type)
    setSubMenuLevel(2)
    document.querySelectorAll(`.${styles.navbar__link}`).forEach((link) => {
      link.classList.remove(styles.navbar__link_active)
    })
    setSelectedElement(e.currentTarget as HTMLAnchorElement)
  }

  const navClasses = classNames(styles.navbar, {
    [styles.navbar__hidden]: isOpen && subNavType === 'search',
    [styles['navbar__is_mobile']]: isMobile,
  })

  const linkClasses = classNames(styles.navbar__link, {
    [styles.navbar__link_white]: isOpen,
  })

  useEffect(() => {
    selectedElement?.classList.add(styles.navbar__link_active)
    return () => setSelectedElement(undefined)
  }, [selectedElement])

  useEffect(() => {
    if (menu.length > 0) {
      setMenuItems(menu.map((panel) => ({ _id: uuidv4(), text: panel.title })))
    }
  }, [menu])

  return (
    <nav className={navClasses}>
      {menuItems.length > 0 &&
        menuItems.map((item) => (
          <a
            key={item._id}
            href='#'
            className={linkClasses}
            onClick={(e) => showSubNav(e, item.text)}
            data-type={item.text}
          >
            {item.text}
            {isMobile && (
              <span>
                <RightArrow />
              </span>
            )}
          </a>
        ))}
    </nav>
  )
}

export default Navbar
