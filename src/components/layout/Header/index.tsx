import { useContext, useEffect } from 'react'
import cn from 'classnames'
import { AppContext } from '~/store/appContext'
import { CustomLink } from '~/components/common/CustomLink'
import { Menu } from './Menu'
import style from '~/styles'
import { css } from '@emotion/react'
import gsap from 'gsap'

const Header: React.FC = () => {
  const { appState, appDispatch } = useContext(AppContext)

  const defaultInitParam: gsap.TweenVars = {
    opacity: 0,
    y: -40,
  }
  useEffect(() => {
    gsap.set('.header_logo', defaultInitParam)
    gsap.set('.header_button', defaultInitParam)
  }, [])

  useEffect(() => {
    if (!appState.isLoading) {
      const main = 'main'
      gsap
        .timeline({ delay: 1.7 })
        .addLabel(main)
        .to(
          '.header_logo',
          {
            opacity: 1,
            y: 0,
            ease: 'back.out(2.7)',
            duration: 1.0,
          },
          main,
        )
        .to(
          '.header_button',
          {
            opacity: 1,
            y: 0,
            ease: 'back.out(1.7)',
            duration: 1.0,
          },
          main,
        )
    }
  }, [appState.isLoading])

  return (
    <header css={wrap}>
      <div
        css={logo}
        className={cn({ dark: appState.darkMode }, 'header_logo')}
      >
        <CustomLink href="/">
          <svg
            width="146"
            height="40"
            viewBox="0 0 146 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>YURUPPE.inc</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M122.521 0.702405C122.153 1.14307 122.003 1.9758 122.187 2.55267C122.371 3.12955 122.27 3.7561 121.963 3.94519C121.106 4.47239 121.301 5.82804 122.234 5.82804C123.714 5.82804 125.784 3.27537 125.599 1.67829C125.403 -0.0112084 123.595 -0.58488 122.521 0.702405ZM120.004 11.7453C118.906 13.8242 116.955 16.6033 115.669 17.92C113.485 20.1559 113.111 21.3182 114.573 21.3182C114.913 21.3182 116.227 20.3065 117.493 19.0705C119.462 17.1476 119.795 16.9836 119.795 17.9365C119.795 19.3355 120.999 20.3712 122.125 19.9412C122.596 19.7617 123.746 18.4952 124.681 17.1278C125.616 15.7604 126.211 15.1221 126.002 15.7097C125.794 16.2972 125.489 17.4392 125.325 18.2469C125.079 19.4615 125.215 19.7158 126.11 19.7158C126.798 19.7158 127.308 19.2591 127.509 18.46C127.683 17.7699 128.813 16.1472 130.021 14.8545C131.86 12.8857 132.154 12.7212 131.835 13.8402C131.626 14.5746 131.428 16.137 131.395 17.3121C131.342 19.1576 131.503 19.4722 132.571 19.6234C133.252 19.719 134.141 19.5229 134.548 19.187C135.121 18.7137 135.538 18.8248 136.397 19.68C137.688 20.9646 139.643 21.0955 141.693 20.0336C143.681 19.0037 145.746 16.7128 145.314 16.0163C144.74 15.0922 143.685 15.3497 142.379 16.7326C140.984 18.2111 138.674 18.9551 137.893 18.178C137.542 17.8286 137.934 16.8746 139.044 15.3721C140.94 12.8066 141.166 11.4531 139.787 10.9222C139.12 10.6652 138.421 11.068 137.372 12.3136C136.561 13.2777 135.896 14.3391 135.896 14.6718C135.896 15.2888 134.201 17.045 133.605 17.045C133.425 17.045 133.65 15.9575 134.105 14.6286C134.763 12.7083 134.798 12.0497 134.275 11.4237C133.538 10.5397 131.731 10.4014 130.56 11.139C130.03 11.4729 129.582 11.3489 129.138 10.7448C128.146 9.39451 126.248 10.6797 123.911 14.2841C121.642 17.7822 121.328 16.9633 122.95 11.7763C123.506 10.0013 123.828 8.41756 123.666 8.25679C122.798 7.39308 121.8 8.34386 120.004 11.7453ZM18.0855 14.3556C14.7283 18.2324 12.0446 20.5586 11.5251 20.0416C11.3582 19.8755 11.6362 18.6587 12.1434 17.3378C13.4664 13.8899 13.1449 12.5454 10.9481 12.3355C8.51032 12.1026 4.90086 14.3081 2.24193 17.6556C0.0043311 20.4726 -0.432562 22.0665 0.893145 22.5729C1.60967 22.8469 2.49204 22.1146 2.51244 21.2295C2.53176 20.3866 5.16707 17.4189 7.19267 15.9591C9.70614 14.1468 11.1719 13.8637 10.5563 15.3091C8.48349 20.1773 8.41855 22.0585 10.3035 22.6535C11.4183 23.0061 14.001 21.8753 15.104 20.5522C16.0835 19.3776 16.697 19.5117 16.3519 20.8252C16.1914 21.4352 13.3263 24.0883 9.98524 26.721C1.05631 33.7573 -1.44751 37.186 0.7493 39.3722C1.77068 40.3887 5.42631 40.1286 7.42936 38.8968C9.6149 37.5524 13.2244 32.6121 15.8838 27.3252C17.8074 23.5012 19.8561 21.4656 23.8917 19.3686C25.342 18.6149 25.3806 18.6261 24.831 19.6485C23.9787 21.2333 24.137 23.3346 25.152 23.8997C26.2388 24.5049 28.4689 23.9227 30.9824 22.3769C32.6731 21.3369 32.9141 21.3102 33.6853 22.0777C34.1512 22.5414 34.6675 22.9206 34.8328 22.9206C35.7378 22.9206 38.7429 20.5383 40.5243 18.4092C42.2573 16.3378 46.8002 13.2195 46.8002 14.1009C46.8002 14.2563 46.0643 15.394 45.1653 16.6295C42.3024 20.5624 43.8723 23.1102 47.886 21.0447C49.4709 20.2291 49.6496 20.2339 50.6297 21.1163C51.5164 21.9148 52.0053 21.9736 53.8012 21.4966C54.9691 21.1863 55.9245 21.0388 55.9245 21.1692C55.9245 21.299 55.1044 22.4073 54.1018 23.6321C53.0997 24.8564 51.4095 27.3006 50.3463 29.0633C47.5881 33.6361 47.8419 36.9333 50.8036 35.0024C52.1518 34.1232 57.3302 26.6804 58.9215 23.3346C59.7019 21.6932 60.0803 21.3972 61.0792 21.6472C62.4757 21.9955 67.5526 20.635 70.5679 19.1042L72.6311 18.0572L71.994 19.2868C71.6435 19.9636 69.7875 22.8517 67.8692 25.7051C65.7846 28.8069 64.5077 31.2196 64.6951 31.7051C65.2436 33.1276 66.543 32.024 69.5975 27.5431C74.3201 20.6147 74.3684 20.5645 75.6641 21.2546C76.496 21.698 77.1776 21.6926 78.2978 21.2354C79.1286 20.8962 81.3786 20.5399 83.2974 20.4433C85.2161 20.3471 87.3899 20.2275 88.1279 20.1773C88.8659 20.1276 91.6847 20.2766 94.392 20.509C99.8096 20.9737 101.513 20.6959 100.524 19.5106C100.164 19.0785 98.1796 18.6331 95.6334 18.4119C93.2767 18.2073 91.3482 17.8532 91.3482 17.6251C91.3482 17.397 91.8425 16.7652 92.4469 16.2209C93.1317 15.6045 93.486 14.7172 93.3861 13.868C93.2568 12.7596 92.8993 12.4733 91.4754 12.3371C90.1159 12.2068 89.3661 12.5257 88.1209 13.7649C87.2068 14.6745 86.5177 15.9276 86.5177 16.6792C86.5177 17.6556 86.1538 18.0882 85.1125 18.3484C83.2362 18.8173 83.0735 18.5374 83.9012 16.2604C85.2838 12.4557 82.3543 11.3297 78.5522 14.2039L76.5883 15.6883L77.5501 14.2152C79.259 11.5968 77.4079 10.7272 75.2057 13.1143C73.8714 14.5607 69.474 17.5792 68.7006 17.5792C68.4634 17.5792 68.2691 17.0077 68.2691 16.309C68.2691 14.6419 67.0024 13.65 65.2892 13.9764C64.3086 14.1628 63.9898 14.0384 64.1809 13.5443C64.3279 13.1624 64.1165 12.5759 63.7107 12.241C62.9292 11.5952 62.0093 12.3109 60.1367 15.0222C59.2055 16.3699 52.7041 20.1201 52.7041 19.3093C52.7041 19.0508 53.5656 17.8382 54.6186 16.614C56.3962 14.5474 56.6507 13.306 55.2965 13.306C54.9857 13.306 53.6112 14.2301 52.242 15.3598C49.1322 17.9253 46.8452 19.4049 46.5082 19.0689C46.366 18.9274 46.9773 17.9002 47.8666 16.7865C53.2001 10.1076 44.3232 10.4051 38.6543 17.0953C36.0721 20.1431 34.7797 20.8759 35.5521 18.8542C36.2482 17.0312 36.1993 15.4426 35.4463 15.4426C35.1055 15.4426 33.9929 16.4126 32.9731 17.5973C31.1713 19.6928 27.1368 22.2246 26.5426 21.6333C26.3805 21.472 26.8867 20.3786 27.6681 19.2041C29.3277 16.708 29.5257 14.9085 28.1404 14.9085C27.6193 14.9085 25.5395 15.8699 23.5187 17.045C21.498 18.2202 19.7547 19.1816 19.6441 19.1816C19.3232 19.1816 21.5989 13.626 22.1495 13.0657C22.8779 12.3238 22.7582 10.6353 21.9767 10.6359C21.608 10.6364 19.8567 12.3099 18.0855 14.3556ZM90.2855 15.6969C89.9119 16.1445 89.357 16.5109 89.0526 16.5109C88.7478 16.5109 88.9367 16.0286 89.4729 15.4394C90.5828 14.2189 91.3224 14.4528 90.2855 15.6969ZM81.6711 16.0067C81.0131 17.2304 79.6959 17.913 79.1147 17.3319C78.7127 16.9302 80.924 14.9085 81.7655 14.9085C82.0387 14.9085 81.9958 15.4026 81.6711 16.0067ZM65.6102 17.2822C65.2447 17.7207 63.9002 18.6608 62.6217 19.3718C59.4556 21.1328 60.0578 19.5983 63.3479 17.522C65.8275 15.957 66.8017 15.8534 65.6102 17.2822ZM105.661 18.4696C105.097 19.0305 105.243 20.6842 105.891 21.0826C106.215 21.2819 106.858 21.0677 107.321 20.6072C108.015 19.9171 108.041 19.6234 107.472 18.9413C106.724 18.0439 106.22 17.913 105.661 18.4696ZM12.3962 29.1968C8.49046 35.6364 6.23193 37.8766 3.64546 37.8766C1.95371 37.8766 1.90272 37.3948 3.39481 35.5066C4.69797 33.8577 12.488 27.2461 13.1648 27.2146C13.4101 27.2028 13.0644 28.0954 12.3962 29.1968Z"
              fill="black"
            />
          </svg>
        </CustomLink>
      </div>
      <div className="header_button">
        <div css={button} className={cn({ open: appState.menu.isOpen })}>
          <div
            css={top}
            className={cn(
              { dark: appState.darkMode },
              { open: appState.menu.isOpen },
            )}
            onClick={(): void => {
              if (appState.menu.isAnim) return
              if (appState.menu.isOpen) {
                appDispatch({ type: 'CLOSE_MENU' })
              } else {
                appDispatch({ type: 'OPEN_MENU' })
              }
            }}
          >
            <div css={hamburger} className={cn({ open: appState.menu.isOpen })}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div />
          <div css={bottom} className={cn({ dark: appState.darkMode })} />
        </div>
      </div>
      <nav css={nav}>
        <Menu />
      </nav>
    </header>
  )
}

const wrap = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  z-index: 100;
  ${style.pc(css`
    padding: 55px 91px;
  `)}
`

const logo = css`
  width: 145.37px;
  height: auto;
  pointer-events: auto;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: black;
    }
  }
  &.dark {
    svg {
      width: 100%;
      height: 100%;
      path {
        fill: white;
      }
    }
  }
  ${style.pc(css`
    width: 189px;
    a {
      transition: opacity 0.4s ease;
      &:hover {
        opacity: 0.6;
      }
    }
  `)}
`
const top = css`
  width: 100%;
  height: 100%;
  border: 4px solid ${style.colors.darkBlue};
  border-radius: inherit;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ${style.easing.outBack},
    background-color 0.2s ease-in-out;
  &.dark {
    border-color: ${style.colors.blogDark};
  }
  &.open {
    transform: translateY(6%) !important;
  }
`
const button = css`
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 60px;
  z-index: 10;
  pointer-events: auto;
  cursor: pointer;
  transition: transform 0.3s ${style.easing.outBack};
  &.open {
    transform: rotate(1deg);
  }
  ${style.pc(css`
    &:hover {
      .css-${top.name} {
        background-color: #eeeeee;
        transform: translateY(1%);
      }
    }
  `)}
`
const hamburger = css`
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 20px;
    background-color: black;
    transition: opacity 0.1s ease, top 0.4s ${style.easing.outBack},
      transform 0.4s ${style.easing.outBack};
    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 8px;
    }
    &:nth-of-type(3) {
      top: 16px;
    }
  }
  &.open {
    span {
      &:nth-of-type(1) {
        top: 8px;
        transform: rotate(45deg);
      }
      &:nth-of-type(2) {
        opacity: 0;
      }
      &:nth-of-type(3) {
        top: 8px;
        transform: rotate(-45deg);
      }
    }
  }
`
const bottom = css`
  position: absolute;
  top: 8px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${style.colors.darkBlue};
  border-radius: inherit;
  z-index: -1;
  &.dark {
    background-color: ${style.colors.blogDark};
  }
`

const nav = css`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

export { Header }
