import { css } from '@emotion/react'
import { Picture } from '../common/Picture'
import style from '~/styles'
import { MemberType } from '~/types/Member'
import { MemberItem } from './MemberItem'
import { CustomLink } from '../common/CustomLink'

type Props = {
  members: MemberType[]
  coverURL: string
}

const MemberInner: React.FC<Props> = ({ members, coverURL }) => {
  return (
    <div css={main}>
      <div>
        <h1 css={title}>
          <Picture
            webp={require('@public/img/page/memberTitle.png?webp')}
            img={require('@public/img/page/memberTitle.png')}
            alt="メンバー"
          />
        </h1>
      </div>
      <div css={inner}>
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
      <div css={backWrap}>
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

const item = css`
  & + & {
    padding: ${style.vwSp(72)} 0 0;
  }
  ${style.pc(css`
    & + & {
      padding: 62px 0 0;
    }
  `)}
`
const itemHead = css`
  h2 {
    font-size: ${style.vwSp(32)};
    font-weight: ${style.config.weight.black};
    line-height: 1;
    letter-spacing: 0.08em;
  }
  p {
    font-size: ${style.vwSp(16)};
    line-height: ${style.vwSp(24)};
    font-weight: ${style.config.weight.extraBold};
    padding: ${style.vwSp(8)} 0 0;
  }
  ${style.pc(css`
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
      padding: 8px 0 0;
      line-height: 1.6;
    }
  `)}
`
const description = css`
  font-size: ${style.vwSp(16)};
  line-height: 1.76;
  padding: ${style.vwSp(20)} 0 0;
  ${style.pc(css`
    font-size: 16px;
    padding: 20px 0 0;
  `)}
`
const sns = css`
  padding: ${style.vwSp(42)} 0 0;
  display: flex;
  span {
    font-size: ${style.vwSp(16)};
    line-height: ${style.vwSp(24)};
    font-weight: ${style.config.weight.extraBold};
  }
  ul {
    display: flex;
    padding-left: ${style.vwSp(32)};
  }
  li + li {
    margin-left: ${style.vwSp(24)};
  }
  .twitter {
    width: ${style.vwSp(24)};
  }
  .instagram {
    width: ${style.vwSp(20)};
  }
  .vimeo {
    width: ${style.vwSp(22.86)};
  }
  .facebook {
    width: ${style.vwSp(10)};
  }
  ${style.pc(css`
    padding: 50px 0 0;
    span {
      font-size: 16px;
      line-height: 1.6;
    }
    ul {
      padding-left: 60px;
    }
    li + li {
      margin-left: 24px;
    }
    .twitter {
      width: 24px;
    }
    .instagram {
      width: 20px;
    }
    .vimeo {
      width: 22.86px;
    }
    .facebook {
      width: 10px;
    }
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
  `)}
`

export { MemberInner }
