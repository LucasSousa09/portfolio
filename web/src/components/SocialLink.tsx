interface SocilLinkProps{
  imgSrc: string,
  altAtb: string,
  linkUrl: string,
  linkShown?: string
}

export function SocialLink({imgSrc, altAtb, linkUrl, linkShown}: SocilLinkProps){
  return (
    <div>
      <img src={imgSrc} alt={altAtb} />
      <a href={linkUrl}>
        {
          linkShown ? linkShown : linkUrl
        }
      </a>
    </div>
  )
}