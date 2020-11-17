import { NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/About.module.scss'
import Link from 'next/link'
import { Picture } from '~/components/common/Picture'

// import cn from 'classnames'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | YURUPPE.inc</title>
      </Head>

      <section className={style.main}>
        <div className={style.head}>
          <h1 className={style.title}>
            <Picture
              webp={require('@public/img/page/aboutTitle.png?webp')}
              img={require('@public/img/page/aboutTitle.png')}
              alt="会社概要"
            />
          </h1>
        </div>
        <div className={style.body}>
          <div className={style.logo}>
            <img src="/img/common/logo_illust_black.svg" alt="YURUPPE.inc" />
          </div>
          <div className={style.bodyInner}>
            <ul className={style.topList}>
              <li className={style.topItem}>
                <dl>
                  <dt>商号</dt>
                  <dd>株式会社YURUPPE</dd>
                </dl>
              </li>
              <li className={style.topItem}>
                <dl>
                  <dt>設立</dt>
                  <dd>令和2年09月10日</dd>
                </dl>
              </li>
              <li className={style.topItem}>
                <dl>
                  <dt>代表者</dt>
                  <dd>YP</dd>
                </dl>
              </li>
            </ul>
            <ul className={style.bottomList}>
              <li className={style.bottomItem}>
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
              <li className={style.bottomItem}>
                <dl>
                  <dt>取引先</dt>
                  <dd>
                    <ul>
                      <li>株式会社ソニ～</li>
                      <li>株式会社めちゃめちゃすごい会社</li>
                      <li>株式会社エーベックス</li>
                      <li>株式会社めちゃめちゃすごい会社</li>
                    </ul>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.back}>
          <Link href="/">
            <a>
              <span>もどる</span>
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
