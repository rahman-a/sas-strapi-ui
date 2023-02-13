import Image from 'next/legacy/image'
import React, { FunctionComponent, useState } from 'react'
import styles from './Tabbed-Navbar.module.scss'
import { DetailsSection } from '@components'
import { TabbedNavbar, TabbedNavbarPanel } from '@customTypes/Tabbed'
import { Data } from '@customTypes/Details-Section'

interface TabbedNavbarProps {
  tabs: TabbedNavbar
}

const TabbedNavbar: FunctionComponent<TabbedNavbarProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(tabs.panels[0].id)
  const [activeTabContent, setActiveTabContent] = useState<Data>(
    tabs.panels[0].detailedSection
  )
  const setActiveTabHandler = (panel: TabbedNavbarPanel) => {
    setActiveTab(panel.id)
    setActiveTabContent(panel.detailedSection)
  }
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        <ul className={styles.tabs__header}>
          {tabs.panels.map((panel) => (
            <li
              key={panel.id}
              className={`${styles.tabs__item} ${
                activeTab === panel.id ? styles['tabs__item-active'] : ''
              }`}
              onClick={() => setActiveTabHandler(panel)}
            >
              {panel.icon && (
                <Image
                  src={panel.icon}
                  alt='tab-icon'
                  width={100}
                  height={100}
                />
              )}
              <h3>{panel.title}</h3>
            </li>
          ))}
        </ul>
        <div className={styles.tabs__content}>
          {activeTabContent && (
            <DetailsSection
              data={activeTabContent}
              btnProps={{ variant: 'gray-outlined' }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TabbedNavbar
