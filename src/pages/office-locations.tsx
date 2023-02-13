import React from 'react'
import styles from '@styles/pages/about.module.scss'
import { HeroSection, Map } from '@components'
import { Section } from '@components/Layout'

const heroData = {
  _id: '5f9f1b1b1b1b1b1b1b1b1b1b',
  title: 'Office Locations',
  'short-url': 'https://pwc.to/39FSPEZ',
}

const officeLocations = () => {
  return (
    <div className={styles.offices}>
      <HeroSection data={heroData} className={styles.offices__hero} />
      <Section className={styles.offices__section}>
        <h1 style={{ fontSize: '3.5rem' }}>SAS Offices</h1>
      </Section>
      <Section className={styles.offices__section}>
        <Map />
      </Section>
    </div>
  )
}

export default officeLocations
