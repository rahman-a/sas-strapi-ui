import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Filtered-List.module.scss'
import { Button } from '@components/ui'
import Link from 'next/link'
import { TabFiltered, TabFilteredItem } from '@customTypes/Tabbed'

interface FilteredListProps {
  data: TabFiltered
}

const FilteredList: FunctionComponent<FilteredListProps> = ({ data }) => {
  const [content, setContent] = useState<TabFilteredItem | null>(() =>
    data.tabs.length ? data.tabs[0] : null
  )
  return (
    <div className={styles.filter}>
      <h2 className={styles.filter__title}>{data.title}</h2>
      <div className={styles.filter__tabs}>
        {data.tabs.map((tab) => (
          <Button
            key={tab.id}
            variant='gray-outlined'
            rounded
            className={styles.filter__tab}
            onClick={() => setContent(tab)}
          >
            {tab.title}
          </Button>
        ))}
      </div>
      {content && (
        <div className={styles.filter__content}>
          <h3 className={styles.filter__content_title}>{content.title}</h3>
          <ul className={styles.filter__list}>
            {content.links.map((link) => (
              <li key={link.id} className={styles.filter__item}>
                <Link href={link.href || ''}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FilteredList
