import gsap from 'gsap'

const routingStart = (fn: () => void): void => {
  gsap.to('#page_wrap', {
    opacity: 0,
    onComplete: fn,
    duration: 0.5,
  })
}

const routingEnd = (): void => {
  gsap.to('#page_wrap', {
    opacity: 1,
    duration: 0.5,
  })
}

export { routingStart, routingEnd }
