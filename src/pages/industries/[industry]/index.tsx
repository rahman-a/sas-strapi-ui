import React, { FunctionComponent } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import MarkdownIt from 'markdown-it'
import { NextSeo } from 'next-seo'
import qs from 'qs'
import styles from '@styles/pages/industry.module.scss'
import {
  HeroSection,
  DetailsSection,
  TabbedInterface,
  FloatContainer,
} from '@components'
import { Section } from '@components/Layout'
import {
  ImageCard,
  PopularCard,
  CardsWrapper,
  StaffCard,
} from '@components/Cards'
import tabsData from '@data/tabbed-interface.json'
import { Button } from '@components/ui'
import fetcher from '@lib/api'
import { IndustryPageLayout } from '@customTypes/Layout'

interface IndustryProps {
  layout: IndustryPageLayout
  meta: {
    title: string
    description: string
  }
}

const Industry: FunctionComponent<IndustryProps> = ({ layout, meta }) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <div className={styles.industry}>
        {layout.heroSection && <HeroSection data={layout.heroSection} />}
        <Section>
          <DetailsSection data={layout.textBlock} />
        </Section>
        <Section style={{ backgroundColor: 'var(--background-color)' }}>
          <TabbedInterface
            data={layout.tabbedInterface}
            title={tabsData.title}
          />
        </Section>
        <Section>
          <DetailsSection
            data={layout.textBlock2}
            btnProps={{
              icon: true,
            }}
          />
        </Section>
        <Section title='Featured' className={styles.industry__cards}>
          <CardsWrapper>
            {layout.featured.cards.map((card) => (
              <ImageCard key={card.id} card={card} />
            ))}
          </CardsWrapper>
        </Section>
        <Section>
          <CardsWrapper
            className={styles.industry__popularCards}
            title={layout.insights.title || 'Insights'}
          >
            {layout.insights.cards.map((card) => (
              <PopularCard
                key={card.id}
                card={card}
                className={styles.industry__card}
              />
            ))}
          </CardsWrapper>
          {/* <div className={styles.industry__more}>
            <Button as='a' variant='dark-primary'>
              Learn more
            </Button>
            <Button as='a' variant='primary-outlined'>
              View all
            </Button>
          </div> */}
        </Section>
        {layout.staff.length > 0 && (
          <FloatContainer>
            <div className={styles.industry__staff}>
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
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/api/industries-pages?${query}`
  )
  const paths = response?.data
    .map((item: any) => {
      const parent = item.attributes.parent.data?.attributes.slug
      if (!parent) return { params: { industry: item.attributes.slug } }
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
      slug: params?.industry,
    },
  })
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/api/industries-pages?${query}`
  )
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
    tabbedInterface: {
      ...data.SummeryExplorer,
      tabs: data.SummeryExplorer.tabs.map((tab: any) => ({
        ...tab,
        panelDescription: MarkdownIt({ html: true }).render(
          tab.panelDescription
        ),
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
      title: data.Insights.title,
      cards: data.Insights.cards,
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
  }
}

export default Industry
