import React, { FunctionComponent, useEffect, useState } from 'react'
import styles from './Dropdown-Menu.module.scss'
import Link from 'next/link'
import { Territories, TerritoryItem } from '@customTypes/Territories-Menu'

type listItems = {
  list: Territories
  closeDropdownHandler?: () => void
}

const DropdownMenu: FunctionComponent<listItems> = ({
  list,
  closeDropdownHandler,
}) => {
  const [listData, setListData] = useState<Territories>(list)
  const [noResult, setNoResult] = useState<boolean>(false)

  const filterList = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoResult(false)
    const updatedList = list.filter((item: TerritoryItem) =>
      item.attributes.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    updatedList.length === 0 && setNoResult(true)
    setListData(updatedList)
  }

  const closeDropdown = () => closeDropdownHandler && closeDropdownHandler()

  useEffect(() => {
    document.body.addEventListener('click', closeDropdown)
    return () => document.body.removeEventListener('click', closeDropdown)
  }, [])
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__input}>
        <input
          type='text'
          placeholder='Find a country or region'
          onChange={(e) => filterList(e)}
        />
      </div>
      <ul className={styles.dropdown__list}>
        {noResult && (
          <li className={styles['dropdown__no-result']}>No Match Found</li>
        )}
        {listData?.map((item: TerritoryItem) => (
          <li
            key={item.id}
            className={`${styles.dropdown__item} ${
              item.attributes.name.toLowerCase() === 'global'
                ? styles['dropdown__item-global']
                : ' '
            }`}
          >
            <Link
              href={item?.attributes?.link || ''}
              className={styles.dropdown__link}
            >
              {item.attributes.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DropdownMenu
