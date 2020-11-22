import { css } from '@emotion/react'
import { CustomLink } from '../common/CustomLink'
import { Picture } from '../common/Picture'
import style from '~/styles'
import { WorksType } from '~/types/Works'

type Props = {
  works: WorksType[]
}

const WorksIndexInner: React.FC<Props> = ({ works }) => {
  return (
    <div css={main}>
      <div>
        <h1 css={title}>
          <Picture
            webp={require('@public/img/page/worksTitle.png?webp')}
            img={require('@public/img/page/worksTitle.png')}
            alt="つくったやつ"
          />
        </h1>
      </div>
      <div css={body}>
        <ul css={list}>
          {works.map((work, index) => (
            <li css={item} key={index}>
              <CustomLink href={`/works/${work.id}`}>
                <div css={itemInner}>
                  <div css={img}>
                    <Picture
                      webp={`${work.thumbnail.url}?fm=webp`}
                      img={work.thumbnail.url}
                    />
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
                </div>
              </CustomLink>
            </li>
          ))}
        </ul>
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
    width: ${style.vwSp(212)};
  }
  ${style.pc(css`
    img {
      width: 212px;
    }
  `)}
`

const body = css`
  position: relative;
  margin: ${style.vwSp(88)} 0 0;
  width: 100%;
  ${style.pc(css`
    margin: 80px 0 0;
  `)}
`
const list = css`
  position: relative;
  ${style.pc(css`
    display: flex;
  `)}
`
const item = css`
  & + & {
    padding: ${style.vwSp(20)} 0 0;
  }
  ${style.pc(css`
    width: 352px;
    margin-left: 12px;
    & + & {
      padding: 0;
    }
    &:first-child {
      margin: 0;
    }
    &:nth-of-type(3n) {
      margin: 0;
    }
  `)}
`
const itemInner = css`
  padding: ${style.vwSp(16)} ${style.vwSp(16)} ${style.vwSp(32)};
  background-color: white;
  border-radius: ${style.vwSp(16)};
  ${style.pc(css`
    padding: 16px 16px 24px;
    border-radius: 16px;
  `)}
`
const img = css`
  overflow: hidden;
  border-radius: ${style.vwSp(8)};
  ${style.pc(css`
    border-radius: 8px;
  `)}
`
const tagList = css`
  padding: ${style.vwSp(20)} 0;
  display: flex;
  ${style.pc(css`
    padding: 24px 0 16px;
  `)}
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
const itemTitle = css`
  font-size: ${style.vwSp(20)};
  font-weight: ${style.config.weight.extraBold};
  line-height: 1.6;
  letter-spacing: 0.08em;
  ${style.pc(css`
    font-size: 20px;
  `)}
`
// const back = css`
//   margin: ${style.vwSp(40)} 0 0;
//   ${style.mixin.borderSquareButton()}
// `

export { WorksIndexInner }
