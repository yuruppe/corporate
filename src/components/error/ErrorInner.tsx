import { CustomLink } from '../common/CustomLink'
import { Picture } from '../common/Picture'
import ContactStyles from '../contact/ContactStyles'

const ErrorInner: React.FC = () => {
  return (
    <div css={ContactStyles.main}>
      <div>
        <h2 css={ContactStyles.title} className="error">
          <Picture
            webp={require('@public/img/page/errorTitle.png?webp')}
            img={require('@public/img/page/errorTitle.png')}
            alt="404 NOT FOUND"
          />
        </h2>
      </div>
      <div css={ContactStyles.result}>
        <h1>お探しのページが見つかりませんでした。</h1>
        <p>
          お探しのページを探しましたが、見つかりませんでした。URLが間違っているか、ページが存在しないようです。
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

export { ErrorInner }
