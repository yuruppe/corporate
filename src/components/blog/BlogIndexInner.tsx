import { css } from '@emotion/react'
import { CustomLink } from '../common/CustomLink'
import { Picture } from '../common/Picture'
import style from '~/styles'
import { BlogType } from '~/types/Blog'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '~/store/appContext'
import gsap from 'gsap'
import cn from 'classnames'

type Props = {
  blogs: BlogType[]
}

const BlogIndexInner: React.FC<Props> = ({ blogs }) => {
  const { appState } = useContext(AppContext)
  const { isLoading } = appState
  const worksLength = blogs.length

  const initialLength = 6
  const moreLength = 6

  const [moreBtnState, setMoreBtnState] = useState<boolean>(true)
  const [itemCount, setItemCount] = useState<number>(0)
  const [nowCount, setNowCount] = useState<number>(0)
  const [item, setItem] = useState<NodeListOf<Element>>()

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

  const _item = '.works_item'
  useEffect(() => {
    gsap.set('.works_title', defaultInitParam)
    gsap.set('.works_more', defaultInitParam)
    const targetItem = document.querySelectorAll(_item)
    gsap.set(targetItem, {
      opacity: 0,
      y: 70,
      display: 'none',
    })
    setItem(targetItem)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setItemCount(initialLength)
      }, 1200)
      const main = 'main'
      gsap
        .timeline({
          delay: 1.2,
          onStart: () => {
            gsap
              .timeline({
                scrollTrigger: '.works_more',
                delay: 0.3,
              })
              .to('.works_more', defaultAnimParam)
          },
        })
        .addLabel(main)
        .to('.works_title', defaultAnimParam, main)
    }
  }, [isLoading])

  useEffect(() => {
    if (itemCount) {
      const target = []
      const node = Array.prototype.slice.call(item, 0)
      node.forEach((__item, index) => {
        if (index < itemCount && index >= nowCount) {
          target.push(__item)
          gsap.set(__item, {
            display: 'block',
          })
        }
      })
      if (!target.length) {
        setMoreBtnState(false)
        return
      }
      gsap.to(target, {
        delay: 0.3,
        opacity: 1,
        y: 0,
        ease: 'expo.out',
        duration: 1.9,
        stagger: 0.1,
      })
      if (nowCount + target.length === worksLength) {
        setMoreBtnState(false)
      }
      setNowCount(nowCount + target.length)
    }
  }, [itemCount])

  const moreBtnOnClick = (): void => {
    setItemCount(itemCount + moreLength)
  }

  return (
    <div css={main}>
      <div>
        <h1 css={title} className="works_title">
          <Picture
            webp={require('@public/img/page/blogTitle.png?webp')}
            img={require('@public/img/page/blogTitle.png')}
            alt="ウラ話"
          />
        </h1>
      </div>
      <div css={body}>
        <ul css={list}>
          {blogs.map((blog, index) => (
            <li css={itemStyle} key={index} className="works_item">
              <CustomLink href={`/urabanashi/${blog.id}`}>
                <div css={itemInner}>
                  <div css={img}>
                    <Picture
                      webp={`${blog.thumbnail.url}?fm=webp`}
                      img={blog.thumbnail.url}
                      alt=""
                    />
                  </div>
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
                  <h2 css={itemTitle}>{blog.title}</h2>
                </div>
              </CustomLink>
            </li>
          ))}
        </ul>
        {moreBtnState ? (
          <div css={backWrap} className="works_more" style={{ opacity: 0 }}>
            <div css={back} onClick={moreBtnOnClick}>
              <span>もっとみる</span>
            </div>
          </div>
        ) : null}
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
    max-width: ${style.vwPc(1180)};
    width: ${style.vwPc(1180)};
    padding-left: ${style.vwPc(50)};
    padding-right: ${style.vwPc(50)};
  `)}
`

const title = css`
  ${style.mixin.titleBottomBorder()}
  img {
    width: ${style.vwSp(118)};
  }
  &::before {
    background-color: ${style.colors.blogDark};
  }
  ${style.pc(css`
    img {
      width: 118px;
    }
  `)}
`

const body = css`
  position: relative;
  margin: ${style.vwSp(88)} 0 0;
  width: 100%;
  ${style.pc(css`
    margin: 40px 0 0;
  `)}
`

const list = css`
  position: relative;
  width: 100%;
  ${style.pc(css`
    display: flex;
    flex-wrap: wrap;
  `)}
`

const itemInner = css`
  padding: ${style.vwSp(16)} ${style.vwSp(16)} ${style.vwSp(24)};
  background-color: white;
  border-radius: ${style.vwSp(16)};
  height: 100%;
  ${style.pc(css`
    padding: 16px 16px 24px;
    border-radius: 16px;
  `)}
`
const img = css`
  overflow: hidden;
  border-radius: ${style.vwSp(8)};
  img {
    width: 100%;
  }
  ${style.pc(css`
    border-radius: 8px;
    img {
      transition: transform 1.2s ${style.easing.outExpo};
    }
  `)}
`
const tagList = css`
  padding: ${style.vwSp(12)} 0 ${style.vwSp(20)};
  display: flex;
  flex-wrap: wrap;
  ${style.pc(css`
    padding: 16px 0 16px;
    transition: opacity 0.6s ease;
  `)}
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
    margin-top: 8px;
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
    transition: opacity 0.6s ease;
  `)}
`
const itemStyle = css`
  & + & {
    padding: ${style.vwSp(20)} 0 0;
  }
  ${style.pc(css`
    width: ${style.vwPc(352)};
    margin-top: 40px;
    margin-left: ${style.vwPc(12)};
    & + & {
      padding: 0;
    }
    &:first-of-type {
      margin-left: 0;
    }
    &:nth-of-type(3n + 1) {
      margin-left: 0;
    }
    a:hover {
      .css-${img.name} {
        img {
          transform: scale(1.07);
        }
      }
      .css-${tagList.name} {
        opacity: 0.4;
      }
      .css-${itemTitle.name} {
        opacity: 0.4;
      }
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
  cursor: pointer;
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
    &:hover {
      ${style.mixin.animPop()}
    }
  `)}
`

export { BlogIndexInner }
