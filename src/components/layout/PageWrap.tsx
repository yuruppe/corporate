type Props = {
  children: React.ReactNode
}

const PageWrap: React.FC<Props> = ({ children }) => {
  return <div id="page_wrap">{children}</div>
}

export { PageWrap }
