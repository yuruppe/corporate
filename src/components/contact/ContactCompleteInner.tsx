import { useContext, useEffect } from 'react'
import { AppContext } from '~/store/appContext'
import { CustomLink } from '../common/CustomLink'
import { Picture } from '../common/Picture'
import ContactStyles from './ContactStyles'
import gsap from 'gsap'

const ContactCompleteInner: React.FC = () => {
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
    gsap.set('.contact_title', defaultInitParam)
    gsap.set('.contact_inner', defaultInitParam)
    gsap.set('.contact_button', defaultInitParam)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const main = 'main'
      gsap
        .timeline({
          delay: 1.2,
        })
        .addLabel(main)
        .to('.contact_title', defaultAnimParam, main)
        .to('.contact_inner', defaultAnimParam, main + '+=0.2')
        .to('.contact_button', defaultAnimParam, main + '+=0.6')
    }
  }, [isLoading])
  return (
    <div css={ContactStyles.main}>
      <div>
        <h2 css={ContactStyles.title} className="contact_title">
          <Picture
            webp={require('@public/img/page/contactTitle.png?webp')}
            img={require('@public/img/page/contactTitle.png')}
            alt="お問い合わせ"
          />
        </h2>
      </div>
      <div css={ContactStyles.result} className="contact_inner">
        <h1>お問い合わせが完了しました。</h1>
        <p>
          お問い合わせありがとうございました。
          <br />
          内容を確認し、３営業日以内に返信いたします。
          <br />
          しばらくお待ちください。
        </p>
      </div>
      <div css={ContactStyles.back} className="contact_button">
        <CustomLink href="/">
          <span>トップへもどる</span>
        </CustomLink>
      </div>
    </div>
  )
}

export { ContactCompleteInner }
