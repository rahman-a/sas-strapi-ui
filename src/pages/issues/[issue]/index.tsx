import React, { useEffect, useState } from 'react'
import styles from '@styles/pages/issue.module.scss'
import {
  DetailsSection,
  HeroSection,
  FilteredList,
  FloatContainer,
  Footer,
} from '@components'
import { Section } from '@components/Layout'
import { AdvantageCard, CardsWrapper, StaffCard } from '@components/Cards'
import heroData from '@data/hero-section.json'
import { HeroSection as HeroSectionType } from '@customTypes/Hero-Section'
import issuesData from '@data/issue-sections.json'
import filterData from '@data/filtered-list.json'
import staffData from '@data/staff.json'
import staticPaths from '@data/static-paths.json'
import { Button } from '@components/ui'
import { GetStaticPaths, GetStaticProps } from 'next'

interface StaticParams {
  issue: string | string[] | undefined
}

const Issue = () => {
  const [heroSection, setHeroSection] = useState<HeroSectionType>(
    heroData['issue']
  )

  return (
    <div className={styles.issue}>
      {heroSection && <HeroSection data={heroSection} />}
      <Section>
        <DetailsSection data={issuesData['video']} reverse />
      </Section>
      <Section style={{ backgroundColor: 'var(--background-color)' }}>
        <DetailsSection data={issuesData['section'].details} />
        <CardsWrapper>
          {issuesData['section'].cards.map((card, index) => (
            <AdvantageCard key={card._id} card={card} />
          ))}
        </CardsWrapper>
      </Section>
      <Section>
        <FilteredList data={filterData} />
      </Section>
      <Section className={styles.issue__help}>
        <div className={styles.issue__help_wrapper}>
          <h3 className={styles.issue__help_title}>How we can help</h3>
          <div className={styles.issue__help_content}>
            <p>
              Exploring unexpected angles, our agile community of solvers works
              with you to define new approaches to value creation—from making
              your business more resilient to bolstering your ESG framework. We
              look holistically at all aspects of an organisation’s performance
              to propose enterprise-wide transformation initiatives or smaller
              scale optimisation programmes.
            </p>
            <p>
              Driven by data, our tech-powered teams use AI, machine learning
              and cutting-edge analytics to build scenarios for your value
              chain. Our expertise in finance, operations, deals, strategy, tax
              and accounting, enables us to go wide and take the long-view to
              ensure your business is positioned to deliver sustained outcomes
              for the future.
            </p>
          </div>
          <Button variant='white' style={{ alignSelf: 'flex-start' }}>
            Learn more
          </Button>
        </div>
      </Section>
      <FloatContainer>
        <div className={styles.issue__staff}>
          {staffData.staff.map((staff) => (
            <StaffCard key={staff._id} staff={staff} />
          ))}
        </div>
      </FloatContainer>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = staticPaths.issues.map((item) => ({
    params: {
      issue: item.page,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<StaticParams> = async ({
  params,
}) => {
  const issue = params?.issue
  return {
    props: {
      issue,
    },
  }
}

export default Issue
