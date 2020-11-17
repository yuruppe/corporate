import * as React from 'react'
import { AppProps } from 'next/app'

import 'sanitize.css'
import '../styles/default/global.scss'

import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'
import { Provider } from '~/components/layout/Provider'
import { AnimatePresence, motion } from 'framer-motion'

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  return (
    <Provider>
      <Header />
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.5,
                  ease: 'easeInOut',
                },
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.3,
                  // delay: 2.0,
                  ease: 'easeInOut',
                },
              },
            }}
            key={router.route}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </Provider>
  )
}

export default MyApp
