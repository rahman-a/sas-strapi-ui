import '../styles/globals.scss'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import fetcher from '@lib/api'
import { Menu } from '@customTypes/Menu'
import { Footer } from '@customTypes/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

let headerCachedData: Menu | null = null
let footerCachedData: Footer | null = null

interface IProps extends AppProps {
  menu: Menu
  footer: Footer
}
const queryClient = new QueryClient()

function MyApp({ Component, pageProps, menu, footer }: IProps) {
  useEffect(() => {
    !headerCachedData && (headerCachedData = menu)
    !footerCachedData && (footerCachedData = footer)
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Layout menu={menu} footer={footer}>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

MyApp.getInitialProps = async (ctx: any) => {
  if (headerCachedData && footerCachedData) {
    return {
      menu: headerCachedData,
      footer: footerCachedData,
    }
  }
  const menu = await fetcher({ url: '/api/menu?populate=deep' })
  const footerResponse = await fetcher({ url: '/api/footer?populate=deep' })
  const footer = {
    id: footerResponse?.data.id,
    mainLinks: footerResponse?.data.attributes.mainLinks,
    legalLinks: footerResponse?.data.attributes.legalLinks,
    icon: `${process.env.NEXT_PUBLIC_STRAPI_API}${footerResponse?.data.attributes.logo.data.attributes.url}`,
  }
  return {
    menu: menu?.data.attributes.panels,
    footer,
  }
}

export default MyApp
