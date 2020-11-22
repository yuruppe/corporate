import { CustomLink } from '../common/CustomLink'
import { Picture } from '../common/Picture'
import ContactStyles from './ContactStyles'

const ContactErrorInner: React.FC = () => {
  return (
    <div css={ContactStyles.main}>
      <div>
        <h2 css={ContactStyles.title}>
          <Picture
            webp={require('@public/img/page/contactTitle.png?webp')}
            img={require('@public/img/page/contactTitle.png')}
            alt="お問い合わせ"
          />
        </h2>
      </div>
      <div css={ContactStyles.result}>
        <h1>技術的な理由で、問題が発生しました。</h1>
        <p>大変申し訳ございませんが、問題が発生しました。</p>
        <p>お急ぎの場合は下記のメールアドレスまでお願いいたします。</p>
        <a href="mailto:tete@yuruppe.co.jp">tete@yuruppe.co.jp</a>
      </div>
      <div css={ContactStyles.back}>
        <CustomLink href="/">
          <span>トップへもどる</span>
        </CustomLink>
      </div>
    </div>
  )
}

export { ContactErrorInner }
