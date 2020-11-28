import { css, keyframes } from '@emotion/react'
import style from '~/styles'
import { CustomLink } from '../common/CustomLink'

type Props = {
  description: any
}

const HomeInner: React.FC<Props> = ({ description }) => {
  return (
    <div css={main}>
      <div css={inner}>
        <h1 css={title}>YURUPPE inc.</h1>
        <div css={desc} dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      <ul css={linkList}>
        <li css={linkItem}>
          <CustomLink href="/tsukutta">
            <div css={linkAnchor}>
              <h2 css={linkTitle} className="arrow">
                つくったやつ
              </h2>
            </div>
          </CustomLink>
        </li>
        <li css={linkItem}>
          <CustomLink href="/urabanashi">
            <div css={linkAnchor}>
              <h2 css={linkTitle} className="arrow">
                ウラ話
              </h2>
            </div>
          </CustomLink>
        </li>
        <li css={linkItem}>
          <a
            css={linkAnchor}
            href="https://yuruppe.stores.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 css={linkTitle} className="blank">
              映像屋さんの服
            </h2>
          </a>
        </li>
      </ul>
    </div>
  )
}

const main = css`
  position: relative;
  padding: 0 ${style.vwSp(style.config.project.paddingSpSide)} ${style.vwSp(48)};
  ${style.pc(css`
    ${style.mixin.mainPcStyle()}
  `)}
`
const inner = css`
  ${style.mixin.borderSquareFrame()}
  padding: ${style.vwSp(40)} ${style.vwSp(48)} ${style.vwSp(48)};
  ${style.pc(css`
    padding: 54px 180px 57px;
  `)}
`
const title = css`
  font-size: ${style.vwSp(37)};
  line-height: 1.6;
  font-weight: ${style.config.weight.black};
  white-space: nowrap;
  ${style.pc(css`
    font-size: 64px;
    line-height: 95px;
  `)}
`
const desc = css`
  padding: ${style.vwSp(32)} 0 0;
  font-size: ${style.vwSp(12)};
  line-height: 1.8;
  letter-spacing: 0.32em;
  font-weight: ${style.config.weight.extraBold};
  text-align: justify;
  ${style.pc(css`
    padding: 32px 0 0;
    font-size: 16px;
  `)}
`
const linkList = css`
  padding: ${style.vwSp(24)} 0 0;
  ${style.pc(css`
    padding: 40px 0 0;
    display: flex;
    justify-content: space-between;
  `)}
`
const linkItem = css`
  margin: ${style.vwSp(24)} 0 0;
  ${style.mixin.borderCircleButton()}
  ${style.pc(css`
    margin: 0;
    & + & {
      margin-left: 15px;
    }
    ${style.mixin.animPop()}
  `)}
`
const linkAnchor = css`
  position: relative;
  display: block;
  padding: ${style.vwSp(24)} ${style.vwSp(32)};
  text-align: center;
  ${style.pc(css`
    padding: 26px 32px;
  `)}
`
const linkTitle = css`
  position: relative;
  font-size: ${style.vwSp(20)};
  line-height: 1;
  letter-spacing: 0.08em;
  font-weight: ${style.config.weight.black};
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
  }
  &.arrow {
    &::before {
      background-image: url('/img/common/arrow.svg');
      width: ${style.vwSp(12)};
      height: ${style.vwSp(17)};
      transform: translateY(-50%);
    }
  }
  &.blank {
    &::before {
      background-image: url('/img/common/blank.svg');
      width: ${style.vwSp(20)};
      height: ${style.vwSp(20)};
      transform: translateY(-60%);
    }
  }
  ${style.pc(css`
    font-size: 20px;
    &.arrow {
      &::before {
        width: 12px;
        height: 17px;
      }
    }
    &.blank {
      &::before {
        width: 20px;
        height: 20px;
      }
    }
  `)}
`

export { HomeInner }
