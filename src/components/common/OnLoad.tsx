import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'

type Props = {
  init: () => void
  anim: () => void
}

const OnLoad: React.FC<Props> = ({ init, anim }) => {
  const { appState } = useContext(AppContext)

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (!appState.isLoading) {
      setTimeout(() => {
        anim()
      }, 400)
    }
  }, [appState.isLoading])

  return <></>
}

export { OnLoad }
