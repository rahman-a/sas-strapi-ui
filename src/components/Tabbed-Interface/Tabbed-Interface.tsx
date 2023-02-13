import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Tabbed-Interface.module.scss'
import parser from 'html-react-parser'
import { TabbedInterface, TabbedInterfaceItem } from '@customTypes/Tabbed'
import { Button } from '../ui'

interface TabbedInterfaceProps {
  data: TabbedInterface
  title?: string
}

const TabbedInterface: FunctionComponent<TabbedInterfaceProps> = ({
  data,
  title,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [tabData, setTabData] = useState<TabbedInterfaceItem>()

  const activeTabHandler = (tab: TabbedInterfaceItem) => {
    setActiveTab(tab.id)
    setTabData(tab)
  }

  useEffect(() => {
    setActiveTab(data.tabs[0].id)
    setTabData(data.tabs[0])
  }, [data.tabs])
  return (
    <div className={styles.tab}>
      {title && <h2 className={styles.tab__header}>{data.title}</h2>}
      <div className={styles.tab__wrapper}>
        <div className={styles.tab__col}>
          <ul className={styles.tab__list}>
            {data.tabs.map((tab: TabbedInterfaceItem) => (
              <li
                key={tab.id}
                className={`${styles.tab__item} ${
                  activeTab === tab.id ? styles.tab__item_active : ''
                }`}
                onClick={() => activeTabHandler(tab)}
              >
                {tab.tabTitle}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.tab__separator}></div>
        <div className={styles.tab__col}>
          <h3 className={styles.tab__title}>{tabData?.tabTitle}</h3>
          {tabData?.panelDescription && parser(tabData?.panelDescription)}
          <div className={styles.tab__links}>
            {tabData?.links?.map((link) => (
              <Button
                key={link.id}
                variant='gray-outlined'
                icon
                as='a'
                href={link.href}
                className={styles.tab__btn}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabbedInterface
