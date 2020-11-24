import { css } from '@emotion/react'
import { MemberType } from '~/types/Member'
import style from '~/styles'

type MemberItemProps = {
  member: MemberType
}

const MemberItem: React.FC<MemberItemProps> = ({ member }) => (
  <li css={item}>
    <dl>
      <dt css={itemHead}>
        <h2>{member.name}</h2>
        <p>{member.role}</p>
      </dt>
      <dd>
        <div css={description}>
          {Array.isArray(member.description) ? (
            <>
              {member.description.map((d, index) => (
                <p key={index}>{d}</p>
              ))}
            </>
          ) : (
            <p>{member.description}</p>
          )}
        </div>

        {member.twitter ||
        member.instagram ||
        member.vimeo ||
        member.facebook ? (
          <div css={sns}>
            <span>SNS</span>
            <ul>
              {member.twitter ? (
                <li className="twitter">
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/common/twitter.svg" alt="twitter" />
                  </a>
                </li>
              ) : null}
              {member.instagram ? (
                <li className="instagram">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/common/instagram.svg" alt="instagram" />
                  </a>
                </li>
              ) : null}
              {member.vimeo ? (
                <li className="vimeo">
                  <a
                    href={member.vimeo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/common/vimeo.svg" alt="vimeo" />
                  </a>
                </li>
              ) : null}
              {member.facebook ? (
                <li className="facebook">
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/common/facebook.svg" alt="facebook" />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}
      </dd>
    </dl>
  </li>
)

const item = css`
  & + & {
    padding: ${style.vwSp(72)} 0 0;
  }
  ${style.pc(css`
    & + & {
      padding: 62px 0 0;
    }
  `)}
`
const itemHead = css`
  h2 {
    font-size: ${style.vwSp(32)};
    font-weight: ${style.config.weight.black};
    line-height: 1;
    letter-spacing: 0.08em;
  }
  p {
    font-size: ${style.vwSp(16)};
    line-height: ${style.vwSp(24)};
    font-weight: ${style.config.weight.extraBold};
    padding: ${style.vwSp(8)} 0 0;
  }
  ${style.pc(css`
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
      padding: 8px 0 0;
      line-height: 1.6;
    }
  `)}
`
const description = css`
  font-size: ${style.vwSp(16)};
  line-height: 1.76;
  padding: ${style.vwSp(20)} 0 0;
  ${style.pc(css`
    font-size: 16px;
    padding: 20px 0 0;
  `)}
`
const sns = css`
  padding: ${style.vwSp(42)} 0 0;
  display: flex;
  span {
    font-size: ${style.vwSp(16)};
    line-height: ${style.vwSp(24)};
    font-weight: ${style.config.weight.extraBold};
  }
  ul {
    display: flex;
    padding-left: ${style.vwSp(32)};
  }
  li + li {
    margin-left: ${style.vwSp(24)};
  }
  .twitter {
    width: ${style.vwSp(24)};
  }
  .instagram {
    width: ${style.vwSp(20)};
  }
  .vimeo {
    width: ${style.vwSp(22.86)};
  }
  .facebook {
    width: ${style.vwSp(10)};
  }
  ${style.pc(css`
    padding: 50px 0 0;
    span {
      font-size: 16px;
      line-height: 1.6;
    }
    ul {
      padding-left: 60px;
    }
    li + li {
      margin-left: 24px;
    }
    .twitter {
      width: 24px;
    }
    .instagram {
      width: 20px;
    }
    .vimeo {
      width: 22.86px;
    }
    .facebook {
      width: 10px;
    }
    a {
      transition: all 0.4s ${style.easing.outExpo};
      display: inline-block;
      &:hover {
        transform: scale(1.1);
        opacity: 0.7;
      }
    }
  `)}
`

export { MemberItem }
