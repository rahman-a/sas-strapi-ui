import React from 'react'
import styles from '@styles/pages/legal-notices.module.scss'
import { HeroSection } from '@components'
import Link from 'next/link'

const heroData = {
  _id: '5',
  title: 'How the PwC Network is meeting the requirements of GDPR',
  'short-url': 'https://sas.to/2RavXae',
}

const GDPR = () => {
  return (
    <div className={styles.legal__structure}>
      <HeroSection data={heroData} className={styles.legal__hero} />
      <article
        className={styles.legal__article}
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div className={styles.legal__content}>
          <p className={styles.legal__par}>
            SAS is the brand under which the member firms of SALIM AL SIYABI
            CHARTERED ACCOUNTANTS & AUDITORS operate and provide professional
            services. Together, these firms form the{' '}
            <Link href='/about/network-structure'>
              <a className={styles.legal__link}>SAS network</a>
            </Link>
            .
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
            The PwC network and each of the individual PwC firms are strongly
            committed to protecting the privacy of personal data that they
            maintain about PwC clients, employees and other individuals. As part
            of this commitment to privacy, PwC regularly reviews its data
            protection practices to comply with applicable laws, industry
            standards and best practices. To meet the requirements of the
            European Union’s General Data Protection Regulation (GDPR), and as a
            result of other territorial regulations impacting privacy, a
            comprehensive global programme -- the Network Data Protection
            Programme or NDPP -- has been established to provide a basis for,
            and a consistent approach to, data protection compliance across the
            PwC network and within each member firm.
          </p>
          <p className={styles.legal__par}>
            An overarching goal of the NDPP is to promote a vision, practices
            and standards across the PwC network that achieve a robust level of
            protection for and appropriate use of the personal data of PwC
            member firms’ people, clients, vendors and other stakeholders. All
            member firms are required to implement the requirements of the NDPP
            through their own individual firm programs, building upon existing
            confidentiality and security processes and standards. These NDPP
            requirements are extensive and cover multiple functional areas and
            aspects of our business, all in pursuit of accountability and
            transparency in how PwC collects, processes, protects and disposes
            of personal data.
          </p>
          <p className={styles.legal__par}>
            For more information regarding the PwC network, its organisation and
            legal structure, and the relationship between member firms, please
            see
            <Link href='/about/network-structure'>
              <a className={styles.legal__link}>www.sas.com/structure.</a>
            </Link>
          </p>
        </div>
      </article>
    </div>
  )
}

export default GDPR
