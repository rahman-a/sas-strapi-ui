import React, { useEffect, useRef } from 'react'
import styles from './Sub-Menu.module.scss'
import Navbar from '../Navbar/Navbar'
import classNames from 'classnames'
import Locations from '../Locations/Locations'
import countries from '@data/countries.json'

interface SubMenuLevelOneProps {
  submenuLevel: number
}

const SubMenuLevelOne: React.FC<SubMenuLevelOneProps> = ({ submenuLevel }) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const navClasses = classNames(
    styles.submenu__level1,
    styles.submenu__is_hidden
  )
  const animationEndHandler = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
    submenuLevel === 1
      ? navRef.current?.classList.remove(styles.submenu__is_hidden)
      : submenuLevel === 2 &&
        navRef.current?.classList.add(styles.submenu__is_hidden)
  }

  const addSlideOutAnimation = (): void => {
    timeoutRef.current = setTimeout(() => {
      navRef.current?.classList.remove(styles.submenu__is_hidden)
      navRef.current?.classList.remove(styles['submenu__slideOut-l2'])
      navRef.current?.classList.add(styles['submenu__slideIn-l2'])
    }, 300)
  }

  useEffect(() => {
    if (submenuLevel === 1) {
      addSlideOutAnimation()
    }
    if (submenuLevel === 2) {
      navRef.current?.classList.add(styles['submenu__slideOut-l2'])
    }
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current)
    }
  }, [submenuLevel])
  return (
    <div
      className={navClasses}
      ref={navRef}
      onAnimationEnd={animationEndHandler}
    >
      <Navbar isMobile />
      <Locations list={countries} isMobile />
    </div>
  )
}

export default SubMenuLevelOne
