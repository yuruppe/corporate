import { css } from '@emotion/react'
import index from './index'

const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
  ::before,
  ::after {
    text-decoration: inherit; /* 1 */
    vertical-align: inherit; /* 2 */
  }
  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }
`

const globalStyles = css`
  ${reset}

  html {
    font-family: 'M PLUS Rounded 1c', 'Helvetica Neue', Arial,
      'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;
    text-align: left;
    width: 100%;
    height: 100%;
    cursor: default;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    width: 100%;
    height: 100%;
  }
  #__next {
    position: relative;
    width: 100%;
    height: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
  input,
  button,
  select,
  textarea {
    font-family: inherit;
  }
  input[type='text'],
  input[type='tel'],
  input[type='submit'] {
    padding: 0;
    border: none;
    border-radius: 0;
    outline: none;
    background: none;
    font-family: inherit;
  }
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    resize: none;
    padding: 0;
    border: 0;
    outline: none;
    background: transparent;
  }
  ${index.pc(css`
    .sp-only {
      display: none !important;
    }
  `)}
  ${index.sp(css`
    .pc-only {
      display: none !important;
    }
  `)}
`

export { globalStyles }
