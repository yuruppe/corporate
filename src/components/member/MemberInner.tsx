import { css } from '@emotion/react'
import { Picture } from '../common/Picture'
import style from '~/styles'
import { MemberType } from '~/types/Member'
import { MemberItem } from './MemberItem'
import { CustomLink } from '../common/CustomLink'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import gsap from 'gsap'

type Props = {
  members: MemberType[]
  coverURL: string
}

const MemberInner: React.FC<Props> = ({ members, coverURL }) => {
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
    gsap.set('.member_title', defaultInitParam)
    gsap.set('.member_inner', defaultInitParam)
    gsap.set('.back_button', defaultInitParam)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const main = 'main'
      gsap
        .timeline({
          delay: 1.2,
        })
        .addLabel(main)
        .to('.member_title', defaultAnimParam, main)
        .to('.member_inner', defaultAnimParam, main + '+=0.2')
      gsap
        .timeline({ scrollTrigger: '.back_button' })
        .to('.back_button', defaultAnimParam)
    }
  }, [isLoading])

  return (
    <div css={main}>
      <div>
        <h1 css={title} className="member_title">
          <Picture
            webp={require('@public/img/page/memberTitle.png?webp')}
            img={require('@public/img/page/memberTitle.png')}
            alt="メンバー"
          />
        </h1>
      </div>
      <div css={inner} className="member_inner">
        <div css={cover}>
          <Picture webp={`${coverURL}?fm=webp`} img={coverURL} />
        </div>
        <div css={bodyWrap}>
          <div css={body}>
            <ul>
              {members.map((member) => (
                <MemberItem member={member} key={member.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div css={backWrap} className="back_button">
        <div css={back}>
          <CustomLink href="/">
            <span>もどる</span>
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
    width: ${style.vwSp(140)};
  }
  ${style.pc(css`
    img {
      width: 140px;
    }
  `)}
`

const inner = css`
  ${style.pc(css`
    display: flex;
    border-radius: 16px;
    overflow: hidden;
    height: 499px;
    margin: 80px 0 0;
    background-color: white;
  `)}
`
const cover = css`
  margin: ${style.vwSp(88)} 0 0;
  img {
    width: 100%;
  }
  ${style.pc(css`
    margin: 0;
    flex-shrink: 0;
    width: 361px;
  `)}
`

const bodyWrap = css`
  ${style.pc(css`
    padding: 52px 32px 52px 90px;
    margin: 0;
    border-radius: 0;
  `)}
`
const body = css`
  position: relative;
  border-radius: ${style.vwSp(16)};
  background-color: white;
  padding: ${style.vwSp(48)} ${style.vwSp(32)} ${style.vwSp(64)};
  margin: ${style.vwSp(-15)} ${style.vwSp(style.config.project.paddingSpSide)} 0;
  ${style.pc(css`
    height: 100%;
    padding: 0 52px 0 0;
    margin: 0;
    border-radius: 0;
    overflow-y: scroll;
  `)}
`

const backWrap = css`
  padding: 0 ${style.vwSp(style.config.project.paddingSpSide)};
  ${style.pc(css`
    padding: 0;
  `)}
`
const back = css`
  margin: ${style.vwSp(40)} 0 0;
  ${style.mixin.borderSquareButton()}
  ${style.pc(css`
    width: 352px;
    margin: 40px auto 0;
    &:hover {
      ${style.mixin.animPop()}
    }
  `)}
`

export { MemberInner }
