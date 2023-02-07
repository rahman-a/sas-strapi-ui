import Image from 'next/legacy/image'
import React, { FunctionComponent, useState } from 'react'
import styles from './Tabbed-Navbar.module.scss'
import { DetailsSection } from '@components'
import { TabbedNavbar } from '@customTypes/Tabbed'
import { ButtonType } from '@customTypes/Button'
import { Data } from '@customTypes/Details-Section'

type Details = {
  style?: React.CSSProperties
  data?: Data
  className?: string
  btnProps?: ButtonType
  reverse?: boolean
}

interface TabbedNavbarProps {
  tabs: TabbedNavbar[]
  details?: Details
}

const TabbedNavbar: FunctionComponent<TabbedNavbarProps> = ({
  tabs,
  details,
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]._id)
  const [activeTabContent, setActiveTabContent] = useState<Data>(
    tabs[0].details
  )
  const setActiveTabHandler = (_id: string, details: Data) => {
    setActiveTab(_id)
    setActiveTabContent(details)
  }
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        <ul className={styles.tabs__header}>
          {tabs.map((tab) => (
            <li
              key={tab._id}
              className={`${styles.tabs__item} ${
                activeTab === tab._id ? styles['tabs__item-active'] : ''
              }`}
              onClick={() => setActiveTabHandler(tab._id, tab.details)}
            >
              {tab.icon && (
                <Image src={tab.icon} alt='tab-icon' width={100} height={100} />
              )}
              <h3>{tab.label}</h3>
            </li>
          ))}
        </ul>
        <div className={styles.tabs__content}>
          {activeTabContent && (
            <DetailsSection
              data={activeTabContent}
              btnProps={{ variant: 'gray-outlined' }}
              {...details}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default TabbedNavbar
