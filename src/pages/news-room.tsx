import React, { useState } from 'react'
import styles from '@styles/pages/news.module.scss'
import { HeroSection, FilterCards } from '@components'
import { Section } from '@components/Layout'
import { CardsWrapper, ImageCard } from '@components/Cards'
import { Button } from '@components/ui'

const heroData = {
  _id: '5f9f1b9b9b9b9b9b9b9b9b9b',
  title: 'Newsroom',
  text: 'Press releases, analyst citations, social media and media team contacts',
  image: '/images/DAMIL_123827-1600.png',
  'short-url': 'https://sas.to/2Rd1M27',
}

const filterOptions = [
  {
    _id: '5c9c0b5b4b6b8c0b8c8b4567',
    title: 'Content Type',
    keywords: [
      {
        _id: '87a1fa6d2a3a9bab43c8b13c4e1acd62',
        keyword: 'corporate news',
      },
      {
        _id: 'b2d3badf39ed2ade01e952ff94beee7a',
        keyword: 'Insights',
      },
    ],
  },
]

const NewsRoom = () => {
  const [type, setType] = useState<string>('Press Release')
  return (
    <div className={styles.news}>
      <HeroSection data={heroData} />
      <Section title='Featured' className={styles.news__cards}>
        <CardsWrapper className={styles.news__cards_wrapper}>
          <ImageCard className={styles.news__cards_card} />
          <ImageCard className={styles.news__cards_card} />
        </CardsWrapper>
      </Section>
      <Section style={{ padding: '2rem 0' }}>
        <div className={styles.news__content}>
          <div className={styles.news__filter_action}>
            <Button
              variant='gray-outlined'
              rounded
              dataAttributes={{ 'data-active': type === 'Press Release' }}
              onClick={() => setType('Press Release')}
            >
              Press Release
            </Button>
            <Button
              variant='gray-outlined'
              rounded
              dataAttributes={{ 'data-active': type === 'Analyst recognition' }}
              onClick={() => setType('Analyst recognition')}
            >
              Analyst recognition
            </Button>
          </div>
        </div>
      </Section>
      <Section style={{ padding: '2rem 0' }}>
        <FilterCards
          list={filterOptions}
          title={type}
          className={styles.news__filter_tab}
        />
      </Section>
    </div>
  )
}

export default NewsRoom
