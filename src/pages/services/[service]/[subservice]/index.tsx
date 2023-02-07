import React, { useState } from 'react'
import styles from '@styles/pages/service.module.scss'
import {
  HeroSection,
  DetailsSection,
  WebTile,
  TabbedNavbar,
  FloatContainer,
} from '@components'
import {
  ImageCard,
  CardsWrapper,
  StaffCard,
  AdvantageCard,
} from '@components/Cards'

import { Section } from '@components/Layout'
import heroData from '@data/hero-section.json'
import exploreData from '@data/explore-cards.json'
import staffData from '@data/staff.json'
import tabsData from '@data/tabbed-navbar.json'
import staticPaths from '@data/static-paths.json'
import { HeroSection as HeroSectionType } from '@customTypes/Hero-Section'
import { GetStaticPaths, GetStaticProps } from 'next'

const firstSectionsData = {
  _id: '5f9f1b9b9b9b9b9b9b9b9b9b',
  description:
    '<p>A crisis situation can disrupt operations, damage reputations, destroy shareholder value, and trigger other threats. As the business community has learned through the COVID-19 pandemic, it’s more important than ever for leaders to anticipate and plan for the possibility of an unplanned event. The more prepared you are to manage shocks, the less likely you’ll fall victim to serious harm, and you gain the muscle memory to build resilience for future threats.</p>',
  quote: {
    content:
      "SAS's Alliances and Ecosystems curate the technology, data and third party relationships that are central to delivering The New Equation - powering innovation and change to create sustained outcomes.",
    name: 'Tom Archer',
    role: 'Global Alliances and Technology Consulting Leader, SAS US',
  },
}

const secondSectionData = {
  _id: '2',
  title: 'PwC’s Global Crisis Survey 2021',
  description:
    "<p>How has your organization fared during the COVID-19 pandemic? Share your experience in PwC's Global Crisis Survey 2021, an after-action assessment of the business community's response to the crisis. You'll receive an immediate personalised benchmark report comparing your experience with your peers' — to help you learn, take action, build resilience, and emerge stronger.</p>",
  link: 'https://www.pwcresearch.com/uc/GCS_2021/',
  text: 'Get Crisis Benchmarking',
  image: '/images/survey-image.webp',
}

interface StaticParams {
  subservice: string | string[] | undefined
}

const SubService = () => {
  const [heroSection, setHeroSection] = useState<HeroSectionType>(
    heroData['service']
  )
  return (
    <div className={styles.service}>
      {heroSection && <HeroSection data={heroSection} />}
      <Section title='Featured' className={styles.service__cards}>
        <CardsWrapper className={styles.service__cards_wrapper}>
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </CardsWrapper>
      </Section>
      <Section
        className={styles.service__details}
        style={{ backgroundColor: 'var(--background-color)' }}
      >
        <DetailsSection data={firstSectionsData} reverse />
      </Section>
      <Section>
        <DetailsSection
          reverse
          data={secondSectionData}
          btnProps={{ variant: 'gray-outlined' }}
        />
      </Section>
      <WebTile
        tile={{
          title: 'Download our brochure (PDF 5.7mb)',
          description: 'Read more about how we help family businesses',
          icon: '/images/icons/icon_download.webp',
          link: '/https://www.pwc.com/gx/en/industries/family-businesses.html',
        }}
      />
      <Section style={{ backgroundColor: 'var(--background-color)' }}>
        <TabbedNavbar tabs={tabsData.tabs} />
      </Section>
      <Section
        title='Explore more ways PwC can help'
        className={styles.service__explore}
      >
        <div className={styles.service__explore_cards}>
          {exploreData.cards.map((item) => (
            <AdvantageCard key={item._id} card={item} />
          ))}
        </div>
      </Section>
      <FloatContainer>
        <div className={styles.service__staff}>
          {staffData.staff.map((staff) => (
            <StaffCard key={staff._id} staff={staff} />
          ))}
        </div>
      </FloatContainer>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = staticPaths['sub-services'].map((item) => {
    const page = item.page.split('/')
    return {
      params: {
        service: page[0],
        subservice: page[1],
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<StaticParams> = async ({
  params,
}) => {
  const subservice = params?.subservice
  return {
    props: {
      subservice,
    },
  }
}

export default SubService
