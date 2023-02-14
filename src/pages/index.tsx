import type { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Carousel, Breaknews, DetailsSection, SocialMedia } from '@components'
import {
  PopularCard,
  MoreCard,
  MainCard,
  CardsWrapper,
} from '@components/Cards'
import { Section } from '@components/Layout'
import styles from '@styles/pages/Home.module.scss'
import {
  Carousel as CarouselType,
  Announcement,
  Social,
} from '@customTypes/Layout'
import { Data } from '@customTypes/Details-Section'
import { Wrapper } from '@customTypes/Section'
import fetcher from '@lib/api'
import { v4 as uuidv4 } from 'uuid'
import { useEffect } from 'react'

interface HomeProps {
  layout: {
    carousel: CarouselType
    announcement: Announcement
    sections: {
      id: string
      details: Data
      wrapper: Wrapper
    }[]
    popular: Wrapper
    more: Wrapper
    socials: Social
  }
  meta: {
    title: string
    description: string
  }
}

const Home: NextPage<HomeProps> = ({ layout, meta }) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <Carousel carousel={layout.carousel} />
      <Breaknews announcement={layout.announcement} />
      {layout.sections.map((section) => (
        <Section
          key={section.id}
          style={{
            backgroundColor: section.details.reverse
              ? 'var(--white-color)'
              : 'var(--background-color)',
          }}
        >
          <DetailsSection
            key={section.id}
            data={section.details}
            reverse={section.details.reverse}
            style={{ paddingBottom: '10rem' }}
          />
          {section.wrapper.cards?.length &&
            section.wrapper.cards.length > 0 && (
              <div className={styles.details__cards}>
                <CardsWrapper title={section.wrapper.title}>
                  {section.wrapper.cards.map((card) => (
                    <MainCard key={card.id} card={card} />
                  ))}
                </CardsWrapper>
              </div>
            )}
        </Section>
      ))}
      <Section
        style={{ backgroundColor: 'var(--container-color)' }}
        title='Most Popular'
      >
        <CardsWrapper className={styles.main__popularCards}>
          {layout.popular.cards.map((card) => (
            <PopularCard key={card.id} card={card} />
          ))}
        </CardsWrapper>
      </Section>

      <Section style={{ padding: '10rem 0' }}>
        <CardsWrapper className={styles.main__moreCards}>
          {layout.more.cards.map((card) => (
            <MoreCard key={card.id} card={card} />
          ))}
        </CardsWrapper>
      </Section>
      <SocialMedia social={layout.socials} />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetcher({ url: '/api/home-page?populate=deep' })
  if (!response || response.data?.length === 0) {
    return {
      notFound: true,
    }
  }
  const data = response?.data.attributes.Layout
  const meta = {
    title: response.data.attributes.title,
    description: response.data.attributes.description,
  }
  const socials = {
    id: data[10].id,
    label: data[10].label,
    platforms: data[10].platforms.map((platform: any) => ({
      id: platform.id,
      label: platform.name,
      link: platform.href,
      icon: `${process.env.NEXT_PUBLIC_STRAPI_API}${platform.icon.data[0].attributes.url}`,
    })),
  }
  const layout = {
    carousel: data[0],
    announcement: data[1],
    sections: [
      {
        id: uuidv4(),
        details: data[2],
        wrapper: data[3],
      },
      {
        id: uuidv4(),
        details: {
          ...data[4],
          reverse: true,
        },
        wrapper: data[5],
      },
      {
        id: uuidv4(),
        details: data[6],
        wrapper: data[7],
      },
    ],
    popular: data[8],
    more: data[9],
    socials,
  }
  return {
    props: {
      meta,
      layout,
    },
  }
}
