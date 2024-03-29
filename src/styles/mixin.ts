import { css, keyframes, SerializedStyles } from '@emotion/react'
import style from './index'

const mixin = {
  borderSquareFrame: (): SerializedStyles => css`
    position: relative;
    width: 100%;
    height: auto;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      top: ${style.vwSp(16)};
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${style.colors.darkBrown};
      border-radius: ${style.vwSp(24)};
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: ${style.vwSp(6)} solid ${style.colors.darkBrown};
      background-color: white;
      border-radius: ${style.vwSp(24)};
      z-index: -1;
    }
    ${style.pc(css`
      &::before {
        top: 16px;
        border-radius: 32px;
      }
      &::after {
        border-radius: 32px;
        border: 6px solid ${style.colors.darkBrown};
      }
    `)}
  `,
  borderCircleButton: (): SerializedStyles => css`
    position: relative;
    width: 100%;
    height: auto;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      top: ${style.vwSp(8)};
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: ${style.vwSp(60)};
      border: ${style.vwSp(6)} solid ${style.colors.darkBrown};
      background-color: ${style.colors.darkBrown};
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: ${style.vwSp(6)} solid ${style.colors.darkBrown};
      border-radius: ${style.vwSp(60)};
      background-color: white;
      z-index: -1;
    }
    ${style.pc(css`
      &::before {
        top: 8px;
        border-radius: 60px;
        border: 6px solid ${style.colors.darkBrown};
      }
      &::after {
        border: 6px solid ${style.colors.darkBrown};
        border-radius: 60px;
      }
    `)}
  `,
  borderSquareButton: (): SerializedStyles => css`
    position: relative;
    width: 100%;
    height: auto;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      top: ${style.vwSp(8)};
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: ${style.vwSp(24)};
      border: ${style.vwSp(6)} solid ${style.colors.darkBrown};
      background-color: ${style.colors.darkBrown};
      z-index: -1;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: ${style.vwSp(6)} solid ${style.colors.darkBrown};
      border-radius: ${style.vwSp(24)};
      background-color: white;
      z-index: -1;
    }
    span {
      display: block;
      padding: ${style.vwSp(26)} 0;
      text-align: center;
      font-size: ${style.vwSp(20)};
      line-height: 1;
      font-weight: ${style.config.weight.black};
      letter-spacing: 0.08em;
    }
    ${style.pc(css`
      margin: 0 auto;
      &::before {
        top: 8px;
        border-radius: 24px;
        border: 6px solid ${style.colors.darkBrown};
      }
      &::after {
        border: 6px solid ${style.colors.darkBrown};
        border-radius: 24px;
      }
      span {
        padding: 26px 0;
        font-size: 20px;
      }
    `)}
  `,
  titleBottomBorder: (): SerializedStyles => css`
    position: relative;
    text-align: center;
    padding-bottom: ${style.vwSp(24)};
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      display: block;
      transform: translateX(-50%);
      width: ${style.vwSp(72)};
      height: ${style.vwSp(4)};
      border-radius: 30px;
      background-color: ${style.colors.darkBrown};
    }
    ${style.pc(css`
      padding-bottom: 20px;
      &::before {
        width: 72px;
        height: 4px;
        border-radius: 30px;
      }
    `)}
  `,
  mainPcStyle: (): SerializedStyles => css`
    padding: 0 50px 40px;
    max-width: 1180px;
    margin: 0 auto;
  `,
  pop: (size = 1.03): SerializedStyles => keyframes`
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(${size});
    }
    100% {
      transform: scale(1);
    }
  `,
  animPop: (size?: number): SerializedStyles => css`
    /* will-change: transform; */
    &:hover {
      animation: ${mixin.pop(size)} 0.4s ease-in-out;
    }
  `,
  ie: (style: SerializedStyles): SerializedStyles => {
    return css`
      @media all and (-ms-high-contrast: none) {
        ${style}
      }
    `
  },
}

export default mixin
