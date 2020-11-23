import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

type Props = {
  children: React.ReactNode
}

const ContentWrap: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  return (
    <div id="page_wrap">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={router.route}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export { ContentWrap }
