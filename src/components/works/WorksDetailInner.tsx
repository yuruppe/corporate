import ReactPlayer from 'react-player'
import cn from 'classnames'
import { Picture } from '~/components/common/Picture'
import { CustomLink } from '~/components/common/CustomLink'
import { WorksType } from '~/types/Works'
import { css } from '@emotion/react'
import style from '~/styles'

type Props = {
  work: WorksType
}

const WorksDetailInner: React.FC<Props> = ({ work }) => {
  return (
    <div css={main}>
      <div>
        <h2 css={title}>
          <Picture
            webp={require('@public/img/page/worksTitle.png?webp')}
            img={require('@public/img/page/worksTitle.png')}
            alt="つくったやつ"
          />
        </h2>
      </div>
      <div css={cover} className={cn({ movie: work.movie })}>
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
        <div css={heading}>
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
        <div css={desc}>
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
        <div css={credit}>
          <h2 css={creditTitle}>つくった人たち</h2>
          {work.credits.map((credit, index) => (
            <dl css={creditItem} key={index}>
              <dt css={creditRole}>{credit.role}</dt>
              <dd css={creditName}>{credit.name}</dd>
            </dl>
          ))}
        </div>
      </div>
      <div css={backWrap}>
        <div css={back}>
          <CustomLink href="/tukutta">
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
  ${style.pc(css`
    img {
      width: 212px;
    }
  `)}
`

const cover = css`
  margin: ${style.vwSp(88)} 0 0;
  background-color: ${style.colors.defaultGray};
  img {
    width: 100%;
  }
  &.movie {
    height: ${style.vwSp(236)};
  }
  ${style.pc(css`
    margin: 80px 0 0;
    &.movie {
      height: 508px;
    }
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
  padding: ${style.vwSp(32)} ${style.vwSp(32)} ${style.vwSp(36)};
  background-color: white;
  border-radius: ${style.vwSp(16)};
  ${style.pc(css`
    padding: 40px 90px;
    border-radius: 16px;
  `)}
`
const tagList = css`
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
  ${style.pc(css`
    padding: 4px 12px;
    border-radius: 40px;
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
