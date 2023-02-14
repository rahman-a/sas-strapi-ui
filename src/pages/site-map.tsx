import React from 'react'
import styles from '@styles/pages/site-map.module.scss'
import Link from 'next/link'
import { HeroSection } from '@components'
import linksData from '@data/site-map.json'
import fetcher from '@lib/api'
import { NextSeo } from 'next-seo'

const heroData = {
  _id: '5',
  title: 'Site Map',
  'short-url': 'https://sas.to/2V0QuiB',
}

const SiteMap = ({ menu }: any) => {
  return (
    <>
      <NextSeo
        title='Sitemap'
        description='Site map with links to all major SAS sites, including industry sectors, services, and other areas such as alumni services.'
      />
      <div className={styles.map}>
        <HeroSection data={heroData} className={styles.map__hero} />
        <div className={styles.map__content}>
          <div className={styles.map__row}>
            {menu.map((col: any) => (
              <div key={col.id} className={styles.map__col}>
                <Link href={col.href || ''} className={styles.map__header}>
                  {col.title.toLocaleUpperCase()}
                </Link>
                <ul className={styles.map__list}>
                  {col.links.map((link: any) => (
                    <li key={link.id} className={styles.map__item}>
                      <Link href={link.href || ''} className={styles.map__link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetcher({ url: '/api/menu?populate=deep' })
  const data = response.data.attributes
  const menu = data.panels
    .map((panel: any) => {
      return {
        id: panel.id,
        title: panel.title === 'issues' ? "Today's Issues" : panel.title,
        href: `/${panel.title}`,
        links: panel.navigation.links,
      }
    })
    .filter((panel: any) => panel.title !== 'careers')
  return {
    props: {
      menu,
    },
    revalidate: 60,
  }
}

export default SiteMap
