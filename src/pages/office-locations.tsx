import React, { useEffect } from 'react'
import styles from '@styles/pages/about.module.scss'
import { HeroSection, Map } from '@components'
import { Section } from '@components/Layout'
import fetcher from '@lib/api'

const heroData = {
  _id: '5f9f1b1b1b1b1b1b1b1b1b1b',
  title: 'Office Locations',
  'short-url': 'https://pwc.to/39FSPEZ',
}

const OfficeLocations = ({ countries }: any) => {
  useEffect(() => {
    console.log('countries', countries)
  }, [])
  return (
    <div className={styles.offices}>
      <HeroSection data={heroData} className={styles.offices__hero} />
      <Section className={styles.offices__section}>
        <h1 style={{ fontSize: '3.5rem' }}>SAS Offices</h1>
      </Section>
      <Section className={styles.offices__section}>
        <Map countries={countries} />
      </Section>
    </div>
  )
}

export const getStaticProps = async () => {
  const countries = await fetcher({ url: '/api/countries?populate=deep' })
  return {
    props: {
      countries,
    },
  }
}

export default OfficeLocations
