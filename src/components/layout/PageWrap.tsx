type Props = {
  children: React.ReactNode
}

const PageWrap: React.FC<Props> = ({ children }) => {
  return (
    <div id="page_wrap" style={{ opacity: 0 }}>
      {children}
    </div>
  )
}

export { PageWrap }
