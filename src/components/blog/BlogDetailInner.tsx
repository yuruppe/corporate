import { css } from '@emotion/react'
import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import style from '~/styles'
import { BlogType } from '~/types/Blog'
import { MemberType } from '~/types/Member'
import { CustomLink } from '../common/CustomLink'
import { Picture } from '../common/Picture'
import gsap from 'gsap'

type Props = {
  blog: BlogType
  authorData: MemberType
  recommended: BlogType[]
}

const BlogDetailInner: React.FC<Props> = ({
  blog,
  authorData,
  recommended,
}) => {
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
    gsap.set('.blog_title', defaultInitParam)
    gsap.set('.blog_cover', defaultInitParam)
    gsap.set('.blog_heading', defaultInitParam)
    gsap.set('.blog_description', defaultInitParam)
    gsap.set('.blog_credit', defaultInitParam)
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
        .to('.blog_title', defaultAnimParam, main)
        .to('.blog_cover', defaultAnimParam, main + '+=0.2')

      gsap
        .timeline({ scrollTrigger: '.blog_heading' })
        .to('.blog_heading', defaultAnimParam)
      gsap
        .timeline({ scrollTrigger: '.blog_description' })
        .to('.blog_description', defaultAnimParam)
      gsap
        .timeline({ scrollTrigger: '.blog_credit' })
        .to('.blog_credit', defaultAnimParam)
      gsap
        .timeline({ scrollTrigger: '.back_button' })
        .to('.back_button', defaultAnimParam)
    }
  }, [isLoading])

  return (
    <>
      <div css={main}>
        <div>
          <h2 css={title} className="blog_title">
            <CustomLink href="/urabanashi">
              <Picture
                webp={require('@public/img/page/blogTitle.png?webp')}
                img={require('@public/img/page/blogTitle.png')}
                alt="ウラ話"
              />
            </CustomLink>
          </h2>
        </div>
        <div css={cover} className="blog_cover">
          <Picture
            webp={`${blog.thumbnail.url}?fm=webp`}
            img={blog.thumbnail.url}
          />
        </div>
        <div css={body}>
          <div css={heading} className="blog_heading">
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
          <div css={desc} className="blog_description">
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
          <div css={desc} className="blog_credit">
            <h2 css={recTitle}>おすすめ</h2>
            <ul css={recList}>
              {recommended.map((rec, index) => (
                <div key={index} css={recItem}>
                  <CustomLink href={`/urabanashi/${rec.id}`}>
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
            <CustomLink href="/urabanashi">
              <span>一覧にもどる</span>
            </CustomLink>
          </div>
        </div>
      </div>
    </>
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
  a {
    display: inline-block;
    ${style.mixin.animPop(1.08)}
  }
  ${style.pc(css`
    img {
      width: 104px;
    }
  `)}
`

const cover = css`
  margin: ${style.vwSp(88)} 0 0;
  border-radius: ${style.vwSp(16)};
  overflow: hidden;
  img {
    width: 100%;
  }
  ${style.pc(css`
    border-radius: 16px;
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
    padding: 40px 54px;
    border-radius: 16px;
  `)}
`
const tagList = css`
  display: flex;
  flex-wrap: wrap;
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
    margin: 20px 0 0;
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
    overflow: hidden;
    display: inline-block;
    border-radius: ${style.vwSp(16)};
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
    img {
      border-radius: 16px;
    }
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
  padding: ${style.vwSp(32)} 0 0;
  ${style.pc(css`
    padding: 32px 0 0;
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
    ${style.mixin.animPop()}
  `)}
`

export { BlogDetailInner }
