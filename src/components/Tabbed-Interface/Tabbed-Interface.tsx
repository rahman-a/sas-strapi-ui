import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Tabbed-Interface.module.scss'
import parser from 'html-react-parser'
import { TabbedInterface } from '@customTypes/Tabbed'
import { Button } from '../ui'

interface TabbedInterfaceProps {
  tabs: TabbedInterface[]
  title?: string
}

const TabbedInterface: FunctionComponent<TabbedInterfaceProps> = ({
  tabs,
  title,
}) => {
  const [activeTab, setActiveTab] = useState<string>('')
  const [tabData, setTabData] = useState<TabbedInterface>()

  const activeTabHandler = (tab: TabbedInterface) => {
    setActiveTab(tab._id)
    setTabData(tab)
  }

  useEffect(() => {
    setActiveTab(tabs[0]._id)
    setTabData(tabs[0])
  }, [tabs])
  return (
    <div className={styles.tab}>
      {title && <h2 className={styles.tab__header}>{title}</h2>}
      <div className={styles.tab__wrapper}>
        <div className={styles.tab__col}>
          <ul className={styles.tab__list}>
            {tabs.map((tab: TabbedInterface) => (
              <li
                key={tab._id}
                className={`${styles.tab__item} ${
                  activeTab === tab._id ? styles.tab__item_active : ''
                }`}
                onClick={() => activeTabHandler(tab)}
              >
                {tab.item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.tab__separator}></div>
        <div className={styles.tab__col}>
          <h3 className={styles.tab__title}>{tabData?.title}</h3>
          {tabData?.text && parser(tabData.text)}
          {tabData?.btn && (
            <Button
              variant='gray-outlined'
              icon
              as='a'
              href={tabData.link}
              className={styles.tab__btn}
            >
              {tabData.btn}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TabbedInterface
