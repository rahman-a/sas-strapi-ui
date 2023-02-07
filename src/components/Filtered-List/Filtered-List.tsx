import React, { FunctionComponent, useState } from 'react'
import styles from './Filtered-List.module.scss'
import { Button } from '@components/ui'
import Link from 'next/link'
import { FilteredList, List } from '@customTypes/Filtered-List'

interface FilteredListProps {
  data: FilteredList
}

const FilteredList: FunctionComponent<FilteredListProps> = ({ data }) => {
  const [content, setContent] = useState<List>(data.list[0])
  return (
    <div className={styles.filter}>
      <h2 className={styles.filter__title}>{data.title}</h2>
      <div className={styles.filter__tabs}>
        {data.list.map((tab) => (
          <Button
            key={tab._id}
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
            {content.items.map((item) => (
              <li key={item._id} className={styles.filter__item}>
                <Link href={item.url || ''}>{item.item}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FilteredList
