import * as React from 'react'
import { AppProps } from 'next/app'

import 'sanitize.css'
import '../styles/default/global.scss'

import { Layout } from '~/components/layout/Layout'
import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'
import { Provider } from '~/components/layout/Provider'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider>
      <Layout>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Layout>
    </Provider>
  )
}

export default MyApp
