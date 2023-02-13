import React from 'react'
import styles from '@styles/pages/legal-notices.module.scss'
import { HeroSection } from '@components'
import { Section } from '@components/Layout'
import Link from 'next/link'
import fetcher from '@lib/api'
import MarkdownIt from 'markdown-it'
import parser from 'html-react-parser'
import { NextSeo } from 'next-seo'

const LegalDisclaimer = ({ meta, layout }: any) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <div className={styles.legal__disclaimer}>
        <HeroSection data={layout.heroSection} className={styles.legal__hero} />
        <Section>
          <p className={styles.legal__updated}>
            This statement was last updated &nbsp;
            <strong>{layout.lastUpdated}</strong>
          </p>
        </Section>
        <div className={styles.legal__disclaimer_content}>
          <article className={styles.legal__article}>
            <div className={styles.legal__content}>
              <h2 className={styles.legal__header}>{layout.title}</h2>
              {parser(layout.content)}
            </div>
          </article>
        </div>
        {/* Related Article */}
        <Section
          title={layout.related.title}
          className={styles.legal__related_section}
        >
          <div className={styles.legal__related}>
            {layout.related.cards.map((card: any) => (
              <article key={card.id} className={styles.legal__card}>
                <h2 className={styles.legal__card_title}>
                  <Link href={card.link}>{card.title}</Link>
                </h2>
                <p className={styles.legal__card_par}>{card.content}</p>
              </article>
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/api/legal-disclaimer?populate=deep`
  )
  const data = response.data.attributes
  const meta = {
    title: data.title,
    description: data.description,
  }
  return {
    props: {
      meta,
      layout: {
        title: data.contentTitle,
        content: MarkdownIt({ html: true }).render(data.content),
        lastUpdated: data.lastUpdate,
        heroSection: data.HeroSection,
        related: {
          title: data.relatedCards.title,
          cards: data.relatedCards.cards,
        },
      },
    },
  }
}

export default LegalDisclaimer
