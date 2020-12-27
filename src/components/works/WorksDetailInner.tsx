import ReactPlayer from 'react-player'
import cn from 'classnames'
import { Picture } from '~/components/common/Picture'
import { CustomLink } from '~/components/common/CustomLink'
import { WorksType } from '~/types/Works'
import { css } from '@emotion/react'
import style from '~/styles'
import gsap from 'gsap'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'

type Props = {
  work: WorksType
  recommended: WorksType[]
}

const WorksDetailInner: React.FC<Props> = ({ work, recommended }) => {
  const { appState } = useContext(AppContext)
  const { isLoading } = appState
  const defaultInitParam: gsap.TweenVars = {
    opacity: 0,
    y: 70,
  }
  const defaultAnimParam: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    ease: 'expo.out',
    duration: 1.9,
  }

  useEffect(() => {
    gsap.set('.works_title', defaultInitParam)
    gsap.set('.works_cover', defaultInitParam)
    gsap.set('.works_heading', defaultInitParam)
    gsap.set('.works_description', defaultInitParam)
    gsap.set('.works_credit', defaultInitParam)
    gsap.set('.back_button', defaultInitParam)
    gsap.set('.works_recommended', defaultInitParam)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const main = 'main'
      const tl = gsap
        .timeline({
          delay: 1.2,
        })
        .addLabel(main)
        .to('.works_title', defaultAnimParam, main)
        .to('.works_cover', defaultAnimParam, main + '+=0.2')

      if (window.innerWidth < 768) {
        tl.to('.works_heading', defaultAnimParam, main + '+=0.5')
        tl.to('.works_description', defaultAnimParam, main + '+=1.2')
      } else {
        gsap
          .timeline({ scrollTrigger: '.works_heading' })
          .to('.works_heading', defaultAnimParam)
        gsap
          .timeline({ scrollTrigger: '.works_description' })
          .to('.works_description', defaultAnimParam)
      }
      gsap
        .timeline({ scrollTrigger: '.works_credit' })
        .to('.works_credit', defaultAnimParam)
      gsap
        .timeline({ scrollTrigger: '.back_button' })
        .to('.back_button', defaultAnimParam)
      gsap
        .timeline({ scrollTrigger: '.works_recommended' })
        .to('.works_recommended', defaultAnimParam)
    }
  }, [isLoading])

  return (
    <div css={main}>
      <div>
        <h2 css={title} className="works_title">
          <CustomLink href="/tsukutta">
            <Picture
              webp={require('@public/img/page/worksTitle.png?webp')}
              img={require('@public/img/page/worksTitle.png')}
              alt="つくったもの"
            />
          </CustomLink>
        </h2>
      </div>
      <div css={cover} className={cn({ movie: work.movie }, 'works_cover')}>
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
      <div css={body}>
        <div css={heading} className="works_heading">
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
          <h1 css={workTitle}>{work.title}</h1>
        </div>
        <div css={desc} className="works_description">
          <h2 css={descTitle}>せつめい</h2>
          {Array.isArray(work.detail) ? (
            <>
              {work.detail.map((d, index) => (
                <p css={descText} key={index}>
                  {d}
                </p>
              ))}
            </>
          ) : (
            <p css={descText}>{work.detail}</p>
          )}
          {work.urabanashi ? (
            <div css={descLink}>
              <CustomLink href={`/urabanashi/${work.urabanashi}`}>
                <div css={descAnchor}>詳しいウラ話</div>
              </CustomLink>
            </div>
          ) : null}
        </div>
        {work.credits.length ? (
          <div css={credit} className="works_credit">
            <h2 css={creditTitle}>つくった人たち</h2>
            {work.credits.map((credit, index) => (
              <dl css={creditItem} key={index}>
                <dt css={creditRole}>{credit.role}</dt>
                <dd css={creditName}>{credit.name}</dd>
              </dl>
            ))}
          </div>
        ) : null}
        <div css={desc} className="works_recommended">
          <h2 css={recTitle}>おすすめ</h2>
          <ul css={recList}>
            {recommended.map((rec, index) => (
              <div key={index} css={recItem}>
                <CustomLink href={`/tsukutta/${rec.id}`}>
                  <div css={img}>
                    <Picture
                      webp={`${rec.thumbnail.url}?fm=webp`}
                      img={`${rec.thumbnail.url}`}
                      alt=""
                    />
                  </div>
                  <div>
                    <div css={recTag}>
                      <ul css={tagList}>
                        {Array.isArray(rec.tags) ? (
                          <>
                            {rec.tags.map((tag, index) => (
                              <li css={tagItem} key={index}>
                                <span>{tag}</span>
                              </li>
                            ))}
                          </>
                        ) : (
                          <li css={tagItem}>
                            <span>{rec.tags}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div css={recItemTitle}>
                      <h3>{rec.title}</h3>
                    </div>
                  </div>
                </CustomLink>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div css={backWrap} className="back_button">
        <div css={back}>
          <CustomLink href="/tsukutta">
            <span>一覧にもどる</span>
          </CustomLink>
        </div>
      </div>
    </div>
  )
}

const main = css`
  position: relative;
  width: 100%;
  padding: 0 0 ${style.vwSp(48)};
  ${style.pc(css`
    ${style.mixin.mainPcStyle()}
  `)}
`

const title = css`
  ${style.mixin.titleBottomBorder()}
  img {
    width: ${style.vwSp(212)};
  }
  a {
    display: inline-block;
    ${style.mixin.animPop(1.08)}
  }
  ${style.pc(css`
    img {
      width: 212px;
    }
  `)}
`

const cover = css`
  margin: ${style.vwSp(88)} 0 0;
  background-color: ${style.colors.defaultGray};
  border-radius: ${style.vwSp(16)};
  overflow: hidden;
  img {
    width: 100%;
  }
  &.movie {
    position: relative;
    padding-top: 56.3%;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  ${style.pc(css`
    margin: 80px 0 0;
    border-radius: 16px;
  `)}
`

const body = css`
  position: relative;
  width: 100%;
  padding: ${style.vwSp(24)} ${style.vwSp(style.config.project.paddingSpSide)} 0;
  ${style.pc(css`
    padding: 28px 0 0;
  `)}
`

const heading = css`
  padding: ${style.vwSp(26)} ${style.vwSp(32)} ${style.vwSp(36)};
  background-color: white;
  border-radius: ${style.vwSp(16)};
  ${style.pc(css`
    padding: 32px 90px 40px;
    border-radius: 16px;
  `)}
`
const tagList = css`
  display: flex;
  flex-wrap: wrap;
`
const tagItem = css`
  margin: ${style.vwSp(8)} 0 0;
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
  ${style.pc(css`
    padding: 4px 12px;
    border-radius: 40px;
    margin-top: 8px;
    margin-right: 8px;
    span {
      font-size: 10px;
    }
  `)}
`
const workTitle = css`
  padding: ${style.vwSp(16)} 0 0;
  font-size: ${style.vwSp(20)};
  font-weight: ${style.config.weight.extraBold};
  line-height: 1.6;
  letter-spacing: 0.08em;
  ${style.pc(css`
    padding: 16px 0 0;
    font-size: 20px;
  `)}
`

const desc = css`
  padding: ${style.vwSp(32)};
  background-color: white;
  border-radius: ${style.vwSp(16)};
  margin: ${style.vwSp(20)} 0 0;
  ${style.pc(css`
    padding: 40px 90px;
    border-radius: 16px;
    margin: 20px 0 0;
  `)}
  &.works_recommended {
    padding-bottom: 0;
  }
`

const descTitle = css`
  font-size: ${style.vwSp(24)};
  line-height: 1;
  font-weight: ${style.config.weight.black};
  letter-spacing: 0.1em;
  padding: 0 0 ${style.vwSp(24)};
  ${style.pc(css`
    font-size: 24px;
    padding: 0 0 16px;
  `)}
`
const descText = css`
  font-size: ${style.vwSp(16)};
  line-height: 1.6;
  letter-spacing: 0.08em;
  font-weight: ${style.config.weight.extraBold};
  ${style.pc(css`
    font-size: 16px;
  `)}
`
const descLink = css`
  padding: ${style.vwSp(48)} 0 0;
  display: inline-block;
  ${style.pc(css`
    padding: 52px 0 0;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.6;
    }
  `)}
`
const descAnchor = css`
  position: relative;
  font-size: ${style.vwSp(16)};
  line-height: 1.6;
  color: ${style.colors.darkBlue};
  font-weight: ${style.config.weight.extraBold};
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${style.colors.darkBlue};
  }
  ${style.pc(css`
    font-size: 16px;
  `)}
`

const credit = css`
  padding: ${style.vwSp(32)};
  background-color: white;
  border-radius: ${style.vwSp(16)};
  margin: ${style.vwSp(20)} 0 0;
  ${style.pc(css`
    padding: 40px 90px;
    margin: 20px 0 0;
    border-radius: 16px;
  `)}
`
const creditTitle = css`
  font-size: ${style.vwSp(24)};
  line-height: 1;
  font-weight: ${style.config.weight.black};
  letter-spacing: 0.08em;
  padding: 0 0 ${style.vwSp(24)};
  ${style.pc(css`
    font-size: 24px;
    padding: 0 0 16px;
  `)}
`
const creditItem = css`
  & + & {
    padding: ${style.vwSp(18)} 0 0;
  }
  ${style.pc(css`
    & + & {
      padding: 18px 0 0;
    }
  `)}
`
const creditRole = css`
  font-size: ${style.vwSp(16)};
  line-height: 1.6;
  font-weight: ${style.config.weight.extraBold};
  letter-spacing: 0.08em;
  ${style.pc(css`
    font-size: 16px;
  `)}
`
const creditName = css`
  font-size: ${style.vwSp(16)};
  line-height: 1.6;
  letter-spacing: 0.08em;
  ${style.pc(css`
    font-size: 16px;
  `)}
`
const recTitle = css`
  font-size: ${style.vwSp(24)};
  font-weight: 900;
  padding: ${style.vwSp(7)} 0 0;
  ${style.pc(css`
    font-size: 24px;
    padding: 0;
  `)}
`
const recList = css`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  height: auto;
  padding: ${style.vwSp(32)} 0 ${style.vwSp(32)};
  ${style.pc(css`
    padding: 32px 0 40px;
    display: block;
    overflow: auto;
  `)}
`

const img = css`
  overflow: hidden;
  border-radius: ${style.vwSp(8)};
  width: ${style.vwSp(160)};
  flex-shrink: 0;
  ${style.pc(css`
    border-radius: 8px;
    width: auto;
    margin-right: 50px;
    img {
      width: 220px;
      transition: transform 1.2s ${style.easing.outExpo};
    }
  `)}
`
const recTag = css`
  padding: ${style.vwSp(25)} 0 0;
  li {
    margin-top: ${style.vwSp(5)};
  }
  ${style.pc(css`
    padding: 0;
    margin-top: -5px;
    transition: opacity 0.3s ease;
    li {
      margin-top: 5px;
    }
    li + li {
      margin-left: 16px;
    }
  `)}
`
const recItemTitle = css`
  padding: ${style.vwSp(16)} 0 0;
  h3 {
    font-size: ${style.vwSp(16)};
    font-weight: 800;
    line-height: 1.6;
  }
  ${style.pc(css`
    padding: 16px 0 0;
    transition: opacity 0.3s ease;
    h3 {
      font-size: 16px;
    }
  `)}
`
const recItem = css`
  & + & {
    margin-left: ${style.vwSp(16)};
  }
  a {
    display: block;
  }
  ${style.pc(css`
    & + & {
      margin: 16px 0 0;
    }
    a {
      display: flex;
      &:hover {
        .css-${img.name} {
          img {
            transform: scale(1.1);
          }
        }
        .css-${recTag.name} {
          opacity: 0.5;
        }
        .css-${recItemTitle.name} {
          opacity: 0.5;
        }
      }
    }
  `)}
`
const backWrap = css`
  margin: ${style.vwSp(40)} 0 0;
  padding: 0 ${style.vwSp(style.config.project.paddingSpSide)} 0;
  ${style.pc(css`
    margin: 0;
    padding: 0;
  `)}
`

const back = css`
  ${style.mixin.borderSquareButton()}
  ${style.pc(css`
    width: 352px;
    margin: 40px auto 0;
    ${style.mixin.animPop()}
  `)}
`

export { WorksDetailInner }
