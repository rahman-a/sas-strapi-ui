import React from 'react'
import styles from '@styles/pages/service.module.scss'
import MarkdownIt from 'markdown-it'
import { NextSeo } from 'next-seo'
import qs from 'qs'
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
import { ServicePageLayout } from '@customTypes/Layout'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import fetcher from '@lib/api'

interface ServiceProps {
  layout: ServicePageLayout
  meta: {
    title: string
    description: string
  }
}

const Service: NextPage<ServiceProps> = ({ layout, meta }) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <div className={styles.service}>
        {layout.heroSection && <HeroSection data={layout.heroSection} />}
        <Section title='Featured' className={styles.service__cards}>
          <CardsWrapper className={styles.service__cards_wrapper}>
            {layout.featured.cards.map((card) => (
              <ImageCard key={card.id} card={card} />
            ))}
          </CardsWrapper>
        </Section>
        <Section
          className={styles.service__details}
          style={{ backgroundColor: 'var(--background-color)' }}
        >
          <DetailsSection data={layout.textBlock} reverse />
        </Section>
        <Section>
          <DetailsSection
            reverse
            data={layout.textBlock2}
            btnProps={{ variant: 'gray-outlined' }}
          />
        </Section>
        <WebTile tile={layout.webTile} />
        <Section style={{ backgroundColor: 'var(--background-color)' }}>
          <TabbedNavbar tabs={layout.tabbedNavbar} />
        </Section>
        <Section
          title='Explore more ways PwC can help'
          className={styles.service__explore}
        >
          <div className={styles.service__explore_cards}>
            {layout.insights.cards.map((card) => (
              <AdvantageCard key={card.id} card={card} />
            ))}
          </div>
        </Section>
        {layout.staff && layout.staff.length > 0 && (
          <FloatContainer>
            <div className={styles.service__staff}>
              {layout.staff.map((staff) => (
                <StaffCard key={staff.id} staff={staff.attributes!} />
              ))}
            </div>
          </FloatContainer>
        )}
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const query = qs.stringify({
    populate: ['parent'],
    fields: ['slug'],
  })
  const response = await fetcher({ url: `/api/services-pages?${query}` })
  const paths = response?.data
    .map((item: any) => {
      const parent = item.attributes.parent.data?.attributes.slug
      if (!parent) return { params: { service: item.attributes.slug } }
    })
    .filter((item: any) => item !== undefined)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = qs.stringify({
    populate: 'deep,4',
    filters: {
      slug: params?.service,
    },
  })
  const response = await fetcher({ url: `/api/services-pages?${query}` })
  if (response.data.length === 0) {
    return {
      notFound: true,
    }
  }
  const data = response.data[0].attributes
  if (data.parent.data) {
    return {
      notFound: true,
    }
  }
  const meta = {
    title: data.title,
    description: data.description,
  }
  const layout = {
    id: response.data[0].id,
    heroSection: data.HeroSection,
    textBlock: {
      ...data.TextBlock,
      content: MarkdownIt({ html: true }).render(data.TextBlock.content),
    },
    tabbedNavbar: {
      id: data.DetailedNavbar.id,
      panels: data.DetailedNavbar.panels.map((panel: any) => ({
        id: panel.id,
        title: panel.title,
        icon: `${process.env.NEXT_PUBLIC_STRAPI_API}${panel.icon.data.attributes.url}`,
        detailedSection: {
          ...panel.DetailedSection,
          content: MarkdownIt({ html: true }).render(
            panel.DetailedSection.content
          ),
        },
      })),
    },
    textBlock2: {
      ...data.TextBlock2,
      content: MarkdownIt({ html: true }).render(data.TextBlock2.content),
    },
    featured: {
      title: data.FeaturedCards.title,
      cards: data.FeaturedCards.cards,
    },
    insights: {
      title: data.InsightsCards.title,
      cards: data.InsightsCards.cards,
    },
    webTile: {
      ...data.WebTile,
      icon: `${process.env.NEXT_PUBLIC_STRAPI_API}${data.WebTile.icon.data.attributes.url}`,
    },
    staff: data.employees.data.map((employee: any) => ({
      id: employee.id,
      attributes: {
        name: employee.attributes.name,
        role: employee.attributes.role,
        tel: employee.attributes.tel,
        email: employee.attributes.email,
        photo: employee.attributes.photo,
        social: employee.attributes.social,
      },
    })),
  }
  return {
    props: {
      layout,
      meta,
    },
    revalidate: 60,
  }
}

export default Service
