import * as React from 'react'
import { AppProps } from 'next/app'

// import 'sanitize.css'
// import '../styles/default/global.scss'

import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'
import { Provider } from '~/components/layout/Provider'
import { PageWrap } from '~/components/layout/PageWrap'
import { AnimatePresence, motion } from 'framer-motion'
import { Global } from '@emotion/react'
import { globalStyles } from '~/styles/global'

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <>
      <Global styles={globalStyles} />
      <Provider>
        <Header />
        <PageWrap>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={router.route}
            >
              <Component {...pageProps} />
              <Footer />
            </motion.div>
          </AnimatePresence>
        </PageWrap>
      </Provider>
    </>
  )
}

export default MyApp
