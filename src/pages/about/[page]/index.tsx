import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import staticPaths from '@data/static-paths.json'

interface StaticParams {
  page: string | string[] | undefined
}

const AboutPage = () => {
  return <div>AboutPage</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = staticPaths.about.map((item) => ({
    params: {
      page: item.page,
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<StaticParams> = async ({
  params,
}) => {
  const page = params?.page
  return {
    props: {
      page,
    },
  }
}

export default AboutPage
