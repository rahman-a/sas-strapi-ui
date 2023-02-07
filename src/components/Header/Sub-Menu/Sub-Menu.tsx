import React, { useState, useContext, useEffect } from 'react'
import styles from './Sub-Menu.module.scss'
import { HeaderContext } from '@context/Header-Context'
import { Links, Featured, Panel } from '@customTypes/Menu'
import SubMenuLevel1 from './Sub-Menu-L1'
import SubMenuLevel2 from './Sub-Menu-L2'
import SubMenuLevel3 from './Sub-Menu-L3'
import FeaturedPosts from '../Featured-Posts/Featured-Posts'

const SubMenu = () => {
  const { subNavType, menu, subMenuLevel, setSubMenuLevel, setIsOpen, isOpen } =
    useContext(HeaderContext)
  const [subMenuContent, setSubMenuContent] = useState<Links>([])
  const [featured, setFeatured] = useState<Featured>()

  const menuSubLevel3Handler = (level: number, submenu: Links | null): void => {
    setSubMenuLevel(level)
    submenu && setSubMenuContent(submenu)
  }

  useEffect(() => {
    setFeatured(menu.find((item: Panel) => item.title === subNavType)?.featured)
  }, [subNavType, menu])

  return (
    <div className={styles.submenu}>
      <div className={styles.submenu__content}>
        <SubMenuLevel1 submenuLevel={subMenuLevel} />
        {subNavType && (
          <SubMenuLevel2
            subMenuContent={
              menu.find((item: Panel) => item.title === subNavType)?.navigation
                .links!
            }
            menuSubLevel3Handler={menuSubLevel3Handler}
            submenuLevel={subMenuLevel}
            subNavType={subNavType}
            setIsOpen={setIsOpen}
          />
        )}
        <SubMenuLevel3
          subMenuContent={subMenuContent}
          submenuLevel={subMenuLevel}
          setIsOpen={setIsOpen}
        />
        <div className={styles.submenu__featured}>
          <FeaturedPosts featured={featured} />
        </div>
      </div>
    </div>
  )
}

export default SubMenu
