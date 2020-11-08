import style from '~/styles/components/page/Member.module.scss'
import { MemberType } from '~/types/Member'

type MemberItemProps = {
  member: MemberType
}

const MemberItem: React.FC<MemberItemProps> = ({ member }) => (
  <li className={style.item}>
    <dl>
      <dt className={style.itemHead}>
        <h2>{member.name}</h2>
        <p>{member.role}</p>
      </dt>
      <dd>
        <div className={style.description}>
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
          <div className={style.sns}>
            <span>SNS</span>
            <ul>
              {member.twitter ? (
                <li className={style.twitter}>
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
                <li className={style.instagram}>
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
                <li className={style.vimeo}>
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
                <li className={style.facebook}>
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

export { MemberItem }
