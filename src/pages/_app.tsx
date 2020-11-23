import * as React from 'react'
import { AppProps } from 'next/app'

import { Footer } from '~/components/layout/Footer'
import { ContentWrap } from '~/components/layout/ContentWrap'
import { Global } from '@emotion/react'
import { globalStyles } from '~/styles/global'
import { Header } from '~/components/layout/Header'
import { Container } from '~/components/layout/Container'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Global styles={globalStyles} />
      <Container>
        <Header />
        <ContentWrap>
          <Component {...pageProps} />
          <Footer />
        </ContentWrap>
      </Container>
    </>
  )
}

export default MyApp
