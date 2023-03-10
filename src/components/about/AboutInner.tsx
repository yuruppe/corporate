/* eslint-disable no-irregular-whitespace */
import { css } from '@emotion/react'
import { CustomLink } from '../common/CustomLink'
import { Picture } from '../common/Picture'
import style from '~/styles'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import gsap from 'gsap'

const AboutInner: React.FC = () => {
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
    gsap.set('.about_title', defaultInitParam)
    gsap.set('.about_inner', defaultInitParam)
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
        .to('.about_title', defaultAnimParam, main)
        .to('.about_inner', defaultAnimParam, main + '+=0.2')
      gsap
        .timeline({ scrollTrigger: '.back_button' })
        .to('.back_button', defaultAnimParam)
    }
  }, [isLoading])

  return (
    <div css={main}>
      <div>
        <h1 css={title} className="about_title">
          <Picture
            webp={require('@public/img/page/aboutTitle.png?webp')}
            img={require('@public/img/page/aboutTitle.png')}
            alt="会社概要"
          />
        </h1>
      </div>
      <div css={body} className="about_inner">
        <div css={logo}>
          <img src="/img/common/logo_illust_black.svg" alt="YURUPPE.inc" />
        </div>
        <div css={bodyInner}>
          <ul css={topList}>
            <li css={topItem}>
              <dl>
                <dt>商号</dt>
                <dd>株式会社YURUPPE</dd>
              </dl>
            </li>
            <li css={topItem}>
              <dl>
                <dt>設立</dt>
                <dd>令和2年09月10日</dd>
              </dl>
            </li>
            <li css={topItem}>
              <dl>
                <dt>代表者</dt>
                <dd>YP</dd>
              </dl>
            </li>
          </ul>
          <ul css={bottomList}>
            <li css={bottomItem}>
              <dl>
                <dt>事業内容</dt>
                <dd>
                  <ol>
                    <li>映像制作事業</li>
                    <li>
                      企業及び商品のブランドイメージの構築に関する企画及びコンサルティング事業
                    </li>
                    <li>
                      インターネット等のオンラインを利用した情報提供サービス事業
                    </li>
                    <li>各商品の企画、デザイン、制作及び販売事業</li>
                    <li>人材コンサルティング事業</li>
                    <li>前各号に附帯関連する一切の事業</li>
                  </ol>
                </dd>
              </dl>
            </li>
            <li css={bottomItem}>
              <dl>
                <dt>取引先</dt>
                <dd>
                  <ul>
                    <li>
                      ユニバーサル ミュージック合同会社 (UNIVERSAL MUSIC LLC)
                    </li>
                    <li>エイベックス株式会社</li>
                    <li>株式会社講談社</li>
                    <li>ソニー株式会社(Sony Corporation)</li>
                    <li>株式会社ソニー・ミュージックエンタテインメント</li>
                    <li>株式会社トイズファクトリー</li>
                    <li>UUUM(ウーム)株式会社 </li>
                    <li>株式会社 VAZ</li>
                  </ul>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div css={back} className="back_button">
        <CustomLink href="/">
          <span>もどる</span>
        </CustomLink>
      </div>
    </div>
  )
}

const main = css`
  position: relative;
  width: 100%;
  padding: 0 ${style.vwSp(style.config.project.paddingSpSide)} ${style.vwSp(48)};
  ${style.pc(css`
    ${style.mixin.mainPcStyle()}
  `)}
`

const title = css`
  ${style.mixin.titleBottomBorder()}
  img {
    width: ${style.vwSp(154)};
  }
  ${style.pc(css`
    img {
      width: 154px;
    }
  `)}
`

const body = css`
  margin: ${style.vwSp(64)} 0 0;
  border-radius: ${style.vwSp(16)};
  background-color: white;
  padding: ${style.vwSp(72)} ${style.vwSp(32)} ${style.vwSp(80)};
  dt {
    font-size: ${style.vwSp(16)};
    font-weight: ${style.config.weight.extraBold};
  }
  dd {
    font-size: ${style.vwSp(16)};
    line-height: ${style.vwSp(24)};
  }
  ${style.pc(css`
    margin: 88px 0 0;
    border-radius: 16px;
    padding: 92px;
    dt {
      font-size: 16px;
      font-weight: ${style.config.weight.extraBold};
    }
    dd {
      font-size: 16px;
      line-height: 24px;
    }
  `)}
`
const logo = css`
  text-align: center;
  img {
    width: ${style.vwSp(120)};
  }
  ${style.pc(css`
    img {
      width: 196px;
    }
  `)}
`
const bodyInner = css`
  ${style.pc(css`
    display: flex;
    justify-content: space-between;
    padding: 52px 0 0;
  `)}
`
const topList = css`
  padding: ${style.vwSp(32)} 0 0;
  ${style.pc(css`
    padding: 0;
    flex-shrink: 0;
    padding-right: 30px;
  `)}
`
const topItem = css`
  padding: ${style.vwSp(40)} 0;
  border-bottom: 1px solid #c4c4c4;
  dl {
    display: flex;
  }
  dt {
    width: ${style.vwSp(79)};
    flex-shrink: 0;
  }
  ${style.pc(css`
    padding: 0;
    border: none;
    & + & {
      padding: 81px 0 0;
    }
    dl {
      display: flex;
      align-items: center;
    }
    dt {
      width: 79px;
    }
  `)}
`
const bottomList = css`
  ${style.pc(css`
    width: 360px;
  `)}
`
const bottomItem = css`
  padding: ${style.vwSp(40)} 0;
  border-bottom: 1px solid #c4c4c4;
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  dd {
    padding: ${style.vwSp(40)} 0 0;
    margin-left: ${style.vwSp(111 - 32)};
  }
  li + li {
    margin: ${style.vwSp(16)} 0 0;
  }
  ol {
    counter-reset: counter;
  }
  ol li {
    position: relative;
    &::before {
      counter-increment: counter;
      content: counter(counter) '.';
      position: absolute;
      top: 0;
      left: ${style.vwSp(-32)};
    }
  }
  ul li {
    position: relative;
    &::before {
      content: '・';
      position: absolute;
      top: 0;
      left: ${style.vwSp(-32)};
    }
  }
  ${style.pc(css`
    padding: 0;
    border-bottom: none;
    & + & {
      padding: 72px 0 0;
    }
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    dd {
      padding: 40px 0 0;
      margin-left: 32px;
    }
    li + li {
      margin: 16px 0 0;
    }
    ol li {
      &::before {
        left: -32px;
      }
    }
    ul li {
      &::before {
        left: -32px;
      }
    }
  `)}
`

const back = css`
  margin: ${style.vwSp(40)} 0 0;
  ${style.mixin.borderSquareButton()}
  ${style.pc(css`
    width: 352px;
    margin: 40px auto 0;
    ${style.mixin.animPop()}
  `)}
`

export { AboutInner }
