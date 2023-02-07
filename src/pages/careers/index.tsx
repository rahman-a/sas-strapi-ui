import React from 'react'
import styles from '@styles/pages/careers.module.scss'
import { CareerHeroSection, DetailsSection, WebTile } from '@components'
import { Section } from '@components/Layout'
import { MeetCard } from '@components/Cards'
import { ImageCube } from '@components/ui'
import careerSection from '@data/career-section.json'
import meetData from '@data/meet-cards.json'
import { Data } from '@customTypes/Details-Section'

const meetSection = {
  _id: '5f9f1b9b9b9b9b9b9b9b9b9b',
  title: 'Meet the team',
  description:
    '<p>The New Equation starts with passion. The passion from people like you. People who see things a little differently, and seek unexpected answers to some of the world’s toughest challenges. Unique individuals who are led by their own humanity, so they can help solve for society.</p> <p>Meet our solvers.</p>',
}

const tile = {
  title: 'Build your career at SAS',
  description: 'Search for a job',
  icon: '/images/icons/explore-white.webp',
  link: '/careers',
}

const Career = () => {
  const renderDetailsSection = (index: number, data: Data) => {
    if (index === 1) {
      return (
        <Section
          key={data._id}
          style={{ backgroundColor: 'var(--background-color)' }}
        >
          <DetailsSection data={data}>
            <ImageCube />
          </DetailsSection>
        </Section>
      )
    }
    return (
      <Section key={data._id}>
        <DetailsSection data={data} reverse />
      </Section>
    )
  }
  return (
    <div className={styles.careers}>
      <CareerHeroSection />
      {careerSection.map((section, index) =>
        renderDetailsSection(index, section)
      )}
      <section className={styles.careers__meet}>
        <div className={styles.careers__meet_row}>
          <div className={styles.careers__meet_col}>
            <div className={styles.careers__float}>
              <span className={styles['careers__float--1']}></span>
              <span className={styles['careers__float--2']}></span>
              <span className={styles['careers__float--3']}></span>
              <span className={styles['careers__float--4']}></span>
            </div>
            <DetailsSection
              data={meetSection}
              className={styles.careers__meet_description}
            />
          </div>
          {meetData.map((data) => (
            <div key={data._id} className={styles.careers__meet_col}>
              <MeetCard card={data} />
            </div>
          ))}
        </div>
      </section>
      <WebTile tile={tile} style={{ margin: '2rem 0' }} />
    </div>
  )
}

export default Career
