import { AllDivisionsPage } from '@components'
import { Division } from '@customTypes/Layout'
import fetcher from '@lib/api'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { FunctionComponent } from 'react'
import MarkdownIt from 'markdown-it'

interface IndustriesProps {
  meta: {
    title: string
    description: string
  }
  divisions: Division
}

const Industries: FunctionComponent<IndustriesProps> = ({
  meta,
  divisions,
}) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <AllDivisionsPage division={divisions} />
    </>
  )
}

export default Industries

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/api/industry?populate=deep`
  )
  const meta = {
    title: response.data.attributes.title,
    description: response.data.attributes.description,
  }
  const divisions = {
    id: response.data.id,
    heroSection: response.data.attributes.HeroSection,
    featured: {
      title: response.data.attributes.featured.title,
      cards: response.data.attributes.featured.cards,
    },
    textBlock: {
      ...response.data.attributes.TextBlock,
      content: MarkdownIt({ html: true }).render(
        response.data.attributes.TextBlock.content
      ),
    },
    navigation: {
      title: response.data.attributes.navigation.title,
      links: response.data.attributes.navigation.links,
    },
    footer: {
      ...response.data.attributes.announcementFragment,
      content: MarkdownIt({ html: true }).render(
        response.data.attributes.announcementFragment.content
      ),
    },
  }
  return {
    props: {
      meta,
      divisions,
    },
  }
}
