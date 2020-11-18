import * as React from 'react'
import { AppProps } from 'next/app'

import 'sanitize.css'
import '../styles/default/global.scss'

import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'
import { Provider } from '~/components/layout/Provider'
import { PageWrap } from '~/components/layout/PageWrap'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider>
      <Header />
      <PageWrap>
        <Component {...pageProps} />
        <Footer />
      </PageWrap>
    </Provider>
  )
}

export default MyApp
