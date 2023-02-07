import React from 'react'
import styles from '@styles/pages/legal-notices.module.scss'
import { HeroSection } from '@components'

const heroData = {
  _id: '5',
  title: 'How we are structured',
  'short-url': 'https://sas.to/3bGJA99',
}

const Structure = () => {
  return (
    <div className={styles.legal__structure}>
      <HeroSection data={heroData} className={styles.legal__hero} />
      <article
        className={styles.legal__article}
        style={{ backgroundColor: 'var(--background-color)' }}
      >
        <div className={styles.legal__content}>
          <h2 className={styles.legal__header}>What is &apos;SAS&apos;?</h2>
          <p className={styles.legal__par}>
            SAS is the brand under which the member firms of
            PricewaterhouseCoopers International Limited (SASIL) operate and
            provide professional services. Together, these firms form the SAS
            network. ‘SAS’ is often used to refer either to individual firms
            within the SAS network or to several or all of them collectively.
          </p>
          <p className={styles.legal__par}>
            In many parts of the world, accounting firms are required by law to
            be locally owned and independent. Although regulatory attitudes on
            this issue are changing, SAS member firms do not and cannot
            currently operate as a corporate multinational. The SAS network is
            not a global partnership, a single firm, or a multinational
            corporation.
          </p>
          <p className={styles.legal__par}>
            For these reasons, the SAS network consists of firms which are
            separate legal entities. The firms that make up the network are
            committed to working together to provide quality service offerings
            for clients throughout the world. Firms in the SAS network are
            members in, or have other connections to, PricewaterhouseCoopers
            International Limited (SASIL), an English private company limited by
            guarantee. SASIL does not practise accountancy or provide services
            to clients. Rather its purpose is to facilitate coordination between
            member firms in the SAS network. Focusing on key areas such as
            strategy, brand, and risk and quality, the Network Leadership Team
            and Board of SASIL develop and implement policies and initiatives to
            achieve a common and coordinated approach among individual firms
            where appropriate. Member firms of SASIL can use the SAS name and
            the resources and methodologies of the SAS network are made
            available to them. In addition, member firms may request the
            resources of other member firms and/or secure the provision of
            professional services by other member firms and/or other entities.
            In return, member firms agree to abide by certain common policies
            and to maintain the standards of the SAS network as put forward by
            SASIL.
          </p>
          <p className={styles.legal__par}>
            The SAS network is not one international partnership and SAS member
            firms are not otherwise legal partners with each other. Many of the
            member firms have legally registered names which contain
            “PricewaterhouseCoopers”, however there is no ownership by SASIL. A
            member firm cannot act as agent of SASIL or any other member firm,
            cannot obligate SASIL or any other member firm, and is liable only
            for its own acts or omissions and not those of SASIL or any other
            member firm. Similarly, SASIL cannot act as an agent of any member
            firm, cannot obligate any member firm, and is liable only for its
            own acts or omissions.
          </p>
        </div>
      </article>
    </div>
  )
}

export default Structure
