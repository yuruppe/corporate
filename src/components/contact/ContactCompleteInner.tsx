import { CustomLink } from '../common/CustomLink'
import { Picture } from '../common/Picture'
import ContactStyles from './ContactStyles'

const ContactCompleteInner: React.FC = () => {
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
        <h1>お問い合わせが完了しました。</h1>
        <p>
          お問い合わせありがとうございました。
          <br />
          内容を確認し、３営業日以内に返信いたします。
          <br />
          しばらくお待ちください。
        </p>
      </div>
      <div css={ContactStyles.back}>
        <CustomLink href="/">
          <span>トップへもどる</span>
        </CustomLink>
      </div>
    </div>
  )
}

export { ContactCompleteInner }
