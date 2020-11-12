import { NextPage } from 'next'
import Head from 'next/head'
import style from '~/styles/components/page/Home.module.scss'
import cn from 'classnames'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>YURUPPE.inc</title>
      </Head>

      <div className={style.main}>
        <div className={style.inner}>
          <div className={style.innerBack} />
          <h1 className={style.title}>
            観る、学ぶ、
            <br />
            遊ぶ、つくる。
          </h1>
          <p className={style.description}>
            YURUPPE.incはつくる文化をつくります。
            <br />
            映像の枠の中だけで映像をつくろうとしても、進化はしない。映像以外の分野から自分の好きな「点」を見つけて繋いで「線」にしていくことが大事。繋がってる「点」が多ければ多いほどいい。その「線」が繋がり続ければ「面」になって立体に進化していく。
          </p>
        </div>

        <ul className={style.linkList}>
          <li className={style.linkItem}>
            <Link href="/works">
              <a className={style.linkAnchor}>
                <h2 className={cn(style.linkTitle, style.arrow)}>
                  つくったやつ
                </h2>
              </a>
            </Link>
          </li>
          <li className={style.linkItem}>
            <Link href="/blog">
              <a className={style.linkAnchor}>
                <h2 className={cn(style.linkTitle, style.arrow)}>ウラ話</h2>
              </a>
            </Link>
          </li>
          <li className={style.linkItem}>
            <a className={style.linkAnchor}>
              <h2 className={cn(style.linkTitle, style.blank)}>
                映像屋さんの服
              </h2>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
