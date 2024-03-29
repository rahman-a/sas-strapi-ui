import React from 'react'
import styles from '@styles/pages/legal-notices.module.scss'
import { HeroSection } from '@components'
import fetcher from '@lib/api'
import MarkdownIt from 'markdown-it'
import { NextSeo } from 'next-seo'
import parse from 'html-react-parser'

const Structure = ({ meta, layout }: any) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <div className={styles.legal__structure}>
        <HeroSection data={layout.heroSection} className={styles.legal__hero} />
        <article
          className={styles.legal__article}
          style={{ backgroundColor: 'var(--background-color)' }}
        >
          <div className={styles.legal__content}>
            <h2 className={styles.legal__header}>{layout.article.title}</h2>
            {parse(layout.article.content)}
          </div>
        </article>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetcher({
    url: '/api/network-structure?populate=deep',
  })
  const data = response.data.attributes
  const meta = {
    title: data.title,
    description: data.description,
  }
  return {
    props: {
      meta,
      layout: {
        article: {
          title: data.articleTitle,
          content: MarkdownIt({ html: true }).render(data.articleContent),
        },
        heroSection: data.HeroSection,
      },
    },
    revalidate: 60,
  }
}

export default Structure
