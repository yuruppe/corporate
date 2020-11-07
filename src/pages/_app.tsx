import * as React from 'react'
import App, { AppProps } from 'next/app'

import 'sanitize.css'
import '../styles/default/global.scss'

import { Layout } from '~/components/layout/Layout'
import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props

    return (
      <Layout>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </Layout>
    )
  }
}

export default MyApp
