import React, { useState } from 'react'
import styles from '@styles/pages/news.module.scss'
import { FilterCards, HeroSection } from '@components'
import { Section } from '@components/Layout'
import { CardsWrapper, ImageCard, PopularCard } from '@components/Cards'
import { Button } from '@components/ui'
import fetcher from '@lib/api'
import { NextSeo } from 'next-seo'

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

const NewsRoom = ({ meta, layout }: any) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <div className={styles.news}>
        <HeroSection data={layout.heroSection} />
        <Section title='Featured' className={styles.news__cards}>
          <CardsWrapper className={styles.news__cards_wrapper}>
            {layout.featured.cards.map((card: any) => (
              <ImageCard
                key={card.id}
                card={card}
                className={styles.news__cards_card}
              />
            ))}
          </CardsWrapper>
        </Section>
        <Section>
          <CardsWrapper>
            {layout.press.cards.map((card: any) => (
              <PopularCard
                key={card.id}
                card={card}
                className={styles.news__card}
              />
            ))}
          </CardsWrapper>
        </Section>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetcher({ url: '/api/press-room?populate=deep' })
  const data = response.data.attributes
  const meta = {
    title: data.title,
    description: data.description,
  }
  return {
    props: {
      meta,
      layout: {
        featured: {
          title: data.FeaturedCards.title,
          cards: data.FeaturedCards.cards,
        },
        press: {
          title: data.pressCards.title,
          cards: data.pressCards.cards,
        },
        heroSection: data.HeroSection,
      },
    },
    revalidate: 60,
  }
}

export default NewsRoom
