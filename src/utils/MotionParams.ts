import { Variants } from 'framer-motion'

const MotionDefaultParam: Variants = {
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
      ease: 'easeInOut',
    },
  },
}

const easing = [0.215, 0.61, 0.355, 1.0]

const BaseVariant = {
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.45,
      ease: easing,
    },
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.4,
      ease: easing,
    },
  },
}

export { MotionDefaultParam, BaseVariant }
