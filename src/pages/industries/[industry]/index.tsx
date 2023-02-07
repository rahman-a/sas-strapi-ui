import React, { useState } from 'react'
import styles from '@styles/pages/industry.module.scss'
import {
  HeroSection,
  DetailsSection,
  TabbedInterface,
  FloatContainer,
} from '@components'
import { Section } from '@components/Layout'
import {
  ImageCard,
  PopularCard,
  CardsWrapper,
  StaffCard,
} from '@components/Cards'
import tabsData from '@data/tabbed-interface.json'
import cards from '@data/sections.json'
import staffData from '@data/staff.json'
import heroData from '@data/hero-section.json'
import staticPaths from '@data/static-paths.json'
import { Button } from '@components/ui'
import { HeroSection as HeroSectionType } from '@customTypes/Hero-Section'
import { GetStaticPaths, GetStaticProps } from 'next'

const firstSectionData = {
  _id: '1',
  title: 'Reimagining moving people and goods',
  description: `<p>The automotive sector is in the midst of unprecedented change. Marked by the continued advancement of EVs and AVs, a convergence of industries, transformed supply chains and rapidly changing customer preferences geared towards more sustainable options. These shifts are requiring companies to simultaneously navigate today’s evolving landscape and plan for the future of mobility.</p>
      <p>PwC’s community of solvers bring industry experience, investment in the latest digital technologies and knowledge of local markets around the world. Helping you deliver strong and lasting results to become future-ready in every aspect of your business. Bringing you valuable insights to address critical risk, tax, audit, assurance, strategy consulting and ESG issues across the globe. Working with you to build trust across the value chain.</p>`,
  image: '/images/auto-hero-2020.webp',
}
const secondSectionData = {
  _id: '2',
  title: 'When humanity and technology hit the road',
  description: `<p>Visit our Smart Mobility Hub - an essential resource for the latest perspectives that define our collective mobility challenges and help find the smartest solutions.</p>
    <p>From cities and urban infrastructure, to automation and impending regulatory hurdles, we’re ensuring the next stop is a new beginning for all.</p>`,
  image: '/images/feature-strategy-and-smart-mobility.webp',
  link: '/services/strategy-and-smart-mobility',
  text: 'Learn more',
}

interface StaticParams {
  industry: string | string[] | undefined
}

const Industry = () => {
  const [heroSection, setHeroSection] = useState<HeroSectionType>(
    heroData['industry']
  )

  return (
    <div className={styles.industry}>
      {heroSection && <HeroSection data={heroSection} />}
      <Section>
        <DetailsSection data={firstSectionData} />
      </Section>
      <Section style={{ backgroundColor: 'var(--background-color)' }}>
        <TabbedInterface tabs={tabsData.tabs} title={tabsData.title} />
      </Section>
      <Section>
        <DetailsSection
          data={secondSectionData}
          btnProps={{
            icon: true,
          }}
        />
      </Section>
      <Section title='Featured' className={styles.industry__cards}>
        <CardsWrapper>
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </CardsWrapper>
      </Section>
      <Section title='Most Popular'>
        <CardsWrapper className={styles.industry__popularCards}>
          {cards.sections[0].cards.map((card) => (
            <PopularCard
              key={card._id}
              card={card}
              className={styles.industry__card}
            />
          ))}
        </CardsWrapper>
        <div className={styles.industry__more}>
          <Button as='a' variant='dark-primary'>
            Learn more
          </Button>
          <Button as='a' variant='primary-outlined'>
            View all
          </Button>
        </div>
      </Section>
      <FloatContainer>
        <div className={styles.industry__staff}>
          {staffData.data.map((staff) => (
            <StaffCard key={staff.id} staff={staff.attributes} />
          ))}
        </div>
      </FloatContainer>
    </div>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = staticPaths.industries.map((item) => ({
//     params: {
//       industry: item.page,
//     },
//   }))
//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps<StaticParams> = async ({
//   params,
// }) => {
//   const industry = params?.industry
//   return {
//     props: {
//       industry,
//     },
//   }
// }

export default Industry
