import React, { FunctionComponent } from 'react'
import styles from './Department-All-Divisions-Page.module.scss'
import { HeroSection, DetailsSection, Accordion } from '@components'
import { FeatureCard, CardsWrapper } from '@components/Cards'
import { Section } from '@components/Layout'
import { Division } from '@customTypes/Layout'

interface AllDivisionsProps {
  division: Division
}

const AllDivisions: FunctionComponent<AllDivisionsProps> = ({ division }) => {
  return (
    <div className={styles.services}>
      {division.heroSection && <HeroSection data={division.heroSection} />}
      <h2 className={styles.services__title}>{division.featured.title}</h2>
      <CardsWrapper className={styles.services__cards}>
        {division.featured.cards.map((card) => (
          <FeatureCard key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <Section>
        <DetailsSection
          data={division.textBlock}
          className={styles.services__details}
        />
      </Section>
      <Section
        title={division.navigation.title}
        className={styles.services__items}
      >
        <Accordion menu={division.navigation.links} />
      </Section>
      <Section>
        <DetailsSection
          as='a'
          data={division.footer}
          btnProps={{ variant: 'text', icon: 'thick-arrow' }}
          className={styles.services__footer}
          reverse
        />
      </Section>
    </div>
  )
}

export default AllDivisions
