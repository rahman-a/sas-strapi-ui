import React, { Fragment } from 'react'
import styles from '@styles/pages/careers.module.scss'
import { CareerHeroSection, DetailsSection, WebTile } from '@components'
import { ImageCube } from '@components/ui'
import { TeamPresentation } from '@components'
import MarkdownIt from 'markdown-it'
import fetcher from '@lib/api'
import { NextSeo } from 'next-seo'
import { Section } from '@components/Layout'

interface CareerProps {
  meta: {
    title: string
    description: string
  }
  blocks: any
}

const Career = ({ meta, blocks }: CareerProps) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <div className={styles.careers}>
        {blocks.map((block: any) => {
          if (block.__component === 'global.career-hero-section') {
            return <CareerHeroSection key={block.id} data={block} />
          }
          if (block.__component === 'global.text-block') {
            return (
              <Section
                key={block.id}
                style={{
                  backgroundColor: block.cubic ? 'var(--background-color)' : '',
                }}
              >
                <DetailsSection data={block} reverse={block.video}>
                  {block.cubic ? (
                    <ImageCube key={block.cubic.id} images={block.cubic} />
                  ) : null}
                </DetailsSection>
              </Section>
            )
          }
          if (block.__component === 'global.team-presentation') {
            return <TeamPresentation key={block.id} team={block} />
          }
          if (block.__component === 'global.web-tile') {
            return (
              <WebTile
                key={block.id}
                tile={block}
                style={{ margin: '0.5rem' }}
              />
            )
          }
        })}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetcher({ url: '/api/career?populate=deep' })
  const data = response.data.attributes
  const blocks = data.Blocks?.map((block: any) => {
    if (block.__component === 'global.text-block') {
      return {
        ...block,
        content: MarkdownIt({ html: true }).render(block.content),
      }
    }
    if (block.__component === 'global.team-presentation') {
      return {
        ...block,
        content: MarkdownIt({ html: true }).render(block.content),
      }
    }
    if (block.__component === 'global.web-tile') {
      return {
        ...block,
        icon: `${process.env.NEXT_PUBLIC_STRAPI_API}${block.icon.data.attributes.url}`,
      }
    }
    return block
  })

  const meta = {
    title: data.title,
    description: data.description,
  }
  return {
    props: {
      meta,
      blocks,
    },
  }
}

export default Career
