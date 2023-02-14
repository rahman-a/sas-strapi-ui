import React from 'react'
import styles from '@styles/pages/legal-notices.module.scss'
import { HeroSection, DetailsSection, WebTile } from '@components'
import { CardsWrapper, FeatureCard, AdvantageCard } from '@components/Cards'
import { Section } from '@components/Layout'
import fetcher from '@lib/api'
import MarkdownIt from 'markdown-it'
import { NextSeo } from 'next-seo'

const LegalNotices = ({ layout, meta }: any) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <div className={styles.legal}>
        <HeroSection data={layout.heroSection} className={styles.legal__hero} />
        <h2 className={styles.legal__title}>{layout.featured.title}</h2>
        <CardsWrapper className={styles.legal__cards}>
          {layout.featured.cards.map((card: any) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </CardsWrapper>
        <Section style={{ textAlign: 'center' }}>
          <DetailsSection data={layout.textBlock} id='legal-notices' />
        </Section>
        <Section
          className={styles.legal__explore}
          style={{ backgroundColor: 'var(--background-color)' }}
        >
          <div className={styles.legal__explore_cards}>
            {layout.legal.cards.map((item: any) => (
              <AdvantageCard
                key={item.id}
                card={item}
                className={styles.legal__explore_card}
              />
            ))}
          </div>
        </Section>
        <WebTile tile={layout.contact} />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetcher({ url: '/api/legal-notice?populate=deep' })
  const data = response.data.attributes
  const meta = {
    title: data.title,
    description: data.description,
  }
  const layout = {
    id: response.data.id,
    heroSection: data.HeroSection,
    featured: {
      title: data.FeaturedCards.title,
      cards: data.FeaturedCards.cards,
    },
    textBlock: {
      ...data.TextBlock,
      content: MarkdownIt({ html: true }).render(data.TextBlock.content),
    },
    legal: {
      title: data.legalCards.title,
      cards: data.legalCards.cards,
    },
    contact: {
      ...data.contactTile,
      icon: `${process.env.NEXT_PUBLIC_STRAPI_API}${data.contactTile.icon.data?.attributes?.url}`,
    },
  }

  return {
    props: {
      meta,
      layout,
    },
  }
}

export default LegalNotices
