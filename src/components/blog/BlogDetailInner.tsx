import { css } from '@emotion/react'
import style from '~/styles'
import { BlogType } from '~/types/Blog'
import { MemberType } from '~/types/Member'
import { CustomLink } from '../common/CustomLink'
import { Picture } from '../common/Picture'

type Props = {
  blog: BlogType
  authorData: MemberType
}

const BlogDetailInner: React.FC<Props> = ({ blog, authorData }) => {
  return (
    <div css={main}>
      <div>
        <h2 css={title}>
          <Picture
            webp={require('@public/img/page/blogTitle.png?webp')}
            img={require('@public/img/page/blogTitle.png')}
            alt="ウラ話"
          />
        </h2>
      </div>
      <div css={cover}>
        <Picture
          webp={`${blog.thumbnail.url}?fm=webp`}
          img={blog.thumbnail.url}
        />
      </div>
      <div css={body}>
        <div css={heading}>
          <ul css={tagList}>
            {Array.isArray(blog.tags) ? (
              <>
                {blog.tags.map((tag, index) => (
                  <li css={tagItem} key={index}>
                    <span>{tag}</span>
                  </li>
                ))}
              </>
            ) : (
              <li css={tagItem}>
                <span>{blog.tags}</span>
              </li>
            )}
          </ul>
          <h1 css={blogTitle}>{blog.title}</h1>
        </div>
        <div css={desc}>
          <div css={descMember}>
            <div css={descMemberImg}>
              <Picture
                webp={`${authorData.icon.url}?webp`}
                img={authorData.icon.url}
              />
            </div>
            <div css={descMemberText}>
              <span>{authorData.name}</span>
              <span>
                {blog.date
                  .split('T')[0]
                  .replace('-', '/')
                  .replace('-', '/')}
              </span>
            </div>
          </div>
          <div
            css={content}
            dangerouslySetInnerHTML={{ __html: blog.detail }}
          ></div>
        </div>
      </div>
      <div css={backWrap}>
        <div css={back}>
          <CustomLink href="/blog">
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
    width: ${style.vwSp(104)};
  }
  &::before {
    background-color: ${style.colors.blogDark};
  }
  ${style.pc(css`
    img {
      width: 104px;
    }
  `)}
`

const cover = css`
  margin: ${style.vwSp(88)} 0 0;
  img {
    width: 100%;
  }
  ${style.pc(css`
    margin: 80px 0 0;
  `)}
`

const body = css`
  position: relative;
  width: 100%;
  margin-top: ${style.vwSp(-16)};
  padding: 0 ${style.vwSp(style.config.project.paddingSpSide)} 0;
  ${style.pc(css`
    margin-top: -16px;
    padding: 0 36px 0;
  `)}
`

const heading = css`
  padding: ${style.vwSp(32)};
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
const blogTitle = css`
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
  padding: ${style.vwSp(32)} ${style.vwSp(32)} ${style.vwSp(40)};
  background-color: white;
  border-radius: ${style.vwSp(16)};
  margin: ${style.vwSp(20)} 0 0;
  ${style.pc(css`
    padding: 40px 54px;
    border-radius: 16px;
  `)}
`

const descMember = css`
  display: flex;
  align-items: center;
`
const descMemberImg = css`
  width: ${style.vwSp(32)};
  flex-shrink: 0;
  ${style.pc(css`
    width: 32px;
  `)}
`
const descMemberText = css`
  display: flex;
  flex-direction: column;
  margin-left: ${style.vwSp(24)};
  span {
    font-size: ${style.vwSp(10)};
    line-height: 1.6;
    letter-spacing: 0.1em;
    &:first-of-type {
      font-weight: ${style.config.weight.extraBold};
    }
  }
  ${style.pc(css`
    margin-left: 24px;
    span {
      font-size: 10px;
    }
  `)}
`

const content = css`
  padding: ${style.vwSp(40)} 0 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: ${style.vwSp(18)};
    line-height: 1.6;
    letter-spacing: 0.08em;
    font-weight: ${style.config.weight.extraBold};
  }
  strong {
    font-weight: ${style.config.weight.extraBold};
  }
  img {
    width: 100%;
  }
  p {
    font-size: ${style.vwSp(16)};
    line-height: 1.76;
    letter-spacing: 0.08em;
  }
  iframe {
    width: 100%;
    height: auto;
  }
  a {
    color: $colorDarkBlue;
    text-decoration: underline;
  }
  ol {
    counter-reset: numberCounter;
    li {
      &::before {
        counter-increment: numberCounter;
        content: counter(numberCounter) '.';
        display: inline-block;
        padding-right: 8px;
      }
    }
  }
  ul {
    li {
      &::before {
        content: '・';
        display: inline-block;
        padding-right: 8px;
      }
    }
  }
  ${style.pc(css`
    padding: 40px 0 0;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 18px;
    }
    iframe {
      height: 450px;
    }
    p {
      font-size: 16px;
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
  &::before {
    border-color: ${style.colors.blogDark};
    background-color: ${style.colors.blogDark};
  }
  &::after {
    border-color: ${style.colors.blogDark};
  }
  ${style.pc(css`
    width: 352px;
    margin: 40px auto 0;
  `)}
`

export { BlogDetailInner }
