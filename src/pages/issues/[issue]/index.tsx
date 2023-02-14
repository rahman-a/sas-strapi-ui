import React from 'react'
import MarkdownIt from 'markdown-it'
import { NextSeo } from 'next-seo'
import parser from 'html-react-parser'
import styles from '@styles/pages/issue.module.scss'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import {
  DetailsSection,
  HeroSection,
  FilteredList,
  FloatContainer,
} from '@components'
import { Section } from '@components/Layout'
import { AdvantageCard, CardsWrapper, StaffCard } from '@components/Cards'
import { IssuePageLayout } from '@customTypes/Layout'
import { Button } from '@components/ui'
import fetcher from '@lib/api'
import QueryString from 'qs'

interface IssueProps {
  layout: IssuePageLayout
  meta: {
    title: string
    description: string
  }
}

const Issue: NextPage<IssueProps> = ({ layout, meta }) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <div className={styles.issue}>
        {layout.heroSection && <HeroSection data={layout.heroSection} />}
        <Section>
          <DetailsSection data={layout.textBlock} reverse />
        </Section>
        <Section style={{ backgroundColor: 'var(--background-color)' }}>
          <DetailsSection data={layout.textBlock2} />
          <CardsWrapper>
            {layout.detailedCards.cards.map((card, index) => (
              <AdvantageCard key={card.id} card={card} />
            ))}
          </CardsWrapper>
        </Section>
        <Section>
          {layout.filteredList && <FilteredList data={layout.filteredList} />}
        </Section>
        <Section
          className={styles.issue__help}
          style={{ backgroundImage: `url(${layout.textBlock3.image})` }}
        >
          <div className={styles.issue__help_wrapper}>
            <h3 className={styles.issue__help_title}>How we can help</h3>
            <div className={styles.issue__help_content}>
              {parser(layout.textBlock3.content)}
            </div>
            {layout.textBlock3?.label && (
              <Button
                as='a'
                href={layout.textBlock3?.link || ''}
                variant='white'
                style={{ alignSelf: 'flex-start' }}
              >
                {layout.textBlock3?.label}
              </Button>
            )}
          </div>
        </Section>
        {layout.staff && layout.staff.length > 0 && (
          <FloatContainer>
            <div className={styles.issue__staff}>
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
  const query = QueryString.stringify({
    populate: ['parent'],
    fields: ['slug'],
  })
  const response = await fetcher({ url: `/api/issues-pages?${query}` })
  const paths = response?.data
    .map((item: any) => {
      const parent = item.attributes.parent.data?.attributes.slug
      if (!parent) return { params: { issue: item.attributes.slug } }
    })
    .filter((item: any) => item !== undefined)
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = QueryString.stringify({
    populate: 'deep,4',
    filters: {
      slug: params?.issue,
    },
  })
  const response = await fetcher({ url: `/api/issues-pages?${query}` })
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
    textBlock2: {
      ...data.TextBlock2,
      content: MarkdownIt({ html: true }).render(data.TextBlock2.content),
    },
    textBlock3: {
      ...data.TextBlock3,
      content: MarkdownIt({ html: true }).render(data.TextBlock3.content),
    },
    filteredList: data.TabbedNavbar,
    detailedCards: data.DetailedCards,
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

export default Issue
