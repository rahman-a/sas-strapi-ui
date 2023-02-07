import React from 'react'
import styles from '@styles/pages/careers.module.scss'
import { HeroSection, CareerSearch } from '@components'
import { Section } from '@components/Layout'
import { Button } from '@components/ui'

const heroData = {
  _id: '5f9f1b9b9b9b9b9b9b9b9b9b',
  title: 'SAS experienced career roles',
  text: 'Bring your experiences. Grow your skills. Make your mark. Our community of solvers is ready to apply your expertise in new and unexpected ways. You’ll be empowered by a career that’s flexible, human-led, tech-powered and purpose-driven.',
  image: '/images/hero-experienced-career-roles-1600.webp',
}

const JobSearch = () => {
  return (
    <div className={styles.careers__search}>
      <HeroSection
        data={heroData}
        className={styles.careers__search_hero}
        floating
      />
      <Section>
        <div className={styles.careers__search_cta}>
          <h1>Discover your new career with SAS</h1>
          <Button variant='primary-outlined'>Sign in to your account</Button>
        </div>
      </Section>
      <Section>
        <CareerSearch />
      </Section>
    </div>
  )
}

export default JobSearch
