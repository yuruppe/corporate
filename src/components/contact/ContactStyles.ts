import { css } from '@emotion/react'
import style from '~/styles'

const main = css`
  position: relative;
  width: 100%;
  padding: 0 ${style.vwSp(style.config.project.paddingSpSide)} ${style.vwSp(48)};
  ${style.pc(css`
    ${style.mixin.mainPcStyle()}
  `)}
`

const title = css`
  ${style.mixin.titleBottomBorder()}
  img {
    width: ${style.vwSp(212)};
  }
  ${style.pc(css`
    img {
      width: 212px;
    }
  `)}
`

const body = css`
  position: relative;
  margin: ${style.vwSp(88)} 0 0;
  width: 100%;
  border-radius: ${style.vwSp(16)};
  padding: ${style.vwSp(40)} ${style.vwSp(32)} ${style.vwSp(53)};
  background-color: white;
  ${style.pc(css`
    margin: 80px 0 0;
    border-radius: 16px;
    padding: 92px 88px 92px;
  `)}
`
const intro = css`
  font-size: ${style.vwSp(16)};
  line-height: 1.6;
  letter-spacing: 0.08em;
  &.note {
    padding: ${style.vwSp(24)} 0 0;
    font-weight: ${style.config.weight.extraBold};
    color: ${style.colors.darkBlue};
  }
  ${style.pc(css`
    font-size: 16px;
    &.note {
      padding: 32px 0 0;
    }
  `)}
`

const form = css`
  position: relative;
  ${style.pc(css`
    padding: 16px 0 0;
  `)}
`

const formItem = css`
  padding: ${style.vwSp(40)} 0 0;
  ${style.pc(css`
    padding: 52px 0 0;
    display: flex;
    justify-content: space-between;
  `)}
`

const formLabel = css`
  font-weight: ${style.config.weight.extraBold};
  font-size: ${style.vwSp(16)};
  line-height: 1.6;
  letter-spacing: 0.08em;
  padding-bottom: ${style.vwSp(4)};
  &::after {
    content: '*';
    color: ${style.colors.darkBlue};
  }
  &.elective {
    &::after {
      display: none;
    }
  }
  ${style.pc(css`
    font-size: 16px;
    padding-bottom: 0;
    padding-top: 18px;
  `)}
`

const formInput = css`
  position: relative;
  input,
  textarea {
    width: 100%;
    font-family: $baseFont;
    background-color: white;
    border-radius: ${style.vwSp(16)};
    border: 2px solid ${style.colors.defaultGray};
    padding: ${style.vwSp(16)} ${style.vwSp(15)};
    transition: 0.1s all ease-in-out;
    font-size: ${style.vwSp(16)};
    &:focus {
      outline: none;
      border: 2px solid black;
    }
    &::placeholder {
      font-size: ${style.vwSp(16)};
      font-weight: 500;
      color: ${style.colors.defaultGray};
    }
    &:disabled {
      cursor: default;
    }
    &.detailArea {
      min-height: ${style.vwSp(390)};
    }
  }
  &.error {
    input,
    textarea {
      border: 2px solid ${style.colors.errorRed};
    }
  }
  ${style.pc(css`
    width: 450px;
    input,
    textarea {
      border-radius: 16px;
      border: 2px solid ${style.colors.defaultGray};
      padding: 16px;
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
      }
      &.detailArea {
        min-height: 390px;
      }
    }
  `)}
`

const formError = css`
  padding: ${style.vwSp(8)} 0 0;
  font-size: ${style.vwSp(16)};
  line-height: 1.6;
  letter-spacing: 0.08em;
  color: ${style.colors.errorRed};
  font-weight: ${style.config.weight.extraBold};
  ${style.pc(css`
    padding: 8px 0 0;
    font-size: 16px;
  `)}
`

const formAgree = css`
  padding: ${style.vwSp(40)} 0 0;
  font-size: ${style.vwSp(12)};
  font-weight: ${style.config.weight.extraBold};
  text-align: center;
  input {
    position: absolute;
    opacity: 0;
    &:checked {
      & + .check {
        opacity: 1;
      }
    }
  }
  label {
    position: relative;
    display: inline-block;
    padding-left: ${style.vwSp(28)};
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: ${style.vwSp(22)};
      height: ${style.vwSp(22)};
      border: 2px solid ${style.colors.darkBlue};
      border-radius: ${style.vwSp(4)};
      transform: translateY(-50%);
    }
    &::before {
    }
  }
  .check {
    position: absolute;
    top: 50%;
    left: ${style.vwSp(6.3)};
    width: ${style.vwSp(11)};
    height: ${style.vwSp(6.5)};
    background-image: url('/img/common/check.svg');
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateY(-46%);
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }
  a {
    display: inline-block;
    position: relative;
    color: ${style.colors.darkBlue};

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${style.colors.darkBlue};
    }
  }
  span {
    &::after {
      content: '*';
      color: ${style.colors.darkBlue};
    }
  }
  .css-${formError.name} {
    position: absolute;
    top: 100%;
    left: 0;
  }
  ${style.pc(css`
    padding: 80px 0 0;
    font-size: 12px;
    label {
      padding-left: 28px;
      &::before {
        width: 22px;
        height: 22px;
        border: 2px solid ${style.colors.darkBlue};
        border-radius: 4px;
        transform: translateY(-50%);
      }
      cursor: pointer;
    }
    a {
      &::before {
        left: -22px;
        width: 11px;
        height: 6.5px;
      }
    }
  `)}
`

const formSubmit = css`
  margin: ${style.vwSp(40)} 0 0;
  ${style.mixin.borderSquareButton()}
  text-align: center;
  opacity: 0.6;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: auto;
  }
  input {
    width: 100%;
    cursor: pointer;
    padding: ${style.vwSp(16)};
    font-size: ${style.vwSp(16)};
    line-height: ${style.vwSp(24)};
    letter-spacing: 0.1em;
    font-weight: ${style.config.weight.black};
    color: black;
  }
  ${style.pc(css`
    width: 352px;
    margin: 40px auto 0;
    input {
      padding: 16px;
      font-size: 16px;
      line-height: 24px;
    }
  `)}
`

const formConfirmText = css`
  display: inline-block;
  padding: ${style.vwSp(16)} 0 0;
  font-size: ${style.vwSp(16)};
  line-height: 1.6;
  letter-spacing: 0.08em;
  ${style.pc(css`
    padding: 16px 0 0;
    font-size: 16px;
  `)}
`

const formSubmitWrap = css`
  display: flex;
  justify-content: space-between;

  .css-${formSubmit.name} {
    &::before,
    &::after {
      border-radius: ${style.vwSp(16)};
    }
    &:first-of-type {
      width: ${style.vwSp(125)};
    }
    &:last-child {
      width: ${style.vwSp(159)};
    }
  }
  ${style.pc(css`
    display: flex;
    justify-content: center;
    .css-${formSubmit.name} {
      margin: 80px 0 0;
      &::before,
      &::after {
        border-radius: 16px;
      }
      &:first-of-type {
        width: 171px;
      }
      &:last-child {
        width: 271px;
        margin-left: 8px;
      }
    }
  `)}
`

const result = css`
  position: relative;
  margin: ${style.vwSp(88)} 0 0;
  width: 100%;
  border-radius: ${style.vwSp(16)};
  padding: ${style.vwSp(40)} ${style.vwSp(32)};
  background-color: white;
  h1 {
    font-size: ${style.vwSp(20)};
    font-weight: ${style.config.weight.black};
    line-height: 1.6;
    letter-spacing: 0.08em;
  }
  p {
    padding: ${style.vwSp(20)} 0 0;
    font-size: ${style.vwSp(16)};
    line-height: 1.6;
    letter-spacing: 0.08em;
  }
  a {
    position: relative;
    display: inline-block;
    margin: ${style.vwSp(20)} 0 0;
    font-size: ${style.vwSp(16)};
    line-height: 1.6;
    letter-spacing: 0.08em;
    color: ${style.colors.darkBlue};
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${style.colors.darkBlue};
    }
  }
  ${style.pc(css`
    margin: 88px 0 0;
    border-radius: 16px;
    padding: 92px 88px 92px;
    h1 {
      font-size: 20px;
    }
    p {
      padding: 20px 0 0;
      font-size: 16px;
    }
    a {
      margin: 20px 0 0;
      font-size: 16px;
    }
  `)}
`

const back = css`
  margin: ${style.vwSp(40)} 0 0;
  ${style.mixin.borderSquareButton()}
  ${style.pc(css`
    width: 352px;
    margin: 40px auto 0;
  `)}
`

export default {
  back,
  result,
  formSubmitWrap,
  formConfirmText,
  formSubmit,
  formAgree,
  formError,
  formInput,
  formLabel,
  formItem,
  form,
  intro,
  body,
  title,
  main,
}
