import React from 'react'
import styles from '@styles/pages/legal-notices.module.scss'
import { HeroSection, DetailsSection, WebTile, SocialMedia } from '@components'
import { CardsWrapper, FeatureCard, AdvantageCard } from '@components/Cards'
import { Section } from '@components/Layout'
import featureCards from '@data/featured-legal.json'

const heroData = {
  _id: '5f9f1b9b9b9b9b9b9b9b9b9b',
  title: 'Legal notices',
  text: 'SAS is committed to protecting the data you provide to us and making it easy to find the information you need.',
  image: '/images/legal-notices-site-hero.webp',
  'short-url': 'https://sas.to/39JS1z0',
}

const details = {
  _id: '5f9f1b9b9b9b9b9b9b9b9b9b',
  title: 'Protecting the data you provide to us',
  description: `<p>Privacy policies, terms and conditions, cookie disclosures - it can all be a bit confusing. We’ve created this page to make it easy to find the information you need about what data we gather, how we use it, how we keep it safe and what your responsibilities are as a user when browsing across SAS websites. Please note that except for our privacy statement the legal notices contained on this page only apply to those SAS websites and marketing emails that link to these legal notices. Our privacy statement applies to a range of processing activities, as explained in the privacy statement.</p>`,
}

const tileData = {
  title: 'Contact us',
  description: 'About privacy and legal issues',
  icon: '/images/icons/icon_write.webp',
  link: '/legal-notices/privacy-policy#contact',
}

const LegalNotices = () => {
  return (
    <div className={styles.legal}>
      <HeroSection data={heroData} className={styles.legal__hero} />
      <h2 className={styles.legal__title}>Feature</h2>
      <CardsWrapper className={styles.legal__cards}>
        {featureCards.features.map((card) => (
          <FeatureCard key={card._id} card={card} />
        ))}
      </CardsWrapper>
      <Section style={{ textAlign: 'center' }}>
        <DetailsSection data={details} id='legal-notices' />
      </Section>
      <Section
        className={styles.legal__explore}
        style={{ backgroundColor: 'var(--background-color)' }}
      >
        <div className={styles.legal__explore_cards}>
          {featureCards.types.map((item) => (
            <AdvantageCard
              key={item._id}
              card={item}
              className={styles.legal__explore_card}
            />
          ))}
        </div>
      </Section>
      <WebTile tile={tileData} />
      <SocialMedia />
    </div>
  )
}

export default LegalNotices
