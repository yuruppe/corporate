import { css } from '@emotion/react'
import { rgba } from 'emotion-rgba'
import { WorksType } from '~/types/Works'
import style from '~/styles'
import { Picture } from '../common/Picture'
import ReactPlayer from 'react-player'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import gsap from 'gsap'
import { isBrowser } from 'react-device-detect'

type Props = {
  work: WorksType
  reelText: string | string[]
}

const WorksModal: React.FC<Props> = ({ work, reelText }) => {
  const { appState, appDispatch } = useContext(AppContext)

  useEffect(() => {
    if (!appState.isLoading) {
      if (appState.worksModal.isOpened) return
      if (isBrowser) {
        appDispatch({ type: 'SET_WORK_MODAL_OPENED' })
        return
      }
      gsap
        .timeline({ delay: 2.0 })
        .addLabel('main')
        .to(
          '.worksModal_root',
          {
            opacity: 1,
            duration: 0.2,
          },
          'main',
        )
        .to(
          '.worksModal_content',
          {
            opacity: 1,
            y: 0,
            duration: 2.1,
            ease: 'expo.out',
          },
          'main',
        )
    }
  }, [appState.isLoading])

  const handleClick = (): void => {
    appDispatch({ type: 'SET_WORK_MODAL_OPENED' })
  }

  return (
    <div className="sp-only">
      <AnimatePresence>
        {appState.worksModal.isOpened ? null : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div css={root} className="worksModal_root">
              <div css={content} className="worksModal_content">
                <div css={inner}>
                  <div css={buttonWrap}>
                    <div css={button}>
                      <div css={top} onClick={handleClick}>
                        <div css={hamburger}>
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div />
                      <div css={bottom} />
                    </div>
                  </div>
                  <div css={scrollContent}>
                    <div>
                      <h1 css={title}>
                        <Picture
                          webp={require('@public/img/page/worksModalTitle.png?webp')}
                          img={require('@public/img/page/worksModalTitle.png')}
                          alt="つくったもの"
                        />
                      </h1>
                    </div>
                    <div css={itemInner}>
                      <div css={img} className={cn({ movie: work.movie })}>
                        {work.movie ? (
                          <>
                            <ReactPlayer
                              url={work.movie}
                              width="100%"
                              height="100%"
                              controls
                              playsinline
                            />
                          </>
                        ) : (
                          <>
                            <Picture
                              webp={`${work.thumbnail.url}?fm=webp`}
                              img={work.thumbnail.url}
                            />
                          </>
                        )}
                      </div>
                      <ul css={tagList}>
                        {Array.isArray(work.tags) ? (
                          <>
                            {work.tags.map((tag, index) => (
                              <li css={tagItem} key={index}>
                                <span>{tag}</span>
                              </li>
                            ))}
                          </>
                        ) : (
                          <li css={tagItem}>
                            <span>{work.tags}</span>
                          </li>
                        )}
                      </ul>
                      <h2 css={itemTitle}>{work.title}</h2>
                      <div css={itemDes}>
                        {Array.isArray(reelText) ? (
                          <>
                            {reelText.map((text, index) => (
                              <p key={index}>{text}</p>
                            ))}
                          </>
                        ) : (
                          <p>{reelText}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div css={bg} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const root = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 105;
  opacity: 0;
`
const bg = css`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: ${rgba('#000', 0.32)};
`
const content = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
`
const inner = css`
  position: relative;
  width: ${style.vwSp(352)};
  background-color: white;
  border-radius: 16px;
  padding: ${style.vwSp(16)} 0 ${style.vwSp(20)} ${style.vwSp(16)};
  height: ${style.vwSp(551)};
`
const scrollContent = css`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding-right: ${style.vwSp(16)};
  padding-bottom: ${style.vwSp(40)};
`
const buttonWrap = css`
  position: absolute;
  top: ${style.vwSp(16)};
  left: ${style.vwSp(-16)};
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
const top = css`
  width: 100%;
  height: 100%;
  border: 4px solid ${style.colors.darkBlue};
  border-radius: inherit;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ${style.easing.outBack},
    background-color 0.2s ease-in-out;
  &.dark {
    border-color: ${style.colors.blogDark};
  }
  &.open {
    transform: translateY(6%) !important;
  }
`
const button = css`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 60px;
  z-index: 10;
  pointer-events: auto;
  cursor: pointer;
  transition: transform 0.3s ${style.easing.outBack};
`
const hamburger = css`
  position: relative;
  width: 18px;
  height: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 20px;
    background-color: black;
    &:nth-of-type(1) {
      top: 8px;
      transform: rotate(45deg);
    }
    &:nth-of-type(2) {
      opacity: 0;
    }
    &:nth-of-type(3) {
      top: 8px;
      transform: rotate(-45deg);
    }
  }
`
const bottom = css`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${style.colors.darkBlue};
  border-radius: inherit;
  z-index: -1;
`
const title = css`
  ${style.mixin.titleBottomBorder()}
  padding-top: ${style.vwSp(96)};
  padding-bottom: ${style.vwSp(20)};
  img {
    width: ${style.vwSp(214)};
  }
  ${style.pc(css`
    img {
      width: 212px;
    }
  `)}
`
const itemInner = css`
  padding: ${style.vwSp(40)} 0 0;
  border-radius: ${style.vwSp(16)};
`
const img = css`
  background-color: ${style.colors.defaultGray};
  border-radius: ${style.vwSp(8)};
  overflow: hidden;
  img {
    width: 100%;
  }
  &.movie {
    position: relative;
    padding-top: 56.3%;
    z-index: 1;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`
const tagList = css`
  padding: ${style.vwSp(25)} 0 ${style.vwSp(10)};
  display: flex;
`
const tagItem = css`
  padding: ${style.vwSp(4)} ${style.vwSp(12)};
  border-radius: ${style.vwSp(40)};
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${style.vwSp(8)};
  span {
    display: inline-block;
    color: white;
    font-size: ${style.vwSp(10)};
    font-weight: ${style.config.weight.extraBold};
    line-height: 1;
    letter-spacing: 0.1em;
  }
`
const itemTitle = css`
  font-size: ${style.vwSp(20)};
  font-weight: ${style.config.weight.extraBold};
  line-height: 1.6;
  letter-spacing: 0.08em;
`
const itemDes = css`
  font-size: ${style.vwSp(16)};
  padding: ${style.vwSp(4)} 0 0;
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 0.08em;
`

export { WorksModal }
