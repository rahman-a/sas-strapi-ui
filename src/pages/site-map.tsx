import React from 'react'
import styles from '@styles/pages/site-map.module.scss'
import Link from 'next/link'
import { HeroSection } from '@components'
import linksData from '@data/site-map.json'

const heroData = {
  _id: '5',
  title: 'Site Map',
  'short-url': 'https://sas.to/2V0QuiB',
}

const SiteMap = () => {
  return (
    <div className={styles.map}>
      <HeroSection data={heroData} className={styles.map__hero} />
      <div className={styles.map__content}>
        <div className={styles.map__row}>
          {linksData.map((col) => (
            <div key={col._id} className={styles.map__col}>
              <Link href={col.link || ''} className={styles.map__header}>
                {col.text}
              </Link>
              <ul className={styles.map__list}>
                {col.items.map((item) => (
                  <li key={item._id} className={styles.map__item}>
                    <Link href={item.link || ''} className={styles.map__link}>
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SiteMap
