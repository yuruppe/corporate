type Props = {
  webp: any
  img: any
  alt?: string
}

const Picture: React.FC<Props> = ({ webp, img, alt }) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img src={img} alt={alt ?? ''} />
    </picture>
  )
}

export { Picture }
